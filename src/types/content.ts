import type { ImageMetadata } from 'astro'

export type Locale = 'pt-BR' | 'en'

/**
 * A value that must exist in every supported locale. Adding a locale to
 * `Locale` turns every missing translation into a compile error.
 */
export type Localized<T = string> = Record<Locale, T>

export type SkillGroup = 'languages' | 'backend' | 'frontend' | 'data' | 'infra'

/** Iconify id, e.g. `simple-icons:python` or `lucide:mail`. */
export type IconName = `${'simple-icons' | 'lucide'}:${string}`

/**
 * Official brand colour with its OKLCH lightness clamped into a band that stays
 * legible on each surface. Omitted for greyscale brands.
 */
export interface BrandColor {
  light: string
  dark: string
}

export interface Skill {
  id: string
  /** Brand name — never localized. */
  name: string
  group: SkillGroup
  icon?: IconName
  /** Fallback for brands with no icon in simple-icons. */
  monogram?: string
  color?: BrandColor
}

export interface ProjectImage {
  src: ImageMetadata
  alt: Localized
}

export interface Project {
  id: string
  title: string
  year: number
  status: 'live' | 'wip' | 'archived'
  summary: Localized
  /** References `Skill.id`. */
  stack: string[]
  liveUrl?: string
  repoUrl?: string
  role?: Localized
  /** The first one doubles as the card cover. */
  gallery: ProjectImage[]
}

export interface ExperienceRole {
  title: Localized
  /** ISO `YYYY-MM`. */
  startDate: string
  /** `null` means current. */
  endDate: string | null
  bullets: Localized<string[]>
}

export interface ExperienceItem {
  id: string
  company: string
  /** `freelance` entries are left out of the career track (not a rung of the ladder). */
  kind?: 'employment' | 'freelance'
  companyLabel?: Localized
  url?: string
  logo?: ImageMetadata
  startDate: string
  endDate: string | null
  companyTagline: Localized
  /** Newest first. */
  roles: ExperienceRole[]
}

export interface SocialLink {
  id: 'linkedin' | 'github' | 'email'
  href: string
  label: Localized
  a11yLabel: Localized
  icon: IconName
  external: boolean
}
