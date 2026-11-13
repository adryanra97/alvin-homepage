"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, RotateCcw } from "lucide-react";

type Scene = "live" | "evaluate" | "failures";
type PreviewSize = "mini" | "card" | "hero";
const BASE_URL = "https://loadtwin.adryanrizkyalviano.me";
const SCENES: { id: Scene; label: string; description: string; url: string; action: string }[] = [
  { id: "live", label: "Live model", description: "Watch requests move through a load balancer, service nodes and a shared database. In the real playground, change traffic, nodes or hardware and see the simulation respond.", url: BASE_URL + "/#try", action: "Try the real live model" },
  { id: "evaluate", label: "Evaluate", description: "Compare the documented peak and stress examples. Peak traffic meets the example SLA; at double the traffic, CPU crosses the example resource limit.", url: BASE_URL + "/evaluate/", action: "Run a real evaluation" },
  { id: "failures", label: "Failure testing", description: "See how the load balancer routes around a node that goes offline. The actual test compares latency, errors and recovery against a healthy run.", url: BASE_URL + "/failures/", action: "Run a node-failure test" },
];

function FlowDiagram({ failed = false, traffic = "peak", compact = false }: { failed?: boolean; traffic?: "peak" | "stress"; compact?: boolean }) {
  const wrap = useRef<HTMLDivElement>(null);
  const [moving, setMoving] = useState(false);
  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = (visible: boolean) => setMoving(visible && !preference.matches);
    const observer = new IntersectionObserver(([entry]) => sync(entry.isIntersecting), { rootMargin: "80px" });
    const onPreferenceChange = () => {
      const bounds = el.getBoundingClientRect();
      sync(bounds.bottom > 0 && bounds.top < window.innerHeight);
    };
    observer.observe(el);
    preference.addEventListener("change", onPreferenceChange);
    return () => { observer.disconnect(); preference.removeEventListener("change", onPreferenceChange); };
  }, []);

  const routes = [
    "M 110 210 L 242 210 L 446 92 L 576 92 L 790 210 L 823 210",
    "M 110 210 L 242 210 L 446 210 L 576 210 L 790 210 L 823 210",
    "M 110 210 L 242 210 L 446 328 L 576 328 L 790 210 L 823 210",
  ];
  const duration = traffic === "stress" ? 1.85 : 3.1;

  return (
    <div ref={wrap} className={"ltmv-flow" + (failed ? " ltmv-flow-failed" : "")}>
      <svg viewBox="0 0 960 420" role="img"
        aria-label={failed ? "Illustration: request particles bypass a crashed middle service node, traveling through the two available nodes to the database." : "Illustration: request particles pass through a load balancer, three service nodes and the database."}>
        <g className="ltmv-flow-grid" aria-hidden="true">
          {[0,1,2,3,4,5,6,7,8,9,10,11,12].map(i => <line key={"x"+i} x1={i*80} y1="0" x2={i*80} y2="420" />)}
          {[0,1,2,3,4,5].map(i => <line key={"y"+i} x1="0" y1={i*84} x2="960" y2={i*84} />)}
        </g>
        <g className="ltmv-connections" fill="none" strokeWidth="2.6" aria-hidden="true">
          <path d="M 110 210 H 216" />
          <path d="M 277 210 L 446 92" />
          <path className={failed ? "is-offline" : ""} d="M 277 210 H 446" />
          <path d="M 277 210 L 446 328" />
          <path d="M 576 92 L 790 210" />
          <path className={failed ? "is-offline" : ""} d="M 576 210 H 790" />
          <path d="M 576 328 L 790 210" />
        </g>
        <g className="ltmv-source">
          <circle cx="84" cy="210" r="36" />
          <path d="M 67 210 H 101 M 78 199 L 67 210 L 78 221 M 90 199 L 101 210 L 90 221" fill="none" />
        </g>
        <g className="ltmv-balancer">
          <rect x="216" y="179" width="62" height="62" rx="10" />
          <path d="M 230 198 H 262 M 230 210 H 255 M 230 222 H 258" />
        </g>
        {[92, 210, 328].map((y, i) => {
          const offline = failed && i === 1;
          return (
            <g className={"ltmv-node" + (offline ? " is-offline" : "")} key={i}>
              <rect x="446" y={y-33} width="130" height="66" rx="7" />
              <rect className="ltmv-chip" x="461" y={y-18} width="32" height="33" rx="4" />
              {offline
                ? <path className="ltmv-node-cross" d={"M 470 "+(y-9)+" L 484 "+(y+6)+" M 484 "+(y-9)+" L 470 "+(y+6)} />
                : <path className="ltmv-chip-lines" d={"M 470 "+(y-8)+" H 485 M 470 "+y+" H 485 M 470 "+(y+8)+" H 485"} />}
              <path className="ltmv-node-lines" d={"M 503 "+(y-10)+" H 558 M 503 "+y+" H 546 M 503 "+(y+10)+" H 553"} />
              <circle className="ltmv-node-led" cx="559" cy={y-19} r="4" />
              <text className="ltmv-node-name" x="511" y={y+55} textAnchor="middle">{offline ? "NODE 02 · DOWN" : "NODE 0"+(i+1)}</text>
            </g>
          );
        })}
        <g className="ltmv-database">
          <path d="M 806 184 C 806 171 822 163 841 163 C 860 163 876 171 876 184 V 235 C 876 247 860 256 841 256 C 822 256 806 247 806 235 Z" />
          <path d="M 806 184 C 806 197 822 204 841 204 C 860 204 876 197 876 184 M 806 211 C 806 224 822 230 841 230 C 860 230 876 224 876 211" />
        </g>
        {moving && routes.map((route, i) => (failed && i === 1 ? null : [0,1,2].map(j => (
          <circle className="ltmv-particle" key={"flow-"+i+"-"+j} r={compact ? 13 : 6.2} cx="0" cy="0">
            <animateMotion path={route} dur={(duration+i*0.16)+"s"} begin={(-j*(duration/3)-i*0.43)+"s"} repeatCount="indefinite" />
          </circle>
        ))))}
        <text className="ltmv-flow-label" x="84" y="288" textAnchor="middle">TRAFFIC</text>
        <text className="ltmv-flow-label" x="247" y="288" textAnchor="middle">BALANCER</text>
        <text className="ltmv-flow-label" x="841" y="289" textAnchor="middle">DATABASE</text>
        <text className="ltmv-flow-note" x="32" y="399">{traffic === "stress" ? "Higher request volume" : "Request routing preview"}</text>
      </svg>
    </div>
  );
}

/** Lightweight portfolio thumbnail. It never calls the simulation API. */
export function LoadTwinMotionPreview({ size = "card", className = "" }: { size?: PreviewSize; className?: string }) {
  return (
    <div className={"ltmv-preview ltmv-preview-"+size+" "+className}>
      <div className="ltmv-preview-header" aria-hidden="true">
        <span className="ltmv-preview-brand"><i /> LOADTWIN</span>
        <span className="ltmv-preview-type">MODEL IN MOTION</span>
      </div>
      <FlowDiagram compact={size === "mini"} />
      <div className="ltmv-preview-footer">
        <span>Requests → Nodes → Database</span>
        <span><i /> Animated preview</span>
      </div>
    </div>
  );
}

/** Feature story, not a fake API demo. Links open the actual SimPy tools. */
export function LoadTwinFeatureShowcase() {
  const [scene, setScene] = useState<Scene>("live");
  const [load, setLoad] = useState<"peak" | "stress">("peak");
  const [nodeDown, setNodeDown] = useState(true);
  const chosen = SCENES.find(s => s.id === scene)!;
  const stressed = scene === "evaluate" && load === "stress";
  const failed = scene === "failures" && nodeDown;

  return (
    <div className="ltmv-feature">
      <div className="ltmv-feature-tabs" role="group" aria-label="Explore LoadTwin capabilities">
        {SCENES.map((s,i) => (
          <button type="button" key={s.id} className={scene === s.id ? "is-selected" : ""} aria-pressed={scene === s.id} onClick={() => setScene(s.id)}>
            <small>{"0"+(i+1)}</small> {s.label}
          </button>
        ))}
      </div>
      <div className="ltmv-feature-content">
        <div className="ltmv-feature-stage">
          <div className="ltmv-stage-top">
            <span><i /> {scene === "failures" ? "FAULT INJECTION PREVIEW" : scene === "evaluate" ? "CAPACITY MODEL PREVIEW" : "REQUEST FLOW PREVIEW"}</span>
            <span>{failed ? "1 node offline · 2 available" : "3 nodes available"}</span>
          </div>
          <FlowDiagram failed={failed} traffic={stressed ? "stress" : "peak"} />
          <div className="ltmv-stage-bottom"><span>Conceptual animation of LoadTwin&apos;s model</span><span>Not a running simulation</span></div>
        </div>

        <div className="ltmv-feature-info" aria-live="polite">
          <span className="ltmv-feature-eyebrow">FEATURE SPOTLIGHT / {scene === "live" ? "01" : scene === "evaluate" ? "02" : "03"}</span>
          <h3>{scene === "live" ? "See the system, not just a chart." : scene === "evaluate" ? "Does the target pass?" : "What if a node goes offline?"}</h3>
          <p>{chosen.description}</p>
          {scene === "live" ? (
            <div className="ltmv-feature-note"><strong>In the real playground</strong><span>Increase traffic, add vCPU or nodes, crash a node and see the simulation update.</span></div>
          ) : null}
          {scene === "evaluate" ? (
            <div className="ltmv-eval">
              <div className="ltmv-eval-options" role="group" aria-label="Documented evaluation scenarios">
                <button aria-pressed={load === "peak"} type="button" onClick={() => setLoad("peak")}>Peak · 45 req/s</button>
                <button aria-pressed={load === "stress"} type="button" onClick={() => setLoad("stress")}>Stress · 90 req/s</button>
              </div>
              <div className="ltmv-eval-metrics">
                <div><small>PREDICTED CPU</small><strong>{stressed ? "93.3%" : "46.8%"}</strong></div>
                <div><small>PREDICTED P95</small><strong>{stressed ? "777 ms" : "390 ms"}</strong></div>
              </div>
              <p className={"ltmv-eval-result" + (stressed ? " is-warning" : "")}>
                <span aria-hidden="true">{stressed ? "!" : "✓"}</span>
                {stressed ? "Stress exceeds the example 80% CPU limit." : "Peak meets the example SLA."}
              </p>
              <small className="ltmv-eval-foot">Documented model output. Stress failure does not automatically change the overall peak verdict.</small>
            </div>
          ) : null}
          {scene === "failures" ? (
            <div className="ltmv-fault-controls">
              <button type="button" aria-pressed={nodeDown} onClick={() => setNodeDown(v => !v)}>
                {nodeDown ? <RotateCcw size={16} /> : <span aria-hidden="true">×</span>}
                {nodeDown ? "Restore node" : "Crash node 02"}
              </button>
              <p>{nodeDown ? "Node 02 is illustrated as offline. Request dots route through the remaining nodes." : "All three nodes are available in this illustration."}</p>
              <small>Actual error rate, p95 and recovery come only from the live Failure Testing tool.</small>
            </div>
          ) : null}
          <a className="ltmv-feature-cta" href={chosen.url} target="_blank" rel="noopener noreferrer">
            {chosen.action} <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
      <p className="ltmv-disclaimer">The portfolio shows a simplified animated illustration. The live LoadTwin application runs real SimPy simulations whose predictions depend on your measured baseline and service configuration.</p>
    </div>
  );
}
