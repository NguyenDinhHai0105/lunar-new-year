import type { ReactNode } from 'react'

type Props = {
  title: string
  subtitle?: string
  imageSrc: string
  imageAlt?: string
  onClick: () => void
  footer?: ReactNode
  hideBody?: boolean
}

export default function ActionCard({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  onClick,
  footer,
  hideBody,
}: Props) {
  const className = hideBody ? 'action-card action-card--mediaOnly' : 'action-card'

  return (
    <button type="button" className={className} onClick={onClick} aria-label={title}>
      {hideBody ? (
        <img className="action-card__img" src={imageSrc} alt={imageAlt ?? ''} />
      ) : (
        <>
          <div className="action-card__media">
            <img className="action-card__img" src={imageSrc} alt={imageAlt ?? ''} />
          </div>
          <div className="action-card__body">
            <div className="action-card__title">{title}</div>
            {subtitle ? <div className="action-card__subtitle">{subtitle}</div> : null}
            {footer ? <div className="action-card__footer">{footer}</div> : null}
          </div>
        </>
      )}
    </button>
  )
}
