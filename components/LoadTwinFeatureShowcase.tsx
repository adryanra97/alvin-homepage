"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ArrowUpRight, Minus, Plus, RotateCcw } from "lucide-react";

type PreviewSize = "mini" | "card" | "hero";
type FlowProps = {
  nodes?: number;
  traffic?: number;
  crashed?: boolean;
  slowDb?: boolean;
  apiTimeouts?: boolean;
  mini?: boolean;
};

const DOMAIN = "https://loadtwin.adryanrizkyalviano.me";
const METHODS = [
  { id: "evaluate", name: "Evaluate", group: "CAPACITY", question: "Will the target configuration meet the SLA?", output: "PASS / FAIL, limiting resource, headroom, breaking point and breach probability", href: "/evaluate/", cue: "45 req/s peak · 90 req/s stress in the documented example" },
  { id: "autosize", name: "Auto-size", group: "PLANNING", question: "What is the lowest-cost cluster that can handle the load?", output: "Machine types, node counts, monthly costs and a headroom-aware recommendation", href: "/autosize/", cue: "Compare the cost of configurations that pass" },
  { id: "patterns", name: "Load patterns", group: "TRAFFIC", question: "What happens during a spike, ramp or daily traffic curve?", output: "Time above SLA, worst moment and recovery", href: "/patterns/", cue: "Model demand changing over time" },
  { id: "failures", name: "Failure testing", group: "RESILIENCE", question: "What if a node dies, the database slows or an API times out?", output: "Healthy vs failure, before/during/after timelines, p95, errors and recovery", href: "/failures/", cue: "Inject a node crash and see if the service survives" },
  { id: "sensitivity", name: "Sensitivity analysis", group: "OPTIMIZATION", question: "Which configuration change moves latency the most?", output: "Ranked influences and what to change first", href: "/sensitivity/", cue: "Find the levers with the biggest effect" },
  { id: "validate", name: "Validate model", group: "EVIDENCE", question: "How close are model predictions to real load-test results?", output: "Measured vs predicted comparisons, fit grade and validated range", href: "/validate/", cue: "Use k6, JMeter or Locust test observations" },
  { id: "ask", name: "Ask LoadTwin", group: "WHAT-IF", question: "What if traffic doubles on payday?", output: "An interpreted question, executable scenario and simulation-backed explanation", href: "/ask/", cue: "Explore engineering questions in natural language" },
] as const;

function FlowDiagram({ nodes = 3, traffic = 44, crashed = false, slowDb = false, apiTimeouts = false, mini = false }: FlowProps) {
  const wrapper = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const id = useId().replace(/:/g, "");
  useEffect(() => {
    const el = wrapper.current;
    if (!el) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const visible = (value: boolean) => setInView(value && !mq.matches);
    const io = new IntersectionObserver(([entry]) => visible(entry.isIntersecting), { rootMargin: "90px" });
    const onMotion = () => {
      const b = el.getBoundingClientRect();
      visible(b.bottom > 0 && b.top < window.innerHeight);
    };
    io.observe(el);
    mq.addEventListener("change", onMotion);
    return () => { io.disconnect(); mq.removeEventListener("change", onMotion); };
  }, []);

  const displayed = Math.min(Math.max(nodes, 1), 6);
  const positions = Array.from({ length: displayed }, (_, i) => 140 + (i - (displayed - 1) / 2) * (displayed === 1 ? 0 : Math.min(78, 215 / (displayed - 1))));
  const disabled = crashed && displayed > 1 ? displayed - 1 : -1;
  const fromBalancer = (y: number) => "M 166 140 C 305 140 397 " + y + " 520 " + y;
  const toSink = (y: number, targetY: number) => "M 636 " + y + " C 759 " + y + " 796 " + targetY + " 914 " + targetY;
  const pathOf = (y: number, targetY: number) => "M 0 140 H 134 L 166 140 C 305 140 397 " + y + " 520 " + y + " H 636 C 759 " + y + " 796 " + targetY + " 914 " + targetY;
  const speed = Math.max(1.6, Math.min(5.3, 4.4 * (44 / Math.max(traffic, 1)) ** .48));
  const alt = crashed
    ? "Animated illustration: blue requests pass through the load balancer to " + (displayed - 1) + " available nodes; one node is shown offline. The traffic continues toward the database and external API."
    : "Animated illustration: blue requests pass through a load balancer to " + displayed + " service nodes, then toward a database and an external API.";
  return (
    <div className={"ltmv-flow" + (mini ? " ltmv-flow-mini" : "")} ref={wrapper}>
      <svg viewBox="0 0 1040 280" role="img" aria-label={alt} preserveAspectRatio="xMidYMid meet">
        <defs>
          <pattern id={id + "-dots"} width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.05" fill="#c7e0eb" />
          </pattern>
        </defs>
        <rect width="1040" height="280" fill={"url(#" + id + "-dots)"} aria-hidden="true" />

        <g className="ltmv-connections" fill="none" strokeWidth="1.35" aria-hidden="true">
          <path d="M 0 140 H 134" />
          {positions.map((y, i) => (
            <g key={"wire-" + i} className={i === disabled ? "ltmv-wire-offline" : ""}>
              <path d={fromBalancer(y)} />
              <path d={toSink(y, 72)} />
              <path d={toSink(y, 212)} />
            </g>
          ))}
        </g>

        <g className="ltmv-balancer" aria-hidden="true">
          <path d="M 150 124 L 166 140 L 150 156 L 134 140 Z" />
          <circle cx="150" cy="140" r="3.6" />
        </g>
        <text className="ltmv-caption" x="150" y="178" textAnchor="middle">load balancer</text>

        {positions.map((y, i) => {
          const off = i === disabled;
          return (
            <g className={"ltmv-server" + (off ? " ltmv-server-down" : "")} key={"node-" + i}>
              <rect className="ltmv-server-box" x="520" y={y - 17} width="116" height="34" rx="7" />
              <rect className="ltmv-server-chip" x="525" y={y - 13} width="54" height="26" rx="5" />
              <text className="ltmv-server-name" x="532" y={y + 4}>{off ? "down" : "node " + (i + 1)}</text>
              {off ? <path className="ltmv-server-cross" d={"M 602 " + (y - 7) + " l 13 13 m 0 -13 l -13 13"} /> : null}
            </g>
          );
        })}

        <g className={"ltmv-api" + (apiTimeouts ? " ltmv-api-broken" : "")} aria-hidden="true">
          <rect x="914" y="57" width="54" height="30" rx="15" />
          <text x="941" y="77" textAnchor="middle">API</text>
        </g>
        <text className="ltmv-caption" x="941" y="46" textAnchor="middle">external</text>

        <g className={"ltmv-database" + (slowDb ? " ltmv-db-slow" : "")} aria-hidden="true">
          <path d="M 924 199 C 924 195 932 192 943 192 S 962 195 962 199 L 962 224 C 962 228 954 231 943 231 S 924 228 924 224 Z" />
          <path d="M 924 199 C 924 204 932 206 943 206 S 962 204 962 199" />
        </g>
        <text className="ltmv-caption" x="943" y="248" textAnchor="middle">{slowDb ? "database ×3" : "database"}</text>

        {inView ? (
          <g className="ltmv-traffic" aria-hidden="true">
            {Array.from({length: 5}, (_, i) => (
              <circle key={"input-" + i} r="3.1">
                <animateMotion path="M -10 140 H 133" dur={(speed * 0.48) + "s"} begin={(-i * speed * 0.48 / 5) + "s"} repeatCount="indefinite" />
              </circle>
            ))}
            {positions.flatMap((y, i) => i === disabled ? [] : [0, 1].flatMap((sink) => (
              Array.from({ length: mini ? 2 : 3 }, (_, j) => {
                const targetY = sink === 0 ? 72 : 212;
                return (
                  <circle r={mini ? 3.8 : 3.1} key={"particle-" + i + "-" + sink + "-" + j} className={apiTimeouts && sink === 0 ? "ltmv-traffic-alert" : slowDb && sink === 1 ? "ltmv-traffic-slow" : ""}>
                    <animateMotion
                      path={pathOf(y, targetY)}
                      dur={(speed + (i % 3) * .3 + sink * .16) + "s"}
                      begin={(-j * speed / 3 - i * .28 - sink * .21) + "s"}
                      repeatCount="indefinite"
                    />
                  </circle>
                );
              })
            )))}
          </g>
        ) : null}
      </svg>
    </div>
  );
}

export function LoadTwinMotionPreview({ size = "card", className = "" }: { size?: PreviewSize; className?: string }) {
  const mini = size === "mini";
  return (
    <div className={"ltmv-preview ltmv-preview-" + size + " " + className}>
      <div className="ltmv-preview-top"><span>LIVE SIMULATION · REQUEST FLOW</span>{!mini && <span className="ltmv-preview-mark">VISUAL PREVIEW</span>}</div>
      <div className="ltmv-preview-main">
        {!mini && <div className="ltmv-preview-title"><strong>Try it live</strong><span>Simulated topology</span></div>}
        <FlowDiagram mini={mini} />
        {!mini && <div className="ltmv-preview-controls" aria-hidden="true"><span>Traffic <b>44 req/s</b></span><span>Nodes <b>3</b></span><span>vCPU <b>4</b></span><span>Threads <b>120</b></span><span>Crash a node</span></div>}
      </div>
      {!mini && <div className="ltmv-preview-foot"><span>Moving requests · load balancer → nodes → database / API</span><span>Conceptual animation</span></div>}
    </div>
  );
}

function Stepper({ label, value, dec, inc, decDisabled, incDisabled }: { label: string; value: number; dec: () => void; inc: () => void; decDisabled?: boolean; incDisabled?: boolean }) {
  return (
    <div className="ltmv-control-stepper" role="group" aria-label={label}>
      <span className="ltmv-control-label">{label}</span>
      <div className="ltmv-stepper-row">
        <button type="button" onClick={dec} disabled={decDisabled} aria-label={"Decrease " + label}><Minus size={14} /></button>
        <output>{value}</output>
        <button type="button" onClick={inc} disabled={incDisabled} aria-label={"Increase " + label}><Plus size={14} /></button>
      </div>
    </div>
  );
}

export function LoadTwinFeatureShowcase() {
  const [traffic, setTraffic] = useState(44);
  const [nodes, setNodes] = useState(3);
  const [vcpu, setVcpu] = useState(4);
  const [threads, setThreads] = useState(120);
  const [crash, setCrash] = useState(false);
  const [slowDb, setSlowDb] = useState(false);
  const [apiTimeouts, setApiTimeouts] = useState(false);
  const initialSpec = nodes === 3 && vcpu === 4 && threads === 120 && !crash && !slowDb && !apiTimeouts;
  const example = initialSpec && (traffic === 44 || traffic === 45 || traffic === 90);
  const isCapture = example && traffic === 44;
  const stress = example && traffic === 90;
  const sample = !example ? null : isCapture
    ? { p95: "428 ms", cpu: "45%", threads: "4%", errors: "0.1%", source: "Screenshot example · 44 req/s" }
    : stress
      ? { p95: "777 ms", cpu: "93.3%", threads: "10.5%", errors: "0.1%", source: "Documented example · 90 req/s" }
      : { p95: "390 ms", cpu: "46.8%", threads: "3.5%", errors: "0.1%", source: "Documented example · 45 req/s" };
  const reset = () => { setTraffic(44); setNodes(3); setVcpu(4); setThreads(120); setCrash(false); setSlowDb(false); setApiTimeouts(false); };
  const controlVcpu = [1,2,4,8,16,32,64];
  const vIndex = controlVcpu.indexOf(vcpu);

  return (
    <div className="ltmv-feature">
      <div className="ltmv-live-top">
        <span>LIVE SIMULATION · INTERACTIVE PREVIEW</span>
        <a href={DOMAIN + "/#try"} target="_blank" rel="noopener noreferrer">Open real simulator <ArrowUpRight size={15} aria-hidden="true" /></a>
      </div>
      <div className="ltmv-live-body">
        <div className="ltmv-live-head">
          <h3>Try it live</h3>
          <span className="ltmv-status">Animated preview · no engine calls</span>
        </div>
        <FlowDiagram nodes={nodes} traffic={traffic} crashed={crash} slowDb={slowDb} apiTimeouts={apiTimeouts} />
        <div className="ltmv-live-controls">
          <div className="ltmv-traffic-control">
            <label htmlFor="ltmv-traffic">Traffic <b>{traffic} req/s</b></label>
            <div className="ltmv-slider-row">
              <button type="button" onClick={() => setTraffic(n => Math.max(1, Math.round(n * .8)))} aria-label="Decrease preview traffic"><Minus size={14} /></button>
              <input id="ltmv-traffic" type="range" min="1" max="180" value={traffic} onChange={e => setTraffic(Number(e.target.value))} />
              <button type="button" onClick={() => setTraffic(n => Math.min(180, Math.round(n * 1.25) + 1))} aria-label="Increase preview traffic"><Plus size={14} /></button>
            </div>
          </div>
          <Stepper label="Nodes" value={nodes} dec={() => { setNodes(n => n - 1); if (nodes <= 2) setCrash(false); }} inc={() => setNodes(n => n + 1)} decDisabled={nodes <= 1} incDisabled={nodes >= 6} />
          <Stepper label="vCPU" value={vcpu} dec={() => setVcpu(controlVcpu[Math.max(0,vIndex-1)])} inc={() => setVcpu(controlVcpu[Math.min(controlVcpu.length-1,vIndex+1)])} decDisabled={vcpu <= 1} incDisabled={vcpu >= 64} />
          <Stepper label="Threads" value={threads} dec={() => setThreads(n => Math.max(20,n-20))} inc={() => setThreads(n => Math.min(300,n+20))} decDisabled={threads <= 20} incDisabled={threads >= 300} />
          <div className="ltmv-fault-buttons" role="group" aria-label="Preview failure conditions">
            <span className="ltmv-control-label">Break something</span>
            <div>
              <button type="button" aria-pressed={crash} disabled={nodes <= 1} onClick={() => setCrash(v => !v)}>Crash a node</button>
              <button type="button" aria-pressed={slowDb} onClick={() => setSlowDb(v => !v)}>Slow DB ×3</button>
              <button type="button" aria-pressed={apiTimeouts} onClick={() => setApiTimeouts(v => !v)}>API timeouts</button>
            </div>
          </div>
        </div>

        <div className="ltmv-readings" aria-live="polite" aria-atomic="true">
          <div className="ltmv-metrics">
            {[
              { label:"p95", value:sample?.p95 ?? "—" },
              { label:"CPU", value:sample?.cpu ?? "—" },
              { label:"Threads", value:sample?.threads ?? "—" },
              { label:"Errors", value:sample?.errors ?? "—" },
            ].map(r => <div key={r.label}><span>{r.label}</span><strong>{r.value}</strong></div>)}
          </div>
          <div className="ltmv-metric-caption">{sample ? sample.source + " · Reference value, not recalculated" : "Preview settings changed · live metrics require a SimPy run"}</div>
        </div>
        <div className="ltmv-live-bottom">
          <p>Move traffic, add nodes or break a dependency to see the topology react. <strong>This portfolio preview illustrates request routing.</strong> Run LoadTwin for recalculated p95, CPU, errors and SLA verdicts.</p>
          <button onClick={reset} type="button"><RotateCcw size={14} aria-hidden="true" /> Reset</button>
        </div>
      </div>

      <div className="ltmv-methods">
        <div className="ltmv-methods-heading">
          <div><span className="ltmv-kicker">ALL SEVEN SIMULATION METHODS</span><h3>Different questions. <em>One digital twin.</em></h3></div>
          <p>The animated playground is one part of LoadTwin. These seven tools run distinct engineering analyses against a shared service configuration.</p>
        </div>
        <ol className="ltmv-method-grid">
          {METHODS.map((tool, i) => (
            <li key={tool.id}>
              <a href={DOMAIN + tool.href} target="_blank" rel="noopener noreferrer" aria-label={"Explore " + tool.name + " on LoadTwin"}>
                <span className="ltmv-method-num">0{i + 1}</span>
                <div className="ltmv-method-copy">
                  <span className="ltmv-method-group">{tool.group}</span>
                  <h4>{tool.name}</h4>
                  <p>{tool.question}</p>
                  <small>{tool.output}</small>
                  {tool.id === "evaluate" || tool.id === "failures" ? <span className="ltmv-method-cue">{tool.cue}</span> : null}
                </div>
                <ArrowUpRight size={19} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ol>
        <div className="ltmv-method-foot">
          <span><strong>Service setup</strong> defines the measured baseline and target infrastructure.</span>
          <span><strong>Workspace</strong> stores and compares scenarios locally.</span>
          <a href={DOMAIN + "/service/"} target="_blank" rel="noopener noreferrer">Set up service <ArrowUpRight size={15} /></a>
          <a href={DOMAIN + "/workspace/"} target="_blank" rel="noopener noreferrer">Open workspace <ArrowUpRight size={15} /></a>
        </div>
      </div>
    </div>
  );
}
