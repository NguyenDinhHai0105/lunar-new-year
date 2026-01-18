import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ActionCard from '../components/ActionCard'
import Modal from '../components/Modal'
import luckyEnvelope from '../assets/s2.webp'
import cloudRight from '../assets/cloud-right.svg'
import { randomFromArray } from '../utils/random'

function formatVND(amount: number) {
  const formatted = new Intl.NumberFormat('vi-VN').format(amount)
  return `${formatted}₫`
}

export default function Home() {
  const navigate = useNavigate()
  const amounts = useMemo(() => [10000, 20000, 50000, 100000, 200000, 500000], [])
  const [open, setOpen] = useState(false)
  const [amount, setAmount] = useState<number | null>(null)

  const reveal = () => {
    const next = randomFromArray(amounts, amount ?? undefined)
    setAmount(next)
    setOpen(true)
  }

  return (
    <div className="page">
      <div className="hero">
        <div className="hero__title">Tết 2026</div>
        <div className="hero__subtitle">Pick an activity and enjoy the moment</div>
      </div>

      <div className="action-grid">
        <ActionCard
          title="Đón lộc đầu xuân"
          subtitle="Tap to reveal your lucky money"
          imageSrc={luckyEnvelope}
          imageAlt="Lucky money"
          onClick={reveal}
          footer={<span className="pill">Random reveal</span>}
        />

        <ActionCard
          title="Chén chú chén anh"
          subtitle="Tap to start a fun Q&A"
          imageSrc={cloudRight}
          imageAlt="Topics"
          onClick={() => navigate('/topics')}
          footer={<span className="pill pill--gold">Topics</span>}
        />
      </div>

      <Modal open={open} title="Your lucky money" onClose={() => setOpen(false)}>
        <div className="reveal">
          <div className="reveal__amount">{amount === null ? '—' : formatVND(amount)}</div>
          <div className="reveal__note">Wishing you a year full of joy and good fortune.</div>
          <div className="reveal__actions">
            <button type="button" className="btn btn--primary" onClick={reveal}>
              Reveal again
            </button>
            <button type="button" className="btn btn--ghost" onClick={() => setOpen(false)}>
              Done
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

