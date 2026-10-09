import type ptBR from './pt-BR'

/**
 * Typed against pt-BR: dropping or renaming a key fails `astro check`.
 * English headings use Title Case (Chicago).
 */
const en: typeof ptBR = {
  meta: {
    description:
      'Jhonatan Azevedo, Development Coordinator and full-stack developer. APIs in Python, Go and .NET, microservices and event-driven architecture.',
    ogImageAlt: 'Jhonatan Azevedo — Development Coordinator',
    notFoundTitle: 'Page not found',
    notFoundBody: "This stage doesn't exist. Head back to the start and try again.",
    notFoundCta: 'Back to start',
  },

  nav: {
    primary: 'Main navigation',
    open: 'Open menu',
    close: 'Close menu',
    homeLabel: 'Jhonatan Azevedo, back to top',
    items: {
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      about: 'About',
      contact: 'Contact',
    },
  },

  hero: {
    eyebrow: 'Developer · since 2021',
    deck: 'From intern to development coordinator in five years, three of them in technical leadership, and I still ship production code.',
    stack: 'APIs in Python, Go and .NET · DDD, microservices and event-driven architecture',
    portraitAlt: 'Jhonatan Azevedo',
    ctaPrimary: 'See my path',
    ctaSecondary: 'Get in touch',
  },

  career: {
    label: 'Career path',
    a11yLabel: 'Career path, from first role to current',
  },

  experience: {
    heading: 'Experience',
    deck: 'From intern to development coordinator in 5 years, three of them leading a team, and what I shipped in each role.',
    present: 'Present',
    currentBadge: 'Current role',
  },

  projects: {
    heading: 'Projects',
    deck: "What I've built, from database to deploy.",
    viewLive: 'View Project',
    viewCode: 'View Code',
    moreTitle: 'See More on GitHub',
    moreBody: 'Experiments, studies and everyday code.',
    stackLabel: 'Tech used',
    openGallery: 'View screens',
    galleryLabel: 'Project screens',
    screenOf: 'Screen {n} of {total}',
    close: 'Close',
    prev: 'Previous screen',
    next: 'Next screen',
  },

  skills: {
    heading: 'Skills',
    deck: 'What I use day to day, grouped by layer.',
    also: 'Also: DDD, Clean Architecture, SOLID and CQRS, agile methods (Scrum and Kanban), data modelling and systems integration.',
    groups: {
      languages: 'Languages',
      backend: 'Back-end',
      frontend: 'Front-end',
      data: 'Data',
      infra: 'Infrastructure',
    },
    groupDecks: {
      languages:
        'Python and Go for new work, C# for what carries the legacy, JavaScript and TypeScript on the front.',
      backend:
        'APIs in FastAPI, Flask and Django, .NET with DDD, Go with Gin and Node.js with Express.',
      frontend: 'Interfaces in Vue and React, web and mobile, with Tailwind and Bootstrap.',
      data: "Modelling and queries in PostgreSQL, SQL Server and MySQL; MongoDB when the data isn't relational.",
      infra: 'Services in Docker, messaging with RabbitMQ and version control in Git.',
    },
  },

  about: {
    heading: 'About',
    body: [
      'I started as an intern in 2021 and now coordinate the development team. Along the way I went through junior, mid-level, tech lead and technology manager. That is five years of career, three of them in leadership roles.',
      'I build APIs and integrations for tax calculation platforms and financial applications: Python with FastAPI, Flask and Django, .NET with DDD and Entity Framework Core, Go with Gin and Node.js with Express. Lately the focus is event-driven microservices, with RabbitMQ for messaging and Docker to orchestrate the services.',
      'Leading, to me, means defining architecture and standards, reviewing code and mentoring developers from junior to senior, and being the point of contact between engineering, product and business, turning requirements into technical solutions.',
    ],
    facts: {
      tenureLabel: 'Experience',
      tenureValue: '5 years',
      pathLabel: 'Path',
      pathValue: 'Intern → coordinator',
      leadershipLabel: 'Leadership',
      leadershipValue: '3 years: Tech Lead, Technology Manager and Coordination',
      degreeLabel: 'Degree',
      degreeValue: 'Systems Analysis and Development, UNINTER, 2021',
      postgradLabel: 'Postgraduate',
      postgradValue: 'Data Science and Artificial Intelligence, UNINTER, in progress',
      ageLabel: 'Age',
      ageValue: '27',
    },
  },

  contact: {
    heading: 'How to Get in Touch',
  },

  theme: {
    toDark: 'Switch to dark theme',
    toLight: 'Switch to light theme',
    system: 'Use system theme',
  },

  lang: {
    group: 'Site language',
  },

  a11y: {
    skip: 'Skip to Content',
    newTab: '(opens in a new tab)',
  },

  mode: {
    group: 'Visual style',
    bit: '8-bit visuals, retro game style',
    hd: 'Modern high-definition visuals',
  },

  sound: {
    on: 'Turn sound effects on',
    off: 'Turn sound effects off',
  },

  game: {
    player: 'PLAYER 1',
    pressStart: 'PRESS START',
    level: 'LV',
    stage: 'STAGE',
    stages: {
      experience: 'Career map',
      projects: 'Select a cartridge',
      skills: 'Inventory',
      about: 'Character sheet',
      contact: 'Continue?',
    },
    hiScore: 'HI-SCORE',
    exp: 'EXP',
    slot: 'SLOT',
    insert: 'INSERT',
    yes: 'YES',
    clear: 'STAGE CLEAR',
    current: 'YOU ARE HERE',
    credits: 'CREDITS',
  },

  footer: {
    builtBy: 'Built by Jhonatan Azevedo',
    links: 'Social and contact',
  },
}

export default en
