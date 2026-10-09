import { experience } from './experience'
import { projects } from './projects'
import { skills } from './skills'
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from './socials'
import { localePath, messages } from '@/i18n'
import type { Locale } from '@/types/content'

export const SITE_NAME = 'Jhonatan Azevedo'

/**
 * schema.org graph for the home page: a ProfilePage whose main entity is the
 * Person, plus the WebSite. Everything is derived from the same data files the
 * page renders, so the structured data can't drift from the visible content.
 */
export function profileJsonLd(locale: Locale, site: URL, imageUrl: string) {
  const t = messages[locale]
  const pageUrl = new URL(localePath(locale), site).href
  const personId = new URL('/#person', site).href
  const websiteId = new URL('/#website', site).href

  const career = experience.find((item) => item.kind !== 'freelance')!
  const currentRole = career.roles[0]!

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: new URL('/', site).href,
        name: SITE_NAME,
        inLanguage: ['pt-BR', 'en'],
        publisher: { '@id': personId },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${pageUrl}#page`,
        url: pageUrl,
        name: `${SITE_NAME} — ${currentRole.title[locale]}`,
        description: t.meta.description,
        inLanguage: locale,
        isPartOf: { '@id': websiteId },
        mainEntity: { '@id': personId },
      },
      {
        '@type': 'Person',
        '@id': personId,
        name: SITE_NAME,
        url: pageUrl,
        image: imageUrl,
        email: `mailto:${EMAIL}`,
        jobTitle: currentRole.title[locale],
        description: t.hero.deck,
        worksFor: {
          '@type': 'Organization',
          name: career.company,
          url: career.url,
        },
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: 'UNINTER',
        },
        knowsAbout: [
          ...skills.map((skill) => skill.name),
          'DDD',
          'Clean Architecture',
          'SOLID',
          'CQRS',
          'Microservices',
          'Event-driven architecture',
        ],
        knowsLanguage: ['pt-BR', 'en'],
        sameAs: [GITHUB_URL, LINKEDIN_URL],
      },
      // Projects as works authored by the Person — `creator` is valid on any
      // CreativeWork, unlike `owns`, which expects a Product.
      ...projects.map((project) => ({
        '@type': 'SoftwareApplication',
        name: project.title,
        description: project.summary[locale],
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        dateCreated: String(project.year),
        creator: { '@id': personId },
        ...(project.liveUrl ? { url: project.liveUrl } : {}),
      })),
    ],
  }
}
