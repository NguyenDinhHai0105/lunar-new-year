import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ActionCard from '../components/ActionCard'
import Modal from '../components/Modal'
import luckyEnvelope from '../assets/s2.webp'
import party from '../assets/party.svg'
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
    <div className="page page--home">
      <div className="action-grid action-grid--verticalSlider">
        <div className="action-slide">
          <ActionCard
            title="Đón lộc đầu xuân"
            imageSrc={luckyEnvelope}
            imageAlt="Lucky money"
            onClick={reveal}
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

      <Modal open={open} title="" ariaLabel="Lucky money" showTitle={false} onClose={() => setOpen(false)}>
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
