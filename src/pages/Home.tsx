import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Confetti from 'react-confetti'
import ActionCard from '../components/ActionCard'
import LuckySpinWheel from '../components/LuckySpinWheel'
import luckyEnvelope from '../assets/s2.webp'
import party from '../assets/party.svg'

const wishes = [
  'An Khang Thịnh Vượng',
  'Vạn Sự Như Ý',
  'Phúc Lộc An Khang',
  'Tấn Tài Tấn Lộc',
  'Gia Đình Hạnh Phúc',
  'Cát Tường Như Ý',
  'Xuân Hưng Thịnh Vượng',
  'Phát Tài Phát Lộc',
  'Phúc Lộc Vẹn Toàn',
  'Xuân Sang Phú Quý',
  'Lộc Đầy Túi Tiền',
  'Gia Đạo Bình An',
  'Khai Xuân Đại Cát',
]

function pickTwoWishes() {
  const leftIndex = Math.floor(Math.random() * wishes.length)
  let rightIndex = Math.floor(Math.random() * wishes.length)

  if (wishes.length > 1) {
    while (rightIndex === leftIndex) {
      rightIndex = Math.floor(Math.random() * wishes.length)
    }
  }

  return {
    left: wishes[leftIndex],
    right: wishes[rightIndex],
  }
}


export default function Home() {
  const navigate = useNavigate()
  const [showWheel, setShowWheel] = useState(false)
  const [winner, setWinner] = useState<string | null>(null)
  const [winnerWishes, setWinnerWishes] = useState<{ left: string; right: string } | null>(null)

  return (
    <div className="page page--home">
      <div className="action-grid action-grid--verticalSlider">
        <div className="action-slide">
          <ActionCard
            title="Đón lộc đầu xuân"
            imageSrc={luckyEnvelope}
            imageAlt="Lucky money"
            onClick={() => setShowWheel(true)}
            hideBody
          />
        </div>

        <div className="action-slide">
          <ActionCard
            title="Chén chú chén anh"
            imageSrc={party}
            imageAlt="Topics"
            onClick={() => navigate('/topics')}
            hideBody
          />
        </div>
      </div>

      {showWheel && (
        <LuckySpinWheel
          onSpinEnd={(img) => {
            setShowWheel(false)
            setWinner(img)
            setWinnerWishes(pickTwoWishes())
          }}
          onClose={() => setShowWheel(false)}
        />
      )}

      {winner && winnerWishes && (
        <div
          className="winner-overlay"
          onClick={() => {
            setWinner(null)
            setWinnerWishes(null)
          }}
        >
          <Confetti numberOfPieces={400} recycle={false} gravity={0.2} />
          <div className="winner-layout">
            <img src={winner} className="winner-image" alt="Winner" />
          </div>
        </div>
      )}
    </div>
  )
}
