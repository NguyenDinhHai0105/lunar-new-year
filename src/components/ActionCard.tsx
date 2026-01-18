import type { ReactNode } from 'react'

type Props = {
  title: string
  subtitle?: string
  imageSrc: string
  imageAlt?: string
  onClick: () => void
  footer?: ReactNode
}

export default function ActionCard({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  onClick,
  footer,
}: Props) {
  return (
    <button type="button" className="action-card" onClick={onClick}>
      <div className="action-card__media">
        <img className="action-card__img" src={imageSrc} alt={imageAlt ?? ''} />
      </div>
      <div className="action-card__body">
        <div className="action-card__title">{title}</div>
        {subtitle ? <div className="action-card__subtitle">{subtitle}</div> : null}
        {footer ? <div className="action-card__footer">{footer}</div> : null}
      </div>
    </button>
  )
}

