"""Capture real LoadTwin pages and their rendered simulation results.

This runs in GitHub Actions where Chromium can access the public LoadTwin site.
No mocked DOM, fabricated charts, or generated illustration is involved.
An analysis screenshot may capture its real setup state if a result cannot load.
"""
from __future__ import annotations

import json
import os
import re
import time
from datetime import datetime, timezone
from pathlib import Path

from PIL import Image
from playwright.sync_api import sync_playwright, TimeoutError as PlaywrightTimeout

BASE = os.environ.get("LOADTWIN_CAPTURE_URL", "https://loadtwin.adryanrizkyalviano.me").rstrip("/")
OUT = Path("public/projects/loadtwin/screens")
OUT.mkdir(parents=True, exist_ok=True)

TOOLS = [
    ("evaluate", "/evaluate/", "Evaluate"),
    ("autosize", "/autosize/", "Find the cheapest setup"),
    ("patterns", "/patterns/", "Run pattern"),
    ("failures", "/failures/", "Run failure"),
    ("sensitivity", "/sensitivity/", "Analyse"),
    ("validate", "/validate/", "Validate"),
    ("ask", "/ask/", "Ask"),
]

def click_best(page, loc, timeout=9000):
    if loc.count() < 1:
        return False
    try:
        loc.first.click(timeout=timeout)
        return True
    except Exception as exc:
        print(f"Click unavailable: {str(exc)[:200]}", flush=True)
        return False


def capture(page, name):
    """Record actual browser pixels, reduce size without altering the UI."""
    png = Path("/tmp") / f"loadtwin-{name}.png"
    out = OUT / (name + ".webp")
    page.screenshot(path=str(png), full_page=False, animations="disabled")
    with Image.open(png) as original:
        im = original.convert("RGB")
        im.save(out, "WEBP", quality=87, method=6)
    print(f"CAPTURE {name}: {out.stat().st_size:,} bytes", flush=True)
    return str(out)


def center_results(page, tool, result_loaded):
    """Keep the genuine controls and results visible in the same viewport."""
    try:
        if tool == "live":
            page.locator(".lt-home-demo-active").first.scroll_into_view_if_needed(timeout=4000)
            page.evaluate("window.scrollBy(0, -130)")
        elif result_loaded:
            page.locator("section#results").first.scroll_into_view_if_needed(timeout=4000)
            page.evaluate("window.scrollBy(0, -180)")
        else:
            page.evaluate("window.scrollTo(0, 0)")
        page.wait_for_timeout(700)
    except Exception as e:
        print(f"Scroll not available: {str(e)[:120]}", flush=True)


def wait_for_result(page, timeout_ms=72000):
    """Wait for a real application result, not just a finished network request."""
    try:
        page.wait_for_function("""() => {
          const results = document.querySelector('section#results');
          if (!results) return false;
          const busy = results.getAttribute('aria-busy') === 'true';
          const text = results.innerText || '';
          if (busy || text.length < 35) return false;
          return Boolean(
            results.querySelector('.verdict, .stats, .tornado, .chart, .table-wrap, [aria-label="Recommendation"], [aria-label="Validation grade"]')
          ) && !results.querySelector('.tool-idle');
        }""", timeout=timeout_ms)
        return True
    except PlaywrightTimeout:
        print("RESULT TIMEOUT: capture will show actual UI with its current state.", flush=True)
        return False


def run_tool(page, tool, submit):
    action = {"run_clicked": False, "result_loaded": False, "error": None}
    try:
        if tool == "failures":
            presets = page.locator('button.preset')
            matches = presets.filter(has_text=re.compile(r"node|crash", re.I))
            action["preset_clicked"] = click_best(page, matches)
        elif tool == "validate":
            samples = page.get_by_text("No file handy? Try a sample:")
            if samples.count():
                scope = samples.first.locator("..")
                buttons = scope.locator("button")
                if buttons.count():
                    action["sample_clicked"] = click_best(page, buttons)
                    page.wait_for_timeout(1600)
        elif tool == "ask":
            prompt = page.locator("#q")
            if prompt.count():
                prompt.fill("What if traffic doubles on payday?")
                action["question"] = "What if traffic doubles on payday?"

        button = page.get_by_role("button", name=submit, exact=True)
        if button.count() and not button.first.is_disabled():
            button.first.click(timeout=10000)
            action["run_clicked"] = True
            page.wait_for_timeout(1100)
            action["result_loaded"] = wait_for_result(page)
        else:
            action["error"] = "The application's Run button is disabled or unavailable."
    except Exception as exc:
        action["error"] = f"{type(exc).__name__}: {str(exc)[:340]}"
    return action


manifest = {"source": BASE, "captured_at": datetime.now(timezone.utc).isoformat(), "shots": []}
with sync_playwright() as p:
    browser = p.chromium.launch(headless=True, args=["--no-sandbox"])
    context = browser.new_context(
        viewport={"width": 1600, "height": 1000},
        device_scale_factor=1,
        color_scheme="light",
        reduced_motion="no-preference",
    )
    page = context.new_page()
    page.set_default_timeout(12000)
    page.on("pageerror", lambda error: print("PAGE ERROR:", str(error)[:300], flush=True))

    # One screenshot of the actual Live Playground; the application itself
    # opens it in response to the hash route.
    url = BASE + "/#try"
    try:
        response = page.goto(url, wait_until="domcontentloaded", timeout=60000)
        if not response or response.status >= 400:
            raise RuntimeError(f"HTTP {response.status if response else 'none'}")
        page.wait_for_timeout(2200)
        if not page.locator(".lt-home-demo-active").count():
            click_best(page, page.get_by_role("button", name=re.compile("Launch playground", re.I)))
        try:
            page.locator(".lt-home-demo-active").wait_for(timeout=11000)
        except PlaywrightTimeout:
            pass
        page.wait_for_timeout(2400)
        center_results(page, "live", True)
        path = capture(page, "live")
        manifest["shots"].append({"id": "live", "source_url": url, "image": path, "result_loaded": page.locator(".lt-home-demo-active").count() > 0})
    except Exception as exc:
        print("LIVE CAPTURE FAILED:", repr(exc), flush=True)
        manifest["shots"].append({"id": "live", "source_url": url, "error": repr(exc)[:500]})

    for tool, route, button_name in TOOLS:
        url = BASE + route
        item = {"id": tool, "source_url": url}
        started = time.time()
        try:
            response = page.goto(url, wait_until="domcontentloaded", timeout=60000)
            if not response or response.status >= 400:
                raise RuntimeError(f"HTTP {response.status if response else 'none'}")
            page.wait_for_timeout(1700)
            action = run_tool(page, tool, button_name)
            item.update(action)
            center_results(page, tool, action["result_loaded"])
            item["image"] = capture(page, tool)
        except Exception as exc:
            item["error"] = f"{type(exc).__name__}: {str(exc)[:500]}"
            print("CAPTURE ERROR", tool, repr(exc), flush=True)
        item["elapsed_seconds"] = round(time.time() - started, 1)
        manifest["shots"].append(item)
        print("SHOT STATUS", json.dumps(item, ensure_ascii=False), flush=True)

    context.close()
    browser.close()

(OUT / "capture-manifest.json").write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + "\n")
print("SCREENSHOTS:", json.dumps(manifest, ensure_ascii=False), flush=True)
