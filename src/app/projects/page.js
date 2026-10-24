import ProjectCard from '@/components/ProjectCard';
import { projectsData } from '@/data/projects';

export const metadata = { title: 'Projects' };

export default function ProjectsPage() {
  return (
    <main>
      <header className="page-head">
        <p className="eyebrow">Quest log</p>
        <h1 className="page-title">Projects</h1>
        <p className="lede">
          A collection of web, mobile, and software development work. Click anywhere on a card to open it.
        </p>
      </header>

      <div className="project-grid">
        {projectsData.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </main>
  );
}
