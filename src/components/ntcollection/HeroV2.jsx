const photosLeft = [
  '/images/ntcollection/carrossel/Pedrinho.webp',
  '/images/ntcollection/carrossel/Rincon.webp',
  '/images/ntcollection/carrossel/Papatinho.webp',
  '/images/ntcollection/carrossel/L7.webp',
  '/images/ntcollection/carrossel/Jean.webp',
  '/images/ntcollection/carrossel/Dora.webp',
]

const photosRight = [
  '/images/ntcollection/carrossel/Hamilton.webp',
  '/images/ntcollection/carrossel/tasha-tracie.webp',
  '/images/ntcollection/carrossel/zeca-baleiro.png',
  '/images/ntcollection/carrossel/duck-jay.webp',
  '/images/ntcollection/carrossel/Kayk.webp',
  '/images/ntcollection/carrossel/Froid.webp',
]

const BG = '#020305'
const OW = '#F0EFEB'
const BLUE = '#87CDE7'

function MosaicColumn({ photos, variant }) {
  const list = [...photos, ...photos]
  return (
    <div className={`ntcollection-mosaic-col ntcollection-mosaic-col-${variant}`}>
      {list.map((src, i) => (
        <img
          key={`${src}-${i}`}
          src={src}
          alt=""
          width="240"
          height="340"
          loading={i < 2 ? 'eager' : 'lazy'}
          fetchpriority={i === 0 ? 'high' : 'auto'}
          decoding="async"
          className="ntcollection-mosaic-photo"
        />
      ))}
    </div>
  )
}

export default function HeroV2({ bannerHeight = 44 }) {
  const scrollToPricing = () => {
    const el = document.getElementById('planos')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const scrollNext = () => {
    const video = document.getElementById('video')
    const target = video || document.querySelector('.ntcollection-hero')?.nextElementSibling
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
    }
    if (video) {
      window.dispatchEvent(new CustomEvent('ntcollection:play-video'))
    }
  }

  const NAV_H = 78
  const topPad = bannerHeight + NAV_H

  return (
    <section
      className="ntcollection-hero"
      style={{
        position: 'relative',
        background: BG,
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        paddingTop: `${topPad}px`,
        paddingBottom: '40px',
        transition: 'padding-top 0.28s ease',
      }}
    >
      <div className="ntcollection-hero-grid">

        {/* ── Conteúdo (texto + CTAs) ─────────────────────────── */}
        <div className="ntcollection-hero-content">
          <div className="ntcollection-hero-text">
            <h1 className="ntcollection-hero-title">
              O acervo<br />
              da genialidade<br />
              artística brasileira.
            </h1>
            <p className="ntcollection-hero-desc">
              Coleções cinematográficas com músicos, produtores e compositores que moldaram a cultura de uma geração filmadas com profundidade, sem roteiro ensaiado.
            </p>
          </div>

          <div className="ntcollection-hero-ctas">
            <button
              type="button"
              className="ntcollection-cta ntcollection-cta-primary"
              onClick={scrollToPricing}
            >
              Garantir meu acesso
            </button>
            <button
              type="button"
              className="ntcollection-cta ntcollection-cta-secondary"
              onClick={scrollNext}
              aria-label="Assistir vídeo"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                <path d="M16.1731 8.24371C17.459 9.02199 17.459 10.8874 16.1731 11.6657L3.03561 19.6174C1.7027 20.4241 8.29867e-08 19.4644 1.4795e-07 17.9064L8.11048e-07 2.00305C8.76011e-07 0.445012 1.7027 -0.514705 3.03561 0.292052L16.1731 8.24371Z" fill="#EFEFEF"/>
              </svg>
              Assistir vídeo
            </button>
          </div>
        </div>

        {/* ── Mosaico ──────────────────────────────────────────── */}
        <div className="ntcollection-hero-mosaic" aria-hidden="true">
          <MosaicColumn photos={photosLeft} variant="a" />
          <MosaicColumn photos={photosRight} variant="b" />
        </div>

      </div>

      <style>{`
        body.pdv .ntcollection-hero-grid {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: minmax(0, 486px) minmax(0, 1fr);
          column-gap: 80px;
          align-items: center;
        }

        body.pdv .ntcollection-hero-content {
          display: flex;
          flex-direction: column;
          gap: 51px;
          max-width: 486px;
        }

        body.pdv .ntcollection-hero-text {
          display: flex;
          flex-direction: column;
          gap: 21px;
        }

        body.pdv .ntcollection-hero-title {
          margin: 0;
          color: ${OW};
          font-family: 'Roslindale', Georgia, serif;
          font-weight: 400;
          font-size: clamp(42px, 5.2vw, 60px);
          line-height: 1.14;
          letter-spacing: -0.005em;
        }

        body.pdv .ntcollection-hero-desc {
          margin: 0;
          color: rgba(240,239,235,0.82);
          font-family: 'Margem', 'Inter', sans-serif;
          font-weight: 400;
          font-size: 16px;
          line-height: 1.45;
        }

        body.pdv .ntcollection-hero-ctas {
          display: flex;
          gap: 16px;
          align-items: stretch;
        }

        body.pdv .ntcollection-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-family: 'Margem', 'Inter', sans-serif;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          line-height: 19.5px;
          border-radius: 14px;
          cursor: pointer;
          transition: background 0.2s ease-in-out, transform 0.12s ease;
          white-space: nowrap;
        }

        body.pdv .ntcollection-cta-primary {
          background: ${BLUE};
          color: ${BG};
          border: none;
          padding: 20px 24px;
          box-shadow: inset 3px 3px 4px 0 rgba(255,255,255,0.25);
        }
        body.pdv .ntcollection-cta-primary:hover { background: #6BBCD8; }

        body.pdv .ntcollection-cta-secondary {
          color: #FFFFFF;
          padding: 15px 24px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.27);
          background: linear-gradient(133deg, rgba(239, 239, 239, 0.12) 6.86%, rgba(239, 239, 239, 0.00) 78.77%);
          box-shadow: 0 0 10.56px 0 rgba(255, 255, 255, 0.12) inset, 3px 3px 4px 0 rgba(255, 255, 255, 0.25) inset;
        }
        body.pdv .ntcollection-cta-secondary:hover {
          background: linear-gradient(163deg, rgba(239,239,239,0.22) 7%, rgba(239,239,239,0.03) 79%);
        }
        body.pdv .ntcollection-cta-secondary svg {
          width: 17px; height: 21px; flex-shrink: 0;
        }

        body.pdv .ntcollection-hero-mosaic {
          display: flex;
          gap: 24px;
          justify-content: center;
          align-items: flex-start;
          height: min(780px, calc(100vh - 60px));
          overflow: hidden;
          mask-image: linear-gradient(to bottom, transparent 0%, #000 14%, #000 86%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, #000 14%, #000 86%, transparent 100%);
        }

        body.pdv .ntcollection-mosaic-col {
          display: flex;
          flex-direction: column;
          gap: 14px;
          animation: ntcollection-drift-a 72s linear infinite;
          will-change: transform;
        }

        body.pdv .ntcollection-mosaic-col-b {
          animation-name: ntcollection-drift-b;
          animation-duration: 96s;
          margin-top: -170px;
        }

        body.pdv .ntcollection-mosaic-photo {
          width: 240px;
          height: 340px;
          object-fit: cover;
          object-position: center 15%;
          border-radius: 14px;
          flex-shrink: 0;
          display: block;
        }

        @keyframes ntcollection-drift-a {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(0, -50%, 0); }
        }
        @keyframes ntcollection-drift-b {
          from { transform: translate3d(0, -50%, 0); }
          to   { transform: translate3d(0, 0, 0); }
        }

        @media (prefers-reduced-motion: reduce) {
          body.pdv .ntcollection-mosaic-col { animation: none !important; }
        }

        /* ── Tablet ──────────────────────────────────────── */
        @media (max-width: 1120px) {
          body.pdv .ntcollection-hero-grid {
            column-gap: 48px;
            padding: 0 32px;
          }
          body.pdv .ntcollection-mosaic-photo {
            width: 200px; height: 284px;
          }
          body.pdv .ntcollection-mosaic-col-b { margin-top: -140px; }
        }

        /* ── Mobile ──────────────────────────────────────── */
        @media (max-width: 900px) {
          body.pdv .ntcollection-hero {
            align-items: flex-start;
          }
          body.pdv .ntcollection-hero-grid {
            grid-template-columns: 1fr;
            column-gap: 0;
            row-gap: 32px;
            padding: 0 32px;
            padding-top: 20px;
          }
          body.pdv .ntcollection-hero-content {
            gap: 32px;
            max-width: 100%;
          }
          body.pdv .ntcollection-hero-text { gap: 20px; }
          body.pdv .ntcollection-hero-title {
            font-size: clamp(32px, 9vw, 42px);
            line-height: 1.2;
          }
          body.pdv .ntcollection-hero-ctas {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
            width: 100%;
          }
          body.pdv .ntcollection-cta { width: auto; align-self: flex-start; }
          body.pdv .ntcollection-cta-primary  { padding: 16px 24px; height: 53px; }
          body.pdv .ntcollection-cta-secondary { padding: 15px 24px; }

          body.pdv .ntcollection-hero-mosaic {
            gap: 14px;
            height: 500px;
            mask-image: linear-gradient(to bottom, transparent 0%, #000 10%, #000 86%, transparent 100%);
            -webkit-mask-image: linear-gradient(to bottom, transparent 0%, #000 10%, #000 86%, transparent 100%);
          }
          body.pdv .ntcollection-mosaic-col { gap: 8px; }
          body.pdv .ntcollection-mosaic-col-b { margin-top: -100px; }
          body.pdv .ntcollection-mosaic-photo {
            width: 150px; height: 203px;
            border-radius: 8.36px;
          }
        }

        @media (max-width: 374px) {
          body.pdv .ntcollection-hero-grid { padding: 20px 20px 0px 20px; }
          body.pdv .ntcollection-mosaic-photo { width: 134px; height: 182px; }
          body.pdv .ntcollection-mosaic-col-b { margin-top: -90px; }
        }
      `}</style>
    </section>
  )
}
