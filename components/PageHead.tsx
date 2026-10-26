import type { ReactNode } from "react";

export default function PageHead({
  eyebrow,
  title,
  accent,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  accent?: string;
  intro?: string;
}) {
  return (
    <section className="page-head">
      <div className="container">
        <p className="eyebrow">
          <span>{eyebrow}</span>
        </p>
        <h1>
          {title} {accent ? <span className="accent">{accent}</span> : null}
        </h1>
        {intro ? <p className="lead page-lead">{intro}</p> : null}
      </div>
    </section>
  );
}
