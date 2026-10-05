import { useState } from 'react'

const icon = '/images/pdv/whatsapp.webp'

const BODY = 'Margem, Inter, sans-serif'

export default function WhatsAppButton({ bottomOffset = 24 }) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href="https://nt.novotraco.com/whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'fixed',
        bottom: `calc(${bottomOffset}px + env(safe-area-inset-bottom, 0px))`,
        right: 'max(16px, env(safe-area-inset-right, 16px))',
        zIndex: 1000,
        display: 'inline-flex',
        alignItems: 'center',
        gap: hovered ? '10px' : '0px',
        background: '#25D366',
        borderRadius: '50px',
        padding: '13px',
        paddingRight: hovered ? '20px' : '13px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
        textDecoration: 'none',
        cursor: 'pointer',
        minWidth: '52px', minHeight: '52px',
        transition: 'bottom 0.35s cubic-bezier(0.65,0,0.35,1), padding-right 0.35s cubic-bezier(0.65,0,0.35,1), gap 0.35s cubic-bezier(0.65,0,0.35,1)',
      }}
    >
      <img
        src={icon}
        alt="WhatsApp"
        width="26"
        height="26"
        loading="lazy"
        decoding="async"
        style={{ width: '26px', height: '26px', flexShrink: 0, display: 'block' }}
      />
      <span style={{
        fontFamily: BODY,
        fontSize: '13px',
        fontWeight: 600,
        color: '#fff',
        whiteSpace: 'nowrap',
        display: 'inline-block',
        maxWidth: hovered ? '300px' : '0px',
        opacity: hovered ? 1 : 0,
        overflow: 'hidden',
        transition: 'max-width 0.4s cubic-bezier(0.65,0,0.35,1), opacity 0.2s ease',
      }}>
        Alguma dúvida? Nos chame no WhatsApp
      </span>
    </a>
  )
}
