import { useState, useEffect } from 'react'

const cliente1 = '/images/pdv/cliente-1.png'
const cliente2 = '/images/pdv/cliente-2.png'
const cliente3 = '/images/pdv/cliente-3.png'
const cliente4 = '/images/pdv/cliente-4.png'
const cliente5 = '/images/pdv/cliente-5.png'

const OW = '#EFEFEF'
const BLUE = '#87CDE7'
const BORDER = 'rgba(239,239,239,0.1)'
const BODY = 'Margem, Inter, sans-serif'

const avatars = [cliente1, cliente2, cliente3, cliente4, cliente5]

export default function StickyBar({ page, navigate }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(false)

    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.75
      const faq = document.querySelector('#faq')
      const nearEnd = faq
        ? faq.getBoundingClientRect().top < window.innerHeight * 0.8
        : false
      setVisible(pastHero && !nearEnd)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [page])

  return (
    <div
      role="region"
      aria-label="Assinar NT Collection"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        background: 'rgba(2,3,5,0.72)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: `1px solid ${BORDER}`,
        transform: visible ? 'translateY(0)' : 'translateY(110%)',
        opacity: visible ? 1 : 0,
        transition: 'transform 0.3s cubic-bezier(0.33,1,0.68,1), opacity 0.25s ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <div className="sticky-bar-inner" style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 40px',
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '32px',
      }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            {avatars.map((src, i) => (
              <img key={i} src={src} alt="" className={i >= 3 ? 'sticky-avatar-extra' : ''} style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid rgba(2,3,5,0.9)',
                marginLeft: i === 0 ? 0 : '-10px',
                zIndex: avatars.length - i,
                position: 'relative',
                flexShrink: 0,
              }} />
            ))}
          </div>

          <div>
            <span className="sticky-price-main" style={{ fontFamily: BODY, fontSize: '15px', fontWeight: 700, color: OW, lineHeight: 1, display: 'block' }}>
              A partir de R$ 58,25
            </span>
            <p className="sticky-price-sub" style={{ fontFamily: BODY, fontSize: '11px', fontWeight: 400, color: 'rgba(239,239,239,0.35)', marginTop: '3px', letterSpacing: '0.01em' }}>
              cobrado mensalmente por um ano · 2 meses grátis
            </p>
          </div>
        </div>

        <button
          aria-label="Assinar o NT Collection agora"
          onClick={() => window.dispatchEvent(new CustomEvent('pdv:open-checkout'))}
          style={{
            flexShrink: 0,
            background: BLUE,
            color: '#020305',
            fontFamily: BODY,
            fontWeight: 700,
            fontSize: '13px',
            letterSpacing: '0.04em',
            padding: '12px 28px',
            border: 'none',
            borderRadius: '2px',
            cursor: 'pointer',
            transition: 'background 0.2s ease',
            whiteSpace: 'nowrap',
          }}
          onMouseOver={e => e.currentTarget.style.background = '#6bbcd8'}
          onMouseOut={e => e.currentTarget.style.background = BLUE}
        >
          Assinar agora
        </button>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .sticky-bar-inner {
            padding: 0 16px !important;
            padding-bottom: max(12px, env(safe-area-inset-bottom)) !important;
            height: auto !important;
            min-height: 64px !important;
            gap: 12px !important;
          }
          .sticky-price-sub { display: none !important; }
          .sticky-avatar-extra { display: none !important; }
          .sticky-price-main { font-size: 13px !important; }
        }
        @media (max-width: 374px) {
          .sticky-bar-inner { gap: 8px !important; }
          .sticky-bar-inner button { font-size: 12px !important; padding: 10px 14px !important; }
        }
      `}</style>
    </div>
  )
}
