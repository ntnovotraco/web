import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../Navbar'
import UpcomingArtists from '../UpcomingArtists'
import Footer from '../Footer'
import SocialProof from '../SocialProof'
import PricingSection from '../PricingSection'
import FaqSection from '../FaqSection'
import AboutSection from '../AboutSection'
import CommunitySection from '../CommunitySection'

const heroL7 = '/images/pdv/L7.jpg'
const heroPapa = '/images/pdv/Papatinho.jpg'

const BG = '#020305'
const OW = '#EFEFEF'
const BLUE = '#87CDE7'
const BORDER = 'rgba(239,239,239,0.07)'
const EDITORIAL = 'Roslindale, Georgia, serif'

const S = {
  section: { padding: '80px 0', borderTop: `1px solid ${BORDER}` },
  container: { maxWidth: '1280px', margin: '0 auto', padding: '0 40px' },
}

const collections = [
  {
    artist: 'L7NNON',
    title: 'Profetize sua Criação',
    tagline: 'A palavra como força criadora. Da profecia à realidade.',
    temporadas: 1,
    episodios: 14,
    duracao: '2h 34min',
    img: heroL7,
    accent: '#87CDE7',
    page: 'l7nnon',
    trailer: 'https://www.youtube-nocookie.com/embed/ynohbp_uV8A?autoplay=1&mute=0&controls=1&rel=0',
  },
  {
    artist: 'Papatinho',
    title: 'O Músculo Criativo Que Ninguém te Ensina',
    tagline: 'Do baile funk ao Record Plant. O método de quem construiu uma geração.',
    temporadas: 3,
    episodios: 42,
    duracao: '7h42min',
    img: heroPapa,
    accent: '#87CDE7',
    page: 'papatinho',
    trailer: 'https://www.youtube-nocookie.com/embed/ynohbp_uV8A?autoplay=1&mute=0&controls=1&rel=0',
  },
]

export default function Home({ navigate, bannerHeight = 36 }) {
  const [trailerUrl, setTrailerUrl] = useState(null)

  return (
    <div style={{ background: BG, color: OW, minHeight: '100vh' }}>
      <Navbar topOffset={bannerHeight} navigate={navigate} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="r-hero" style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>

        <div className="r-hero-video" style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <iframe
            className="r-hero-iframe"
            src="https://www.youtube-nocookie.com/embed/ynohbp_uV8A?autoplay=1&mute=1&loop=1&controls=0&playlist=ynohbp_uV8A&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&disablekb=1"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{
              position: 'absolute',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '177.78vh',
              height: '56.25vw',
              minWidth: '100%',
              minHeight: '100%',
              border: 'none',
            }}
          />
        </div>

        <div className="r-hero-overlay" style={{
          position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
          background: 'linear-gradient(to bottom, rgba(2,3,5,0.15) 0%, rgba(2,3,5,0.10) 30%, rgba(2,3,5,0.55) 70%, rgba(2,3,5,0.85) 100%)',
        }} />

        <div style={{
          position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
          background: 'linear-gradient(to right, rgba(2,3,5,0.35) 0%, rgba(2,3,5,0.10) 35%, rgba(2,3,5,0.10) 65%, rgba(2,3,5,0.35) 100%)',
        }} />

        <div className="hero-grid" style={{
          ...S.container,
          position: 'relative', zIndex: 2,
          paddingTop: '80px', paddingBottom: '80px',
          display: 'grid',
          gridTemplateColumns: '65fr 35fr',
          gap: '80px',
          alignItems: 'flex-end',
          width: '100%',
        }}>

          <h1 style={{
            fontFamily: 'Roslindale, Georgia, serif',
            fontSize: 'clamp(36px, 9vw, 80px)',
            fontWeight: 400,
            lineHeight: 1.1,
            color: '#F0EFEB',
            margin: 0,
          }}>
            O acervo<br />
            da genialidade<br />
            artística brasileira.
          </h1>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '24px', paddingBottom: '6px' }}>
            <p style={{
              fontSize: '16px', lineHeight: 1.75,
              color: 'rgba(240,239,235,0.7)',
              fontFamily: 'Margem, Inter, sans-serif', fontWeight: 300,
              maxWidth: '360px', margin: 0,
            }}>
              Coleções cinematográficas com músicos, produtores e compositores que moldaram a cultura de uma geração — filmadas com profundidade, sem roteiro ensaiado.
            </p>
            <button className="r-hero-cta" onClick={() => window.dispatchEvent(new CustomEvent('pdv:open-checkout'))} style={{
              background: BLUE, color: BG,
              fontFamily: 'Margem, Inter, sans-serif', fontWeight: 500,
              fontSize: '15px', padding: '18px 32px',
              border: 'none', cursor: 'pointer', letterSpacing: '0.03em',
              transition: 'background 0.2s ease-in-out',
              minHeight: '52px',
            }}
              onMouseOver={e => e.currentTarget.style.background = '#6bbcd8'}
              onMouseOut={e => e.currentTarget.style.background = BLUE}>
              Começar Agora
            </button>
            <SocialProof />
          </div>

        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '160px', zIndex: 1, pointerEvents: 'none', background: `linear-gradient(to top, ${BG} 0%, transparent 100%)` }} />
      </section>

      {/* ── COLEÇÕES DISPONÍVEIS ─────────────────────────────── */}
      <section id="artistas" className="r-section" style={S.section}>
        <div className="r-container" style={S.container}>
          <div style={{ marginBottom: '64px' }}>
            <p style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: BLUE, marginBottom: '16px' }}>
              Disponível agora
            </p>
            <h2 style={{ fontFamily: EDITORIAL, fontSize: 'clamp(2.2rem, 8vw, 3rem)', color: OW, fontWeight: 400, lineHeight: 1.1 }}>
              As coleções
            </h2>
          </div>

          <div className="r-collections-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
            {collections.map((col) => {
              const stats = [
                { val: col.temporadas, label: col.temporadas === 1 ? 'temporada' : 'temporadas' },
                { val: col.episodios, label: 'episódios' },
                { val: col.duracao, label: 'de conteúdo' },
              ]
              return (
                <div
                  key={col.artist}
                  onClick={() => navigate(col.page)}
                  className="r-collection-card"
                  style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer', height: '70vh', borderRadius: '6px' }}
                  onMouseOver={e => e.currentTarget.querySelector('img').style.transform = 'scale(1.03)'}
                  onMouseOut={e => e.currentTarget.querySelector('img').style.transform = 'scale(1)'}
                >
                  <div className="r-card-img-wrap" style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <motion.img
                      layoutId={`artist-img-${col.page}`}
                      src={col.img}
                      alt={col.artist}
                      loading="lazy"
                      style={{
                        width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top',
                        display: 'block', transition: 'transform 0.6s ease',
                      }}
                      transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
                    />

                    <div className="r-card-overlay" style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(2,3,5,0.97) 0%, rgba(2,3,5,0.4) 55%, transparent 100%)',
                    }} />

                    <div className="badge-shimmer r-card-badge" style={{
                      position: 'absolute', top: '16px', right: '16px',
                      background: col.accent, color: BG,
                      fontSize: '9px', fontWeight: 700, letterSpacing: '0.12em',
                      textTransform: 'uppercase', padding: '5px 10px',
                      borderRadius: '2px',
                    }}>
                      Já disponível
                    </div>

                    <div className="r-card-content-desktop" style={{ position: 'absolute', inset: 0, padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                      <p style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: col.accent, marginBottom: '10px' }}>
                        A Coleção
                      </p>
                      <p style={{ fontFamily: EDITORIAL, fontSize: '1.6rem', fontWeight: 400, color: OW, marginBottom: '4px', lineHeight: 1.2 }}>
                        {col.artist}
                      </p>
                      <p style={{ fontFamily: EDITORIAL, fontSize: '0.95rem', fontWeight: 400, color: 'rgba(239,239,239,0.7)', marginBottom: '20px', lineHeight: 1.4 }}>
                        {col.title}
                      </p>
                      <div style={{ display: 'flex', gap: '24px', marginBottom: '28px', paddingTop: '16px', borderTop: '1px solid rgba(239,239,239,0.1)' }}>
                        {stats.map(s => (
                          <div key={s.label}>
                            <p style={{ fontFamily: EDITORIAL, fontSize: '1.4rem', fontWeight: 400, color: OW, lineHeight: 1 }}>{s.val}</p>
                            <p style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(239,239,239,0.35)', marginTop: '4px' }}>{s.label}</p>
                          </div>
                        ))}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: col.accent, letterSpacing: '0.06em' }}>
                          Ver coleção
                          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <button
                          onClick={e => { e.stopPropagation(); setTrailerUrl(col.trailer) }}
                          style={{
                            display: 'inline-flex', alignItems: 'center', gap: '6px',
                            background: 'rgba(239,239,239,0.12)', backdropFilter: 'blur(8px)',
                            border: '1px solid rgba(239,239,239,0.18)', color: OW,
                            fontSize: '11px', letterSpacing: '0.06em', padding: '7px 14px',
                            cursor: 'pointer', transition: 'background 0.2s ease-in-out',
                            fontFamily: 'Margem, Inter, sans-serif',
                          }}
                          onMouseOver={e => e.currentTarget.style.background = 'rgba(239,239,239,0.22)'}
                          onMouseOut={e => e.currentTarget.style.background = 'rgba(239,239,239,0.12)'}
                        >
                          <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                          Trailer
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="r-card-content-mobile" style={{ display: 'none', flexDirection: 'column', background: '#0a0a0c', padding: '24px 20px' }}>
                    <p style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: BLUE, marginBottom: '12px', fontFamily: 'Margem, Inter, sans-serif', fontWeight: 700 }}>
                      A Coleção
                    </p>
                    <p style={{ fontFamily: EDITORIAL, fontSize: 'clamp(28px, 8vw, 36px)', fontWeight: 400, color: OW, lineHeight: 1.05, letterSpacing: '-0.01em', marginBottom: '6px' }}>
                      {col.artist}
                    </p>
                    <p style={{ fontFamily: EDITORIAL, fontSize: '15px', fontWeight: 400, color: 'rgba(239,239,235,0.75)', lineHeight: 1.4, marginBottom: '0' }}>
                      {col.title}
                    </p>

                    <div style={{ height: '1px', background: 'rgba(240,239,235,0.1)', margin: '20px 0' }} />

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                      {stats.map((s, i) => (
                        <div key={s.label} style={{ textAlign: i === 0 ? 'left' : i === 1 ? 'center' : 'right' }}>
                          <p style={{ fontFamily: EDITORIAL, fontSize: 'clamp(20px, 5.5vw, 26px)', fontWeight: 400, color: OW, lineHeight: 1, whiteSpace: 'nowrap' }}>{s.val}</p>
                          <p style={{ fontSize: '9px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(239,239,235,0.5)', marginTop: '5px', lineHeight: 1.3, fontFamily: 'Margem, Inter, sans-serif', fontWeight: 700 }}>{s.label}</p>
                        </div>
                      ))}
                    </div>

                    <div style={{ height: '1px', background: 'rgba(240,239,235,0.1)', margin: '20px 0' }} />

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: OW, fontFamily: 'Margem, Inter, sans-serif', minHeight: '44px' }}>
                        Ver coleção
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <button
                        onClick={e => { e.stopPropagation(); setTrailerUrl(col.trailer) }}
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: '7px',
                          background: 'rgba(239,239,239,0.08)',
                          border: '1px solid rgba(239,239,239,0.15)', color: OW,
                          fontSize: '13px', padding: '10px 18px',
                          cursor: 'pointer', transition: 'background 0.2s ease-in-out',
                          fontFamily: 'Margem, Inter, sans-serif',
                          borderRadius: '999px', minHeight: '44px',
                        }}
                        onMouseOver={e => e.currentTarget.style.background = 'rgba(239,239,239,0.15)'}
                        onMouseOut={e => e.currentTarget.style.background = 'rgba(239,239,239,0.08)'}
                      >
                        <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                        Trailer
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <UpcomingArtists navigate={navigate} />

      <AboutSection />

      <CommunitySection />

      <PricingSection navigate={navigate} />
      <FaqSection />

      <Footer />

      {trailerUrl && (
        <div
          className="trailer-overlay"
          onClick={() => setTrailerUrl(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9000,
            background: 'rgba(2,3,5,0.92)', backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <button
            onClick={() => setTrailerUrl(null)}
            style={{
              position: 'absolute', top: '24px', right: '32px',
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'rgba(239,239,239,0.6)', fontSize: '28px', lineHeight: 1,
              transition: 'color 0.2s ease-in-out',
            }}
            onMouseOver={e => e.currentTarget.style.color = '#EFEFEF'}
            onMouseOut={e => e.currentTarget.style.color = 'rgba(239,239,239,0.6)'}
          >
            ✕
          </button>
          <div
            className="trailer-overlay-inner"
            onClick={e => e.stopPropagation()}
            style={{ width: 'min(90vw, 1100px)', aspectRatio: '16/9', position: 'relative' }}
          >
            <iframe
              src={trailerUrl}
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{ width: '100%', height: '100%', border: 'none', borderRadius: '4px' }}
            />
          </div>
        </div>
      )}
    </div>
  )
}
