import { useState, useEffect } from 'react'
import { getRemaining, pad } from './countdown'

export default function BannerV2({ onHeightChange }) {
  const [visible, setVisible] = useState(true)
  const [exiting, setExiting] = useState(false)
  const [time, setTime] = useState(() => getRemaining())

  useEffect(() => {
    if (!time) { setVisible(false); return }
    const id = setInterval(() => {
      const t = getRemaining()
      if (!t) {
        setVisible(false)
        clearInterval(id)
        return
      }
      setTime(t)
    }, 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    onHeightChange?.(visible && !exiting ? 44 : 0)
  }, [visible, exiting, onHeightChange])

  const dismiss = () => {
    setExiting(true)
    setTimeout(() => {
      setVisible(false)
      setExiting(false)
    }, 280)
  }

  if (!visible || !time) return null

  return (
    <div
      className="ntcollection-banner"
      role="status"
      aria-live="polite"
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1100,
        height: '44px',
        background: 'linear-gradient(to right, #F96714 0%, #FFD000 48%, #F96714 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '48px',
        paddingRight: '16px',
        transform: exiting ? 'translateY(-100%)' : 'translateY(0)',
        opacity: exiting ? 0 : 1,
        transition: 'transform 0.28s ease, opacity 0.28s ease',
      }}
    >
      <div className="ntcollection-banner-spacer" style={{ width: '32px', flexShrink: 0 }} aria-hidden="true" />

      <div style={{
        flex: 1, display: 'flex', alignItems: 'center',
        justifyContent: 'center', gap: '12px', minWidth: 0,
      }}>
        <p className="ntcollection-banner-label" style={{
          margin: 0,
          color: '#020305',
          fontFamily: 'Margem, Inter, sans-serif',
          fontWeight: 800,
          fontSize: '14px',
          letterSpacing: '0.36px',
          textTransform: 'uppercase',
          lineHeight: '18px',
          whiteSpace: 'nowrap',
        }}>
          <span className="ntcollection-banner-full">Os benefícios exclusivos do Founders Edition expiram em:</span>
          <span className="ntcollection-banner-short">Founders Edition expira em:</span>
        </p>
        <p className="ntcollection-banner-clock" style={{
          margin: 0,
          color: '#020305',
          fontFamily: 'Margem, Inter, sans-serif',
          fontWeight: 800,
          fontSize: '20px',
          lineHeight: 1,
          whiteSpace: 'nowrap',
          fontVariantNumeric: 'tabular-nums',
        }}>
          {pad(time.hours)} : {pad(time.minutes)} : {pad(time.seconds)}
        </p>
      </div>

      <button
        className="ntcollection-banner-close"
        onClick={dismiss}
        aria-label="Fechar aviso"
        style={{
          width: '32px', height: '32px', flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'none', border: 'none', padding: 0,
          cursor: 'pointer',
          color: '#020305', opacity: 0.6,
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
        .ntcollection-banner-short { display: none; }
        @media (max-width: 767px) {
          .ntcollection-banner {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          .ntcollection-banner-label {
            font-size: 12px !important;
            letter-spacing: 0.36px !important;
            line-height: 18px !important;
          }
          .ntcollection-banner-clock {
            font-size: 18px !important;
          }
          .ntcollection-banner-full  { display: none; }
          .ntcollection-banner-short { display: inline; }
          .ntcollection-banner-spacer,
          .ntcollection-banner-close { display: none !important; }
        }
        @media (max-width: 360px) {
          .ntcollection-banner-label { font-size: 11px !important; }
          .ntcollection-banner-clock { font-size: 16px !important; }
        }
      `}</style>
    </div>
  )
}
