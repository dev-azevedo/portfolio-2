import { play } from './sound'

type Mode = '8bit' | '4k'
type Theme = 'light' | 'dark'

const root = document.documentElement
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

function store(key: string, value: string): void {
  try {
    localStorage.setItem(key, value)
  } catch {
    // Private mode / blocked storage: the choice just won't persist.
  }
}

function syncThemeColor(): void {
  const color =
    root.dataset.mode === '8bit' ? '#1d1636' : root.dataset.theme === 'dark' ? '#17151c' : '#fbfafc'
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', color)
}

/* ---------------------------------------------------------------- mode -- */

function syncModeButtons(): void {
  const mode = root.dataset.mode
  document.querySelectorAll<HTMLButtonElement>('[data-mode-set]').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.dataset.modeSet === mode))
  })
}

function setMode(next: Mode, origin?: HTMLElement): void {
  if (root.dataset.mode === next) return

  const apply = () => {
    root.dataset.mode = next
    store('mode', next)
    syncModeButtons()
    syncThemeColor()
  }

  if (next === '8bit') play('coin', root.dataset.sound === 'on')

  if (!document.startViewTransition || reducedMotion.matches) {
    apply()
    return
  }

  if (origin) {
    const rect = origin.getBoundingClientRect()
    root.style.setProperty('--vt-x', `${rect.left + rect.width / 2}px`)
    root.style.setProperty('--vt-y', `${rect.top + rect.height / 2}px`)
  }
  const cls = next === '8bit' ? 'vt-to-8bit' : 'vt-to-4k'
  root.classList.add(cls)
  const transition = document.startViewTransition(apply)
  void transition.finished.finally(() => root.classList.remove(cls))
}

document.querySelectorAll<HTMLButtonElement>('[data-mode-set]').forEach((btn) => {
  btn.addEventListener('click', () => setMode(btn.dataset.modeSet as Mode, btn))
})
syncModeButtons()

/* --------------------------------------------------------------- theme -- */

function syncThemeButtons(): void {
  const dark = root.dataset.theme === 'dark'
  document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((btn) => {
    const label = dark ? btn.dataset.labelLight : btn.dataset.labelDark
    if (label) btn.setAttribute('aria-label', label)
  })
}

document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const next: Theme = root.dataset.theme === 'dark' ? 'light' : 'dark'
    // Kill transitions for one frame so every surface flips at once instead of
    // each element easing at its own speed.
    root.classList.add('no-transitions')
    root.dataset.theme = next
    store('theme', next)
    syncThemeButtons()
    syncThemeColor()
    requestAnimationFrame(() =>
      requestAnimationFrame(() => root.classList.remove('no-transitions')),
    )
  })
})
syncThemeButtons()

/* --------------------------------------------------------------- sound -- */

function syncSoundButtons(): void {
  const on = root.dataset.sound === 'on'
  document.querySelectorAll<HTMLButtonElement>('[data-sound-toggle]').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(on))
    const label = on ? btn.dataset.labelOff : btn.dataset.labelOn
    if (label) btn.setAttribute('aria-label', label)
  })
}

document.querySelectorAll<HTMLButtonElement>('[data-sound-toggle]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const on = root.dataset.sound !== 'on'
    if (on) root.dataset.sound = 'on'
    else delete root.dataset.sound
    store('sound', on ? 'on' : 'off')
    syncSoundButtons()
    if (on) play('select')
  })
})
syncSoundButtons()

// Chip sounds on interactive elements. Delegated, so new nodes are covered.
document.addEventListener('pointerover', (event) => {
  if (event.pointerType !== 'mouse') return
  const target = (event.target as Element).closest('a, button')
  const from = (event.relatedTarget as Element | null)?.closest('a, button')
  if (target && target !== from) play('blip')
})
document.addEventListener('click', (event) => {
  const target = (event.target as Element).closest('a, button')
  if (target && !target.matches('[data-sound-toggle], [data-mode-set]')) play('select')
})

/* -------------------------------------------------------------- locale -- */

document.querySelectorAll<HTMLAnchorElement>('[data-locale-link]').forEach((link) => {
  link.addEventListener('click', () => store('lang', link.dataset.localeLink ?? 'pt-BR'))
})

/* ------------------------------------------------------- scroll reveal -- */

const revealables = document.querySelectorAll<HTMLElement>('[data-reveal]')
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('is-revealed')
        io.unobserve(entry.target)
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
  )
  revealables.forEach((el) => io.observe(el))
} else {
  revealables.forEach((el) => el.classList.add('is-revealed'))
}

/* --------------------------------------------------------- scroll spy -- */

const navLinks = [...document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]')]
const sections = [
  ...new Set(navLinks.map((link) => link.hash).filter(Boolean)),
].flatMap((hash) => {
  const el = document.querySelector<HTMLElement>(hash)
  return el ? [el] : []
})

if (sections.length && 'IntersectionObserver' in window) {
  const visible = new Map<string, number>()
  const spy = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) visible.set(entry.target.id, entry.intersectionRatio)
      let best = ''
      let bestRatio = 0
      for (const [id, ratio] of visible) {
        if (ratio > bestRatio) {
          best = id
          bestRatio = ratio
        }
      }
      navLinks.forEach((link) => {
        if (link.hash === `#${best}` && bestRatio > 0) link.setAttribute('aria-current', 'true')
        else link.removeAttribute('aria-current')
      })
    },
    { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.01, 0.5, 1] },
  )
  sections.forEach((section) => spy.observe(section))
}

/* ----------------------------------------------------------- nav sheet -- */

const sheet = document.querySelector<HTMLDialogElement>('#nav-sheet')
document.querySelector('[data-nav-open]')?.addEventListener('click', () => sheet?.showModal())
sheet?.querySelectorAll('[data-nav-close], a').forEach((el) => {
  el.addEventListener('click', () => sheet.close())
})
sheet?.addEventListener('click', (event) => {
  if (event.target === sheet) sheet.close()
})
