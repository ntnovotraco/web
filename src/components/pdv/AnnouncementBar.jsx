import { useState, useEffect } from 'react'

const BANNER_KEY = 'nt-banner-dismissed-v1'
const BG = '#EFEC4B'
const TEXT = '#020305'
const BODY = 'Margem, Inter, sans-serif'

export default function AnnouncementBar({ onHeightChange }) {
  const [visible, setVisible] = useState(false)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    if (!sessionStorage.getItem(BANNER_KEY)) setVisible(true)
  }, [])

  useEffect(() => {
    onHeightChange?.(visible && !exiting ? 36 : 0)
  }, [visible, exiting])

  const dismiss = () => {
    setExiting(true)
    setTimeout(() => {
      setVisible(false)
      setExiting(false)
      sessionStorage.setItem(BANNER_KEY, 'true')
    }, 300)
  }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1100,
      background: BG,
      height: '36px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px 0 16px',
      transform: exiting ? 'translateY(-100%)' : 'translateY(0)',
      opacity: exiting ? 0 : 1,
      transition: 'transform 0.3s ease, opacity 0.3s ease',
    }}>

      <div style={{ width: '32px', flexShrink: 0 }} />

      <p style={{
        fontFamily: BODY,
        fontSize: '12px',
        fontWeight: 600,
        color: TEXT,
        letterSpacing: '0.03em',
        textAlign: 'center',
        flex: 1,
      }}>
        <span className="banner-full">Coleções do L7NNON e do Papatinho já disponíveis. Assine o NT Collection agora e confira o conteúdo exclusivo.</span>
        <span className="banner-short">L7NNON e Papatinho já disponíveis. Assine agora.</span>
      </p>

      <button
        onClick={dismiss}
        aria-label="Fechar aviso"
        style={{
          width: '32px',
          height: '32px',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: TEXT,
          opacity: 0.6,
          padding: 0,
          transition: 'opacity 0.15s',
        }}
        onMouseOver={e => e.currentTarget.style.opacity = '1'}
        onMouseOut={e => e.currentTarget.style.opacity = '0.6'}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <style>{`
        .banner-short { display: none; }
        @media (max-width: 540px) {
          .banner-full  { display: none; }
          .banner-short { display: inline; }
        }
      `}</style>
    </div>
  )
}
