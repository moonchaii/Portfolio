// Each project gets its own page at /projects/<slug>.
//
// Required: slug, title, description, techStack.
// Everything else is optional and only shows on the page when filled in:
//   status      small badge, e.g. 'In progress' | 'Being refactored' | 'Complete'
//   year, role, team   shown as quick facts under the title
//   overview    paragraph(s) of text
//   highlights  list of what's cool about it
//   learned     list of what you took away
//   todo        list of what's next, shown under todoTitle (default: 'Known limitations & refactor goals')
//   todoTitle   e.g. 'Roadmap'
//   images      [{ src: '/projects/<slug>/file.png', alt: 'description' }]  (files live in /public)
//   githubUrl, liveUrl

export const projectsData = [
  {
    slug: 'sprout-health',
    title: 'Sprout Health',
    status: 'In progress',
    description:
      'A calm personal health companion for people living with chronic illness: log symptoms, track appointments, and stay on top of reminders in one organised space.',
    techStack: ['React Native', 'TypeScript', 'React Navigation', 'Notifee', 'WatermelonDB'],
    liveUrl: '',
    githubUrl: 'https://github.com/moonchaii/SproutHealth',

    overview:
      'Living with a chronic condition means carrying a lot of information in your head. Sprout Health gives that information a home, so you can focus on healing instead of remembering. It is designed for people with chronic illness, recurring flare-ups, or complex health journeys, with a soft, nature-inspired look that feels calm rather than clinical.',
    highlights: [
      'Symptom logging with a severity scale, plus triggers and notes for each flare-up',
      'Doctor appointment calendar with a notes section for every visit',
      'Local push notification reminders for medications and appointments, with date and time alerts',
      'Cross-platform (iOS and Android) from a single React Native codebase',
    ],
    todoTitle: 'Roadmap',
    todo: [
      'Flare-up trend charts and pattern insights',
      'Export a health summary to PDF to share with doctors',
      'Opt-in secure cloud sync',
    ],
    images: [],
  },

  {
    slug: 'chat-app',
    title: 'ChatApp: Socket Programming',
    status: 'Being refactored',
    description:
      'A desktop chat application built on raw TCP and UDP sockets with its own text-based protocol: private messages, group chats, and direct peer-to-peer file transfer.',
    techStack: ['Python', 'TCP/UDP Sockets', 'PyQt6', 'SQLite', 'bcrypt', 'Wireshark'],
    liveUrl: '',
    githubUrl: '',

    year: '2026',
    team: 'Group of 3',
    role: 'Designed the protocol, built the base client/server, and designed and developed the GUI. To be refactored by myself to be improved upon and finalised.',
    overview:
      'A group project for a university networks course (CSC3002F). A central server handles authentication, user and group registry, and text message routing over TCP, while clients send images, audio and video directly to each other over UDP so large files never put load on the server. Everything on the wire follows a custom ASCII protocol modelled on HTTP, so messages are human-readable and easy to debug.',
    highlights: [
      'Custom application-layer protocol: HTTP-style start-line, headers and body, with CMD, CTRL and DATA message categories',
      'Hybrid architecture: TCP through a central server for control and text, UDP peer-to-peer for media sent in numbered chunks',
      'Sign-up and login with bcrypt-hashed passwords stored in SQLite',
      'Live online/offline contact list, public group chats, and one-on-one messaging',
      'Protocol verified by capturing real traffic in Wireshark',
      'Designed and built the PyQt6 GUI, including a native file picker for sending media',
    ],
    learned: [
      'Designing a protocol first, then making the implementation actually match it on the wire',
      'Debugging race conditions between GUI threads and network threads',
      'Why the decision between TCP and UDP depends on what each type of message needs',
      'Why a prototype built on slash commands had to be rebuilt around proper protocol messages',
    ],
    todo: [
      'Direct messages occasionally fail to send or update in the GUI and need resending',
      'Group chats need a manual refresh to show new messages',
      'File sharing only works in direct chats, not group chats',
      'After logging out, the client cannot log back in without restarting, and there is no automatic reconnect',
      'Messages and network traffic are not encrypted (only passwords are hashed)',
    ],
    images: [
      {
        src: '/projects/chat-app/architecture.png',
        alt: 'System architecture diagram: a central chat server with a database, TCP connections to every client, and direct UDP links between peers',
      },
      {
        src: '/projects/chat-app/login.png',
        alt: 'Login and sign-up screens, including error states for a wrong password and an unknown username',
      },
      {
        src: '/projects/chat-app/group-chat.png',
        alt: 'Group chat with several users in the birthday-invites group',
      },
      {
        src: '/projects/chat-app/direct-message.png',
        alt: 'One-on-one chat between two users with the online contact list',
      },
      {
        src: '/projects/chat-app/direct-media.png',
        alt: 'A direct chat where one user has sent an image file to the other',
      },
    ],
  },

  {
    // TODO: details to come from your project files.
    slug: 'oxo-game',
    title: 'OXO Network Game',
    status: 'Being refactored',
    description:
      'A two-player OXO (noughts and crosses) game written in Python, played over the network by connecting to the hosting computer’s IP address.',
    techStack: ['Python', 'Networking'],
    liveUrl: '',
    githubUrl: '',
  },

  {
    // TODO: details to come from your project files.
    slug: 'hotel-management-system',
    title: 'Hotel Management System',
    status: 'Being refactored',
    description:
      'A hotel management desktop application built in Visual Studio Community with C# and a MySQL database.',
    techStack: ['C#', 'MySQL', 'Visual Studio'],
    liveUrl: '',
    githubUrl: '',
  },

  {
    slug: 'die-kaapse-corner',
    title: 'Die Kaapse Corner',
    description:
      'A responsive marketplace platform for local artisans with product catalog management.',
    techStack: ['JavaScript', 'HTML', 'CSS'],
    liveUrl: '',
    githubUrl: 'https://github.com/moonchaii/DieKaapseCorner-Ecommerce',
  },
];

export function getProject(slug) {
  return projectsData.find((p) => p.slug === slug);
}
