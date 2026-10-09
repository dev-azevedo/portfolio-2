/**
 * Tiny square-wave chip sounds, synthesised on the fly — no audio files.
 * Off by default; only ever plays in 8-BIT mode, after the visitor turned it on
 * (which is also the user gesture browsers require to start an AudioContext).
 */

type Note = [freq: number, duration: number]

const SOUNDS = {
  blip: [[880, 0.035]],
  select: [
    [660, 0.05],
    [990, 0.07],
  ],
  coin: [
    [988, 0.07],
    [1319, 0.22],
  ],
  back: [
    [520, 0.05],
    [330, 0.08],
  ],
} satisfies Record<string, Note[]>

export type SoundName = keyof typeof SOUNDS

let ctx: AudioContext | null = null
let lastBlip = 0

export function soundEnabled(): boolean {
  const root = document.documentElement
  return root.dataset.sound === 'on' && root.dataset.mode === '8bit'
}

export function play(name: SoundName, force = false): void {
  if (!force && !soundEnabled()) return
  // Hover blips are rate-limited so sweeping across a grid doesn't buzz.
  if (name === 'blip') {
    const now = performance.now()
    if (now - lastBlip < 60) return
    lastBlip = now
  }

  ctx ??= new AudioContext()
  if (ctx.state === 'suspended') void ctx.resume()

  let t = ctx.currentTime
  for (const [freq, duration] of SOUNDS[name]) {
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'square'
    osc.frequency.setValueAtTime(freq, t)
    gain.gain.setValueAtTime(0.045, t)
    gain.gain.exponentialRampToValueAtTime(0.0001, t + duration)
    osc.connect(gain).connect(ctx.destination)
    osc.start(t)
    osc.stop(t + duration)
    t += duration
  }
}
