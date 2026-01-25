import { useState, useRef, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import cloudRight from '../assets/new-year-horse.svg'
import party from '../assets/new-year-horse.svg'
import topEdge from '../assets/new-year-horse.svg'
import bgMain from '../assets/new-year-horse.svg'
import spinSoundUrl from '../assets/spin-sound.mp3'

type Props = {
  onSpinEnd: (image: string) => void
  onClose: () => void
}

const items = [
  { id: 1, image: cloudRight, color: '#fef3c7' }, // Light yellow
  { id: 2, image: party, color: '#fee2e2' },      // Light red
  { id: 3, image: topEdge, color: '#dcfce7' },    // Light green
  { id: 4, image: bgMain, color: '#e0f2fe' },     // Light blue
]

export default function LuckySpinWheel({ onSpinEnd, onClose }: Props) {
  const [isSpinning, setIsSpinning] = useState(false)
  const [winningIndex, setWinningIndex] = useState<number | null>(null)
  const controls = useAnimation()
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    audioRef.current = new Audio(spinSoundUrl)
  }, [])

  const handleSpin = async () => {
    if (isSpinning) return

    setIsSpinning(true)
    setWinningIndex(null)
    
    // Play sound
    if (audioRef.current) {
        audioRef.current.currentTime = 0
        audioRef.current.play().catch(e => console.log('Audio play failed', e))
    }
    
    // Pick random item
    const selectedIndex = Math.floor(Math.random() * items.length)
    const selectedItem = items[selectedIndex]
    
    // Calculate target rotation
    // Items are 90deg each.
    // Index 0: 0-90 (Center 45)
    // Index 1: 90-180 (Center 135)
    // Index 2: 180-270 (Center 225)
    // Index 3: 270-360 (Center 315)
    
    // Target rotation: Random spin
    const extraSpins = 5 + Math.floor(Math.random() * 3)
    // Add a random offset between 0 and 360 to stop anywhere
    const randomOffset = Math.floor(Math.random() * 360)
    const targetRotation = 360 * extraSpins + randomOffset

    await controls.start({
      rotate: targetRotation,
      transition: {
        duration: 4,
        ease: [0.15, 0, 0.15, 1],
      },
    })

    // Set winner to trigger shake
    setWinningIndex(selectedIndex)

    // Wait a bit for shake effect before showing overlay
    setTimeout(() => {
        setIsSpinning(false)
        onSpinEnd(selectedItem.image)
    }, 1000)
  }

  return (
    <div className="wheel-overlay">
      <div className="wheel-container">
        <motion.div
          className="wheel"
          style={{
            background: 'transparent'
          }}
          animate={controls}
          onClick={handleSpin}
          initial={{ rotate: 0 }}
        >
          {items.map((item, index) => {
            const angle = index * 90 + 45
            const isWinner = winningIndex === index
            return (
                <motion.div
                        key={item.id}
                        className="wheel-item-container"
                        style={{
                            transform: `translate(-50%, -50%) rotate(${angle}deg) translate(210px)`,
                            zIndex: isWinner ? 10 : 1
                        }}
                    >
                    <motion.img
                        src={item.image}
                        className="wheel-image"
                        alt="prize"
                        initial={{ rotate: -90 }}
                        animate={isWinner ? {
                            scale: [1, 1.3, 1.3, 1.3, 1],
                            rotate: [-90, -105, -75, -105, -75, -90],
                        } : { rotate: -90 }}
                        transition={{ duration: 0.8 }}
                    />
                </motion.div>
            )
          })}
        </motion.div>
        
        <button className="wheel-close" onClick={onClose} aria-label="Close">×</button>
        
        {!isSpinning && !winningIndex && <div className="wheel-hint">Tap to Spin!</div>}
      </div>
    </div>
  )
}
