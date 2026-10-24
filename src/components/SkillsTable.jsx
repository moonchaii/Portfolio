'use client';

import { useState } from 'react';

// Datasheet-style table: skill / category / proficiency pips.
export default function SkillsTable({ skills, categories }) {
  const [filter, setFilter] = useState('All');
  const visible = filter === 'All' ? skills : skills.filter((s) => s.category === filter);

  return (
    <div>
      <div className="filter-bar" role="group" aria-label="Filter skills by category">
        {['All', ...categories].map((cat) => (
          <button
            key={cat}
            type="button"
            className="filter-btn px-sm"
            aria-pressed={filter === cat}
            onClick={() => setFilter(cat)}
          >
            {cat === 'All' ? 'All' : `${cat}s`}
          </button>
        ))}
      </div>

      <div className="px skills-table-wrap">
        <table className="skills-table">
          <thead>
            <tr>
              <th scope="col">Skill</th>
              <th scope="col">Category</th>
              <th scope="col">Level</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((skill) => (
              <tr key={skill.name}>
                <th scope="row">{skill.name}</th>
                <td>{skill.category}</td>
                <td>
                  <div className="pips" role="img" aria-label={`Level ${skill.level} out of 5`}>
                    {[1, 2, 3, 4, 5].map((n) => (
                      <span key={n} className={n <= skill.level ? 'pip pip--on' : 'pip'} style={{ '--i': n }} />
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="legend">
        <span>LV 1 · just started</span>
        <span>LV 3 · building real things</span>
        <span>LV 5 · very comfortable</span>
      </p>
    </div>
  );
}
