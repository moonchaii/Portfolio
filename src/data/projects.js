// Each project gets its own page at /projects/<slug>.
//
// Only title, description, techStack and the links are required.
// Everything below "optional" is shown on the project page when you fill it in,
// so you can paste in details from your old project documents at your own pace.
export const projectsData = [
  {
    slug: 'sprout-health',
    title: 'Sprout Health',
    description:
      'A mobile application for event tracking, task management, and schedule organization.',
    techStack: ['React Native', 'JavaScript', 'AsyncStorage'],
    liveUrl: '',
    githubUrl: 'https://github.com/moonchaii/SproutHealth',

    // optional
    year: '',
    role: '',
    overview: '',
    highlights: [],
    learned: [],
    images: [], // e.g. ['/projects/sprout-health/home.png'] (files go in /public)
  },
  {
    slug: 'die-kaapse-corner',
    title: 'Die Kaapse Corner',
    description:
      'A responsive marketplace platform for local artisans with product catalog management.',
    techStack: ['JavaScript', 'HTML', 'CSS'],
    liveUrl: '',
    githubUrl: 'https://github.com/moonchaii/DieKaapseCorner-Ecommerce',

    // optional
    year: '',
    role: '',
    overview: '',
    highlights: [],
    learned: [],
    images: [],
  },
];

export function getProject(slug) {
  return projectsData.find((p) => p.slug === slug);
}
