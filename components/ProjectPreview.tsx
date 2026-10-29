import type { Project } from "@/data/site";
import BrowserFrame from "./BrowserFrame";

/** Screenshot proyek di bingkai browser. */
export default function ProjectPreview({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <BrowserFrame
      src={project.cover}
      alt={`${project.title}: tampilan ringkasan hasil`}
      priority={priority}
    />
  );
}
