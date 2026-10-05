import { motion } from 'framer-motion'
import SocialProof from './SocialProof'

const BG = '#020305'
const OW = '#EFEFEF'
const BLUE = '#87CDE7'
const MUTED = 'rgba(239,239,239,0.5)'
const EDITORIAL = 'Roslindale, Georgia, serif'
const BODY = 'Margem, Inter, sans-serif'

export default function ArtistHero({
  bannerHeight = 36,
  collectionLabel,
  titleLines,
  artistName,
  description,
  stats,
  img,
  layoutId,
  navigate,
}) {
  const scrollToTrailer = () =>
    document.getElementById('trailer')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="r-artist-hero" style={{
      height: '100vh',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
    }}>

      <div className="r-artist-photo" style={{ position: 'relative', overflow: 'hidden' }}>
        <motion.img
          layoutId={layoutId}
          src={img}
          alt={artistName}
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center top',
            display: 'block',
          }}
          transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
        />
        <div style={{
          position: 'absolute', top: 0, right: 0, bottom: 0, width: '120px', pointerEvents: 'none',
          background: `linear-gradient(to right, transparent, ${BG})`,
        }} />
      </div>

      <motion.div
        className="r-artist-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.3, ease: [0.65, 0, 0.35, 1] }}
        style={{
          background: BG,
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          padding: '60px 40px',
          position: 'relative', overflowY: 'auto',
        }}
      >
        <div style={{ flex: 1 }} />

        <div style={{ maxWidth: '480px', width: '100%' }}>

          <p style={{
            fontFamily: BODY,
            fontSize: '11px', letterSpacing: '0.2em',
            textTransform: 'uppercase', color: BLUE,
            marginBottom: '16px',
          }}>
            {collectionLabel}
          </p>

          <h1 style={{
            fontFamily: EDITORIAL,
            fontSize: 'clamp(1.8rem, 2.8vw, 2.8rem)',
            fontWeight: 400, lineHeight: 1.05,
            color: OW,
            marginBottom: '20px',
          }}>
            {titleLines.map((line, i) => (
              <span key={i} style={{ display: 'block' }}>{line}</span>
            ))}
          </h1>

          <p style={{
            fontFamily: BODY,
            fontSize: '15px', fontWeight: 500,
            color: OW, letterSpacing: '0.02em',
            marginBottom: '28px',
          }}>
            Por {artistName}
          </p>

          <p style={{
            fontFamily: BODY,
            fontSize: '15px', lineHeight: 1.75,
            color: MUTED,
            marginBottom: '40px',
          }}>
            {description}
          </p>

          <div style={{
            borderTop: '1px solid rgba(239,239,239,0.08)',
            marginBottom: '28px',
          }} />

          <div style={{
            display: 'flex', gap: '40px',
            marginBottom: '40px',
          }}>
            {stats.map(stat => (
              <div key={stat.label}>
                <p style={{
                  fontFamily: EDITORIAL,
                  fontSize: '2rem', fontWeight: 400,
                  color: OW, lineHeight: 1, marginBottom: '6px',
                }}>
                  {stat.value}
                </p>
                <p style={{
                  fontFamily: BODY,
                  fontSize: '10px', letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(239,239,239,0.35)',
                }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="r-artist-btns" style={{
            display: 'flex', gap: '12px',
            flexWrap: 'wrap', alignItems: 'center',
            marginBottom: '28px',
          }}>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('pdv:open-checkout'))}
              style={{
                background: BLUE, color: BG,
                fontFamily: BODY, fontWeight: 600,
                fontSize: '13px', letterSpacing: '0.03em',
                padding: '14px 28px', border: 'none',
                cursor: 'pointer', minHeight: '48px',
                transition: 'background 0.2s ease-in-out',
              }}
              onMouseOver={e => e.currentTarget.style.background = '#6bbcd8'}
              onMouseOut={e => e.currentTarget.style.background = BLUE}
            >
              Começar Agora
            </button>
            <button
              onClick={scrollToTrailer}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'rgba(239,239,239,0.08)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(239,239,239,0.18)',
                color: OW, fontFamily: BODY,
                fontSize: '13px', letterSpacing: '0.03em',
                padding: '14px 28px', cursor: 'pointer',
                minHeight: '48px',
                transition: 'background 0.2s ease-in-out',
              }}
              onMouseOver={e => e.currentTarget.style.background = 'rgba(239,239,239,0.16)'}
              onMouseOut={e => e.currentTarget.style.background = 'rgba(239,239,239,0.08)'}
            >
              <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Assistir Trailer
            </button>
          </div>

          <SocialProof />

        </div>
      </motion.div>
    </section>
  )
}
