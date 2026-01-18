import { useEffect, useRef } from 'react'

type Props = {
  open: boolean
  title: string
  onClose: () => void
  children: React.ReactNode
}

export default function Modal({ open, title, onClose, children }: Props) {
  const closeRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (!open) return

    const t = window.setTimeout(() => closeRef.current?.focus(), 0)

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.clearTimeout(t)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={title}>
      <button type="button" className="modal__backdrop" onClick={onClose} aria-label="Close" />
      <div className="modal__panel">
        <div className="modal__header">
          <div className="modal__title">{title}</div>
          <button ref={closeRef} type="button" className="btn btn--ghost" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="modal__content">{children}</div>
      </div>
    </div>
  )
}

