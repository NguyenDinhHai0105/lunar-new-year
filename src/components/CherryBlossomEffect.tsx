import { useEffect, useMemo, useState, type CSSProperties } from 'react'
import cherryPetal from '../assets/cherry-petal.svg'

type Petal = {
  id: number
  leftVW: number
  sizePX: number
  durationS: number
  delayS: number
  x1VW: number
  x2VW: number
  x3VW: number
  x4VW: number
  opacity: number
  blurPX: number
  hueDeg: number
  flutterS: number
  flip: 1 | -1
}

function mulberry32(seed: number) {
  let t = seed >>> 0
  return () => {
    t += 0x6d2b79f5
    let r = Math.imul(t ^ (t >>> 15), 1 | t)
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r)
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296
  }
}

type Props = {
  enabled?: boolean
}

export default function CherryBlossomEffect({ enabled = true }: Props) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')

    const update = () => {
      setPrefersReducedMotion(media.matches)
    }

    update()

    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', update)
      return () => media.removeEventListener('change', update)
    }

    media.addListener(update)
    return () => media.removeListener(update)
  }, [])

  const petals = useMemo<Petal[]>(() => {
    if (!enabled || prefersReducedMotion) return []

    const rand = mulberry32(20260119)
    const count = 42

    return Array.from({ length: count }, (_, id) => {
      const leftVW = rand() * 100

      const depth = rand()
      const sizePX = Math.round(14 + depth * 28)
      const durationS = 11 + (1 - depth) * 12 + rand() * 5
      const delayS = -rand() * durationS

      const drift = (rand() * 2 - 1) * (14 + rand() * 32)
      const x1VW = drift * (0.15 + rand() * 0.25)
      const x2VW = drift * (-0.22 + rand() * 0.35)
      const x3VW = drift * (0.28 + rand() * 0.28)
      const x4VW = drift

      const opacity = 0.22 + (1 - depth) * 0.42
      const blurPX = Math.max(0, (depth - 0.58) * 2.2)
      const hueDeg = (rand() * 2 - 1) * 8
      const flutterS = 2.4 + rand() * 3.6
      const flip: 1 | -1 = rand() > 0.5 ? 1 : -1

      return {
        id,
        leftVW,
        sizePX,
        durationS,
        delayS,
        x1VW,
        x2VW,
        x3VW,
        x4VW,
        opacity,
        blurPX,
        hueDeg,
        flutterS,
        flip,
      }
    })
  }, [enabled, prefersReducedMotion])

  if (!enabled || prefersReducedMotion) return null

  return (
    <div className="petal-layer petal-layer--cherry" aria-hidden="true">
      {petals.map((p) => {
        const style: CSSProperties & Record<string, string> = {
          left: `${p.leftVW}vw`,
          width: `${p.sizePX}px`,
          '--petal-duration': `${p.durationS}s`,
          '--petal-delay': `${p.delayS}s`,
          '--petal-x1': `${p.x1VW}vw`,
          '--petal-x2': `${p.x2VW}vw`,
          '--petal-x3': `${p.x3VW}vw`,
          '--petal-x4': `${p.x4VW}vw`,
          '--petal-opacity': `${p.opacity}`,
          '--petal-blur': `${p.blurPX}px`,
          '--petal-hue': `${p.hueDeg}deg`,
          '--petal-flutter': `${p.flutterS}s`,
          '--petal-flip': `${p.flip}`,
        }

        return (
          <div key={p.id} className="petal" style={style}>
            <img className="petal__img" src={cherryPetal} alt="" />
          </div>
        )
      })}
    </div>
  )
}
