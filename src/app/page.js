import Link from 'next/link';
import PixelSprite from '@/components/PixelSprite';
import ProjectCard from '@/components/ProjectCard';
import { projectsData } from '@/data/projects';
import { featuredSkillNames } from '@/data/skills';
import { profile } from '@/data/profile';

export default function Home() {
  const featuredProjects = projectsData.slice(0, 2);

  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div>
          <p className="eyebrow">▶ Player one · ready</p>
          <h1 className="hero__title">
            Hi, I&apos;m a <mark>{profile.role}</mark>
          </h1>
          <p className="lede">{profile.tagline}</p>

          <div className="btn-row">
            <Link href="/projects" className="px btn">
              Explore projects ▶
            </Link>
            <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="px btn btn--ghost">
              View resume ↗
            </a>
          </div>
        </div>

        <div className="hero__art" aria-hidden="true">
          <div className="px hero__scene">
            <PixelSprite name="gamepad" size={14} className="sprite--main" />
            <span className="float float--a">
              <PixelSprite name="star" size={4} />
            </span>
            <span className="float float--b">
              <PixelSprite name="heart" size={4} />
            </span>
            <div className="status">
              <div className="status__row">
                <span>DEV LVL</span>
                <span>loading...</span>
              </div>
              <div className="xp">
                <div className="xp__fill" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="section">
        <div className="section-head">
          <h2 className="section-title">Tech stack highlight</h2>
          <Link href="/skills" className="text-link">
            See all stats →
          </Link>
        </div>
        <ul className="chips chips--lg">
          {featuredSkillNames.map((skill) => (
            <li key={skill} className="chip px-sm">
              {skill}
            </li>
          ))}
        </ul>
      </section>

      {/* Featured projects */}
      <section className="section">
        <div className="section-head">
          <h2 className="section-title">Featured projects</h2>
          <Link href="/projects" className="text-link">
            View all projects →
          </Link>
        </div>
        <div className="project-grid">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
