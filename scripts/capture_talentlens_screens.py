"""Capture real UI from the TalentLens Vercel deployment for the portfolio.

Requires:
  pip install playwright pillow
  python -m playwright install chromium

Provide TALENTLENS_CAPTURE_URL (deployment URL) and, for protected previews,
TALENTLENS_SHARE_URL (temporary Vercel share link with auth cookie).
Uses only the app's fictional built-in demo. Never inputs real customer data.
Screenshots are actual browser pixels, not illustrations or fabricated charts.
"""
from __future__ import annotations

import json
import os
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urljoin

from PIL import Image
from playwright.sync_api import sync_playwright

BASE = os.environ.get("TALENTLENS_CAPTURE_URL", "https://talentlens.adryanrizkyalviano.me").rstrip("/")
SHARE = os.environ.get("TALENTLENS_SHARE_URL", "")
OUT = Path("public/projects/talent-estimation-agent")
OUT.mkdir(parents=True, exist_ok=True)

PAGES = [
    ("summary", "/hasil/ringkasan", ".tl-summary-metrics"),
    ("breakdown", "/hasil/breakdown", "input[aria-label='Cari item']"),
    ("monthly", "/hasil/bulanan", ".recharts-wrapper"),
    ("ai-assist", "/hasil/peluang-ai", ".tl-ai-role-list"),
    ("findings", "/hasil/temuan", "h1"),
    ("message", "/hasil/pesan", "textarea[aria-label='Draf pesan']"),
    ("catalog", "/katalog", ".tl-resource-hero"),
    ("method", "/metodologi", ".tl-method-grid"),
    ("settings", "/pengaturan", ".tl-settings-main"),
    ("about", "/tentang", ".tl-about-journey"),
]

manifest = {"source": BASE, "captured_at": datetime.now(timezone.utc).isoformat(), "images": [], "demo_completed": False}

def capture(page, name: str):
    """Save the actual browser viewport in two web-friendly WebP sizes."""
    page.evaluate("window.scrollTo(0, 0)")
    page.wait_for_timeout(650)
    png = page.screenshot(full_page=False, animations="disabled")
    from io import BytesIO
    with Image.open(BytesIO(png)) as image:
        im = image.convert("RGB")
        main = OUT / f"{name}.webp"
        im.save(main, "WEBP", quality=88, method=6)
        sm = im.copy()
        sm.thumbnail((800, 520))
        thumb = OUT / f"{name}-sm.webp"
        sm.save(thumb, "WEBP", quality=81, method=6)
    print(f"CAPTURE {name}: {main.stat().st_size} bytes", flush=True)
    manifest["images"].append({"name": name, "path": str(main), "size_bytes": main.stat().st_size})

with sync_playwright() as play:
    browser = play.chromium.launch(headless=True, args=["--no-sandbox", "--disable-dev-shm-usage"])
    context = browser.new_context(viewport={"width": 1600, "height": 940}, device_scale_factor=1, color_scheme="light", reduced_motion="reduce")
    page = context.new_page()
    page.set_default_timeout(20000)
    page.on("pageerror", lambda error: print("BROWSER ERROR:", str(error)[:300], flush=True))

    if SHARE:
        response = page.goto(SHARE, wait_until="domcontentloaded", timeout=60000)
        print("AUTH:", response.status if response else "none", page.url, flush=True)

    response = page.goto(BASE + "/", wait_until="domcontentloaded", timeout=60000)
    if not response or response.status >= 400:
        raise RuntimeError(f"Home failed: {response.status if response else 'no response'}")
    if "TalentLens" not in page.locator("body").inner_text(timeout=20000):
        raise RuntimeError("Expected TalentLens site not visible; check deployment access")
    page.wait_for_timeout(1300)
    capture(page, "home")

    demo = page.get_by_role("button", name="Coba data contoh")
    demo.wait_for(timeout=20000)
    demo.click()
    page.wait_for_url("**/proses", timeout=40000)
    page.locator(".tl-journey-stage-track").wait_for(timeout=25000)
    page.wait_for_timeout(2200)
    capture(page, "process")

    # The demo replays the actual agent event sequence before exposing the result.
    page.get_by_role("button", name="Lihat hasil").wait_for(timeout=180000)
    manifest["demo_completed"] = True
    print("DEMO COMPLETED, loading result pages", flush=True)

    for name, route, selector in PAGES:
        url = urljoin(BASE + "/", route.lstrip("/"))
        row = {"name": name, "url": url}
        try:
            resp = page.goto(url, wait_until="domcontentloaded", timeout=60000)
            row["status"] = resp.status if resp else None
            if not resp or resp.status >= 400:
                raise RuntimeError(f"HTTP {row['status']}")
            page.locator(selector).first.wait_for(timeout=22000)
            page.wait_for_timeout(950)
            capture(page, name)
        except Exception as exc:
            row["error"] = repr(exc)[:260]
            print("SCREENSHOT FAILED", name, row["error"], flush=True)
        manifest.setdefault("pages", []).append(row)
    context.close()
    browser.close()

(OUT / "capture-manifest.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print("DONE", json.dumps({"captured": [p["name"] for p in manifest["images"]], "demo": manifest["demo_completed"]}), flush=True)
