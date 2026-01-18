import './App.css'
import { useMemo, type CSSProperties } from 'react'
import { Outlet } from 'react-router-dom'
import main from './assets/bg-main.svg'
import cloudFloating from './assets/cloud-floating.svg'
import peachBlossom from './assets/peach-blossom.svg'

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

function App() {
  const petals = useMemo<Petal[]>(() => {
    const rand = mulberry32(20260118)
    const count = 36

    return Array.from({ length: count }, (_, id) => {
      const leftVW = rand() * 100

      const depth = rand()
      const sizePX = Math.round(18 + depth * 34)
      const durationS = 10 + (1 - depth) * 10 + rand() * 4
      const delayS = -rand() * durationS

      const drift = (rand() * 2 - 1) * (10 + rand() * 26)
      const x1VW = drift * (0.2 + rand() * 0.25)
      const x2VW = drift * (-0.15 + rand() * 0.3)
      const x3VW = drift * (0.35 + rand() * 0.25)
      const x4VW = drift

      const opacity = 0.18 + (1 - depth) * 0.38
      const blurPX = Math.max(0, (depth - 0.55) * 2.2)
      const hueDeg = (rand() * 2 - 1) * 12
      const flutterS = 2.8 + rand() * 3.8
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
  }, [])

  return (
    <div
      className="main-bg"
      style={
        {
          '--main-bg-image': `url(${main})`,
        } as CSSProperties & Record<string, string>
      }
    >
      <div className="cloud-layer" aria-hidden="true">
        <img className="cloud cloud--a" src={cloudFloating} alt="" />
        <img className="cloud cloud--b" src={cloudFloating} alt="" />
        <img className="cloud cloud--c" src={cloudFloating} alt="" />
      </div>

      <div className="petal-layer" aria-hidden="true">
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
              <img className="petal__img" src={peachBlossom} alt="" />
            </div>
          )
        })}
      </div>

      <div className="content-layer">
        <div className="app-shell">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default App
