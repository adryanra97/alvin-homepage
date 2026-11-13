"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, Expand } from "lucide-react";

type Screen = {
  id: string;
  title: string;
  category: string;
  description: string;
  src: string;
  href: string;
  alt: string;
};

const ROOT = "/projects/loadtwin/screens/";
const BASE = "https://loadtwin.adryanrizkyalviano.me";
const SCREENS: Screen[] = [
  {
    id: "live", title: "Live Playground", category: "INTERACTIVE MODEL",
    description: "The actual request-flow playground: a load balancer distributes moving traffic across service nodes, with database and external API dependencies. Change traffic and resources directly in the live app.",
    src: ROOT + "live.webp", href: BASE + "/#try",
    alt: "Actual LoadTwin Live Playground showing animated request flow, three service nodes and adjustment controls.",
  },
  {
    id: "evaluate", title: "Capacity Evaluation", category: "SLA ASSESSMENT",
    description: "The real Evaluate interface, where normal, peak and stress scenarios are checked against service latency, CPU and error limits. Run it to explore verdicts, headroom and resource bottlenecks.",
    src: ROOT + "evaluate.webp", href: BASE + "/evaluate/",
    alt: "Actual LoadTwin Evaluate page showing capacity analysis inputs and available results.",
  },
  {
    id: "autosize", title: "Auto-size", category: "INFRASTRUCTURE PLANNING",
    description: "Explore how the real Auto-size tool compares instance types, number of nodes and estimated costs to find an infrastructure configuration that satisfies the selected limits.",
    src: ROOT + "autosize.webp", href: BASE + "/autosize/",
    alt: "Actual LoadTwin Auto-size page showing machine configuration and capacity planning interface.",
  },
  {
    id: "patterns", title: "Load Patterns", category: "TRAFFIC BEHAVIOUR",
    description: "Model realistic demand changing over time, rather than a single fixed throughput. Examine the spike or ramp, worst SLA window and recovery where a simulation result is available.",
    src: ROOT + "patterns.webp", href: BASE + "/patterns/",
    alt: "Actual LoadTwin Load Patterns page showing traffic pattern inputs and analysis area.",
  },
  {
    id: "failures", title: "Failure Testing", category: "RESILIENCE",
    description: "Run the node-crash scenario, database slowdown or external API failure in LoadTwin. Compare healthy and degraded conditions, response times, errors and recovery.",
    src: ROOT + "failures.webp", href: BASE + "/failures/",
    alt: "Actual LoadTwin Failure Testing page showing node-failure controls and resilience analysis.",
  },
  {
    id: "sensitivity", title: "Sensitivity Analysis", category: "PERFORMANCE DRIVERS",
    description: "Find out which inputs have the biggest effect on p95. The actual analysis can rank hardware and performance variables to guide the next experiment.",
    src: ROOT + "sensitivity.webp", href: BASE + "/sensitivity/",
    alt: "Actual LoadTwin Sensitivity Analysis interface for comparing performance parameter influence.",
  },
  {
    id: "validate", title: "Model Validation", category: "MODEL TRUST",
    description: "Compare the simulator's predictions with measurements imported from a load-testing tool. The real page supports sample data and reports agreement with observed results.",
    src: ROOT + "validate.webp", href: BASE + "/validate/",
    alt: "Actual LoadTwin Model Validation page showing measured-versus-predicted comparison workflow.",
  },
  {
    id: "ask", title: "Ask LoadTwin", category: "SCENARIO EXPLORATION",
    description: "Turn a question such as 'What if traffic doubles on payday?' into a simulation-backed answer. The actual tool provides the assumptions, outcome and supporting scenario.",
    src: ROOT + "ask.webp", href: BASE + "/ask/",
    alt: "Actual LoadTwin Ask page with a natural-language question and simulation-backed answer area.",
  },
];

export default function LoadTwinRealGallery() {
  const [selected, setSelected] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = SCREENS[selected];

  function move(delta: number) {
    const next = (selected + delta + SCREENS.length) % SCREENS.length;
    setSelected(next);
    refs.current[next]?.focus();
  }

  return (
    <div className="lt-real-gallery">
      <div className="lt-real-head">
        <span><i aria-hidden="true" /> CAPTURED FROM THE LIVE APPLICATION</span>
        <span>8 REAL INTERFACES · NO CONCEPT ART</span>
      </div>

      <div className="lt-real-layout">
        <nav className="lt-real-nav" role="tablist" aria-label="LoadTwin application screens" aria-orientation="vertical"
          onKeyDown={e => {
            if (e.key === "ArrowDown" || e.key === "ArrowRight") { e.preventDefault(); move(1); }
            if (e.key === "ArrowUp" || e.key === "ArrowLeft") { e.preventDefault(); move(-1); }
            if (e.key === "Home") { e.preventDefault(); setSelected(0); refs.current[0]?.focus(); }
            if (e.key === "End") { e.preventDefault(); setSelected(SCREENS.length-1); refs.current[SCREENS.length-1]?.focus(); }
          }}>
          {SCREENS.map((screen, i) => (
            <button type="button" role="tab" key={screen.id} id={"lt-real-tab-" + screen.id}
              aria-selected={i === selected} aria-controls="lt-real-panel" tabIndex={i === selected ? 0 : -1}
              className={"lt-real-nav-item" + (selected === i ? " is-active" : "")}
              onClick={() => setSelected(i)}
              ref={el => { refs.current[i] = el; }}>
              <span className="lt-real-nav-num">0{i+1}</span>
              <span><strong>{screen.title}</strong><small>{screen.category}</small></span>
              {i === selected && <span className="lt-real-nav-arrow" aria-hidden="true">↗</span>}
            </button>
          ))}
        </nav>

        <div id="lt-real-panel" role="tabpanel" aria-labelledby={"lt-real-tab-" + current.id} className="lt-real-panel">
          <div className="lt-real-screen-head">
            <span className="lt-real-screen-category">{current.category}</span>
            <span className="lt-real-screen-count">{selected + 1} / {SCREENS.length}</span>
          </div>
          <div className="lt-real-screenshot">
            <div className="lt-real-window-bar" aria-hidden="true"><i/><i/><i/><span>loadtwin.adryanrizkyalviano.me</span></div>
            {/* The image pixels were captured from the actual LoadTwin application
                using Chromium; they are not generated screenshots or mockups. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img key={current.src} src={current.src} alt={current.alt} width={1600} height={1000}
              loading="lazy" decoding="async" />
          </div>
          <div className="lt-real-screen-footer">
            <div>
              <h3>{current.title}</h3>
              <p>{current.description}</p>
              <small>Captured from the live application in Chromium. Displayed analysis values, if any, reflect the captured run—not current production telemetry.</small>
            </div>
            <div className="lt-real-links">
              <a href={current.src} target="_blank" rel="noopener noreferrer">
                Full-size screenshot <Expand size={15} aria-hidden="true"/>
              </a>
              <a className="lt-real-open" href={current.href} target="_blank" rel="noopener noreferrer">
                Open in LoadTwin <ArrowUpRight size={16} aria-hidden="true"/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="lt-real-disclaimer">These are genuine application captures, not illustrative dashboards. A capture may show an input state if a run was unavailable; open the live tool to perform your own analysis.</p>
    </div>
  );
}
