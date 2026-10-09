import type { Messages } from '@/i18n'

export type NavId = keyof Messages['nav']['items']

export interface NavEntry {
  id: NavId
  href: string
}

/**
 * Anchor ids are kebab-case English so they stay stable across locales. "Home"
 * is absent on purpose: the logo is the link back to the top.
 */
export const navItems: NavEntry[] = [
  { id: 'experience', href: '#experience' },
  { id: 'projects', href: '#projects' },
  { id: 'skills', href: '#skills' },
  { id: 'about', href: '#about' },
  { id: 'contact', href: '#contact' },
]
