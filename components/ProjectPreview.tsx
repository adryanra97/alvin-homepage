import type { Project } from "@/data/site";

function MockScreen({ title }: { title: string }) {
  return (
    <div className="mock" aria-hidden="true">
      <div className="mock-bar">
        <i /> <i /> <i />
      </div>
      <div className="mock-body">
        <div className="mock-side">
          {Array.from({ length: 7 }).map((_, i) => (
            <b key={i} />
          ))}
        </div>
        <div className="mock-main">
          <h4>{title}</h4>
          <div className="mock-row">
            <span />
            <span />
            <span />
          </div>
          <div className="mock-chart">
            {[40, 70, 55, 90, 62, 80].map((h, i) => (
              <em key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="mock-table">
            {Array.from({ length: 4 }).map((_, i) => (
              <u key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Screenshot proyek kalau ada (field `image`), kalau tidak ada pakai mockup bawaan. */
export default function ProjectPreview({ project }: { project: Project }) {
  return (
    <div className="proj-preview">
      {project.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={project.image} alt={`Tampilan ${project.title}`} />
      ) : (
        <MockScreen title={project.title} />
      )}
    </div>
  );
}
