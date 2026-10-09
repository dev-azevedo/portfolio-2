import type { SocialLink } from '@/types/content'

// TODO: the two profile URLs below are still guesses — replace with the real
// ones. The email is confirmed.
export const GITHUB_URL = 'https://github.com/dev-azevedo'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/dev-azevedo'
export const EMAIL = 'dev.azevedo@outlook.com'

export const socials: SocialLink[] = [
  {
    id: 'linkedin',
    href: LINKEDIN_URL,
    external: true,
    icon: 'simple-icons:linkedin',
    label: { 'pt-BR': 'LinkedIn', en: 'LinkedIn' },
    a11yLabel: { 'pt-BR': 'Perfil no LinkedIn', en: 'LinkedIn profile' },
  },
  {
    id: 'github',
    href: GITHUB_URL,
    external: true,
    icon: 'simple-icons:github',
    label: { 'pt-BR': 'GitHub', en: 'GitHub' },
    a11yLabel: { 'pt-BR': 'Perfil no GitHub', en: 'GitHub profile' },
  },
  {
    id: 'email',
    href: `mailto:${EMAIL}`,
    external: false,
    icon: 'lucide:mail',
    label: { 'pt-BR': EMAIL, en: EMAIL },
    a11yLabel: {
      'pt-BR': 'Enviar e-mail para Jhonatan Azevedo',
      en: 'Email Jhonatan Azevedo',
    },
  },
]
