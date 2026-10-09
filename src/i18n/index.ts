import en from './en'
import ptBR from './pt-BR'

import type { Locale, Localized } from '@/types/content'

export type Messages = typeof ptBR

export const messages: Record<Locale, Messages> = {
  'pt-BR': ptBR,
  en,
}

export const LOCALES: Locale[] = ['pt-BR', 'en']
export const DEFAULT_LOCALE: Locale = 'pt-BR'

export function toLocale(value: string | undefined): Locale {
  return value === 'en' ? 'en' : 'pt-BR'
}

/** Path of the home page for a locale; `/` for the default one. */
export function localePath(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? '/' : `/${locale}/`
}

export function useI18n(locale: Locale) {
  const t = messages[locale]
  const l = <T>(value: Localized<T>): T => value[locale]

  const monthFormat = new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric' })
  /** `YYYY-MM` → "jul. de 2025" / "Jul 2025"; `null` → "Atual" / "Present". */
  const formatDate = (iso: string | null): string => {
    if (iso === null) return t.experience.present
    const [year, month = '1'] = iso.split('-')
    return monthFormat.format(new Date(Number(year), Number(month) - 1, 1))
  }

  const fill = (template: string, vars: Record<string, string | number>): string =>
    template.replace(/\{(\w+)\}/g, (_, key: string) => String(vars[key] ?? ''))

  return { t, l, locale, formatDate, fill }
}
