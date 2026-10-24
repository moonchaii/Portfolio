import SkillsTable from '@/components/SkillsTable';
import { skillsData, skillCategories } from '@/data/skills';

export const metadata = { title: 'Skills' };

export default function SkillsPage() {
  return (
    <main>
      <header className="page-head">
        <p className="eyebrow">Stats</p>
        <h1 className="page-title">Skills at a glance</h1>
        <p className="lede">
          Laid out like a datasheet, because a claim is only useful if it&apos;s specific. Languages,
          frameworks, and tools I work with.
        </p>
      </header>

      <SkillsTable skills={skillsData} categories={skillCategories} />
    </main>
  );
}
