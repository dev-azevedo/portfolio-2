import type { Skill, SkillGroup } from '@/types/content'

/**
 * Colours are each brand's official hex with its OKLCH lightness clamped into
 * [0.42, 0.68] for light and [0.66, 0.88] for dark, preserving hue and chroma.
 * Without that clamp, Django (L 0.27) disappears on a light surface and
 * JavaScript yellow (L 0.90) disappears on a dark one.
 *
 * Express and GitHub are greyscale brands, so they carry no colour and inherit
 * the neutral text token instead of becoming a muddy tinted grey.
 */
export const skills: Skill[] = [
  // --- languages ---
  {
    id: 'python',
    name: 'Python',
    group: 'languages',
    icon: 'simple-icons:python',
    color: { light: '#3776ab', dark: '#5998cf' },
  },
  {
    id: 'go',
    name: 'Go',
    group: 'languages',
    icon: 'simple-icons:go',
    color: { light: '#00a8d3', dark: '#00add8' },
  },
  {
    id: 'csharp',
    name: 'C#',
    group: 'languages',
    icon: 'simple-icons:csharp',
    color: { light: '#6e2881', dark: '#b971cd' },
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    group: 'languages',
    icon: 'simple-icons:javascript',
    color: { light: '#b19900', dark: '#f2da0c' },
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    group: 'languages',
    icon: 'simple-icons:typescript',
    color: { light: '#3178c6', dark: '#4e95e5' },
  },

  // --- back-end ---
  {
    id: 'fastapi',
    name: 'FastAPI',
    group: 'backend',
    icon: 'simple-icons:fastapi',
    color: { light: '#009688', dark: '#2aa799' },
  },
  {
    id: 'flask',
    name: 'Flask',
    group: 'backend',
    icon: 'simple-icons:flask',
    color: { light: '#38a8c0', dark: '#3babc3' },
  },
  {
    id: 'django',
    name: 'Django',
    group: 'backend',
    icon: 'simple-icons:django',
    color: { light: '#325646', dark: '#779c8a' },
  },
  {
    id: 'gin',
    name: 'Gin',
    group: 'backend',
    icon: 'simple-icons:gin',
    color: { light: '#008ecf', dark: '#239cde' },
  },
  {
    id: 'dotnet',
    name: '.NET',
    group: 'backend',
    icon: 'simple-icons:dotnet',
    color: { light: '#503ac2', dark: '#847bff' },
  },
  {
    id: 'aspnet',
    name: 'ASP.NET',
    group: 'backend',
    icon: 'simple-icons:dotnet',
    color: { light: '#503ac2', dark: '#847bff' },
  },
  // No simple-icons entry for EF Core.
  { id: 'entity-framework', name: 'Entity Framework', group: 'backend', monogram: 'EF' },
  {
    id: 'nodejs',
    name: 'Node.js',
    group: 'backend',
    icon: 'simple-icons:nodedotjs',
    color: { light: '#5fa04e', dark: '#64a553' },
  },
  { id: 'express', name: 'Express', group: 'backend', icon: 'simple-icons:express' },

  // --- front-end ---
  {
    id: 'vue',
    name: 'Vue.js',
    group: 'frontend',
    icon: 'simple-icons:vuedotjs',
    color: { light: '#3db07e', dark: '#4fc08d' },
  },
  {
    id: 'react',
    name: 'React',
    group: 'frontend',
    icon: 'simple-icons:react',
    color: { light: '#20a9c9', dark: '#61dafb' },
  },
  {
    id: 'react-native',
    name: 'React Native',
    group: 'frontend',
    icon: 'simple-icons:react',
    color: { light: '#20a9c9', dark: '#61dafb' },
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    group: 'frontend',
    icon: 'simple-icons:tailwindcss',
    color: { light: '#00abc9', dark: '#06b6d4' },
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    group: 'frontend',
    icon: 'simple-icons:bootstrap',
    color: { light: '#7952b3', dark: '#a17adf' },
  },

  // --- data ---
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    group: 'data',
    icon: 'simple-icons:postgresql',
    color: { light: '#4169e1', dark: '#5d89ff' },
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    group: 'data',
    icon: 'simple-icons:mongodb',
    color: { light: '#47a248', dark: '#4faa4f' },
  },
  {
    id: 'mysql',
    name: 'MySQL',
    group: 'data',
    icon: 'simple-icons:mysql',
    color: { light: '#4479a1', dark: '#6398c2' },
  },
  {
    id: 'sql-server',
    name: 'SQL Server',
    group: 'data',
    icon: 'simple-icons:microsoftsqlserver',
    color: { light: '#cc2927', dark: '#f45349' },
  },
  {
    id: 'sqlite',
    name: 'SQLite',
    group: 'data',
    icon: 'simple-icons:sqlite',
    color: { light: '#1f5370', dark: '#6699ba' },
  },

  // --- infrastructure ---
  {
    id: 'docker',
    name: 'Docker',
    group: 'infra',
    icon: 'simple-icons:docker',
    color: { light: '#2496ed', dark: '#2698ef' },
  },
  {
    id: 'docker-compose',
    name: 'Docker Compose',
    group: 'infra',
    icon: 'simple-icons:docker',
    color: { light: '#2496ed', dark: '#2698ef' },
  },
  {
    id: 'rabbitmq',
    name: 'RabbitMQ',
    group: 'infra',
    icon: 'simple-icons:rabbitmq',
    color: { light: '#f86300', dark: '#fd680f' },
  },
  {
    id: 'git',
    name: 'Git',
    group: 'infra',
    icon: 'simple-icons:git',
    color: { light: '#e94839', dark: '#f45343' },
  },
  { id: 'github', name: 'GitHub', group: 'infra', icon: 'simple-icons:github' },
]

export const skillGroups: SkillGroup[] = ['languages', 'backend', 'frontend', 'data', 'infra']

export function skillsByGroup(group: SkillGroup): Skill[] {
  return skills.filter((skill) => skill.group === group)
}
