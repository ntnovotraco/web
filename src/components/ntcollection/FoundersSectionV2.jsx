const glowSvg = '/images/pdv/Glow.svg'
const logoWhite = '/images/pdv/logo-white.svg'

// Vídeo do mockup: autoplay mudo em loop.
const PHONE_VIDEO_ID = 'xSvT1od4YxM'

const FOUNDER_EPISODES = [
  { num: 1, title: 'De Onde Vêm Suas Palavras', duration: '15:20', state: 'unplayed' },
  { num: 2, title: 'A Queda é Parte da Manobra', duration: '12:34', state: 'active' },
  { num: 3, title: 'O Preço de Ser Real', duration: '15:20', state: 'unplayed' },
  { num: 4, title: 'Escreva Antes de Viver', duration: '18:45', state: 'unplayed' },
]

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

function ChevronDown() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

function ChevronUp() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="18 15 12 9 6 15" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="4" y1="7"  x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  )
}

function PhoneMockup() {
  return (
    <div className="ntcollection-phone">
      <div className="ntcollection-phone-frame">
        <div className="ntcollection-phone-screen">

          <div className="ntcollection-phone-statusbar">
            <span className="ntcollection-phone-time">9:41</span>
            <span className="ntcollection-phone-island" />
            <span className="ntcollection-phone-indicators">
              <svg className="ntcollection-phone-ind-signal" viewBox="0 0 18 12" fill="currentColor" aria-hidden="true">
                <rect x="0"  y="8" width="3" height="4" rx="0.5" />
                <rect x="5"  y="6" width="3" height="6" rx="0.5" />
                <rect x="10" y="3" width="3" height="9" rx="0.5" />
                <rect x="15" y="0" width="3" height="12" rx="0.5" />
              </svg>
              <svg className="ntcollection-phone-ind-wifi" viewBox="0 0 16 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
                <path d="M1 4C3 2 5 1 8 1s5 1 7 3" />
                <path d="M3 7C4.5 5.5 6 5 8 5s3.5 0.5 5 2" />
                <path d="M5 10C6 9 7 8.5 8 8.5s2 0.5 3 1.5" />
              </svg>
              <span className="ntcollection-phone-ind-battery" aria-hidden="true">
                <span className="ntcollection-phone-ind-battery-fill" />
              </span>
            </span>
          </div>

          <div className="ntcollection-phone-navbar">
            <img src={logoWhite} alt="" className="ntcollection-phone-logo" />
            <button type="button" className="ntcollection-phone-menu" aria-label="Menu">
              <MenuIcon />
            </button>
          </div>

          <div className="ntcollection-phone-video">
            <iframe
              className="ntcollection-phone-video-iframe"
              src={`https://www.youtube-nocookie.com/embed/${PHONE_VIDEO_ID}?autoplay=1&mute=1&loop=1&controls=0&playlist=${PHONE_VIDEO_ID}&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&disablekb=1`}
              title=""
              allow="autoplay; encrypted-media"
              loading="lazy"
              tabIndex={-1}
              aria-hidden="true"
            />
            <div className="ntcollection-phone-video-progress">
              <div className="ntcollection-phone-video-progress-fill" />
            </div>
          </div>

          <div className="ntcollection-phone-content">
            <span className="ntcollection-phone-season">Temporada 1</span>
            <h3 className="ntcollection-phone-title">A Queda é Parte da Manobra</h3>
            <p className="ntcollection-phone-desc">
              Neste episódio, L7NNON transforma a filosofia do skate numa lição que atravessa qualquer área da vida: persistência não é aguentar a dor, é decidir, toda vez que você cai, que aquilo não é o fim da manobra.
            </p>
            <span className="ntcollection-phone-duration">12:34 min</span>
          </div>

          <div className="ntcollection-phone-episodes">
            <h4 className="ntcollection-phone-episodes-title">Todos os episódios</h4>

            <div className="ntcollection-phone-season-card">
              <div className="ntcollection-phone-season-head">
                <span>Temporada 1</span>
                <ChevronUp />
              </div>
              {FOUNDER_EPISODES.map(ep => (
                <div
                  key={ep.num}
                  className={`ntcollection-phone-ep ntcollection-phone-ep-${ep.state}`}
                >
                  <span className="ntcollection-phone-ep-icon"><PlayIcon /></span>
                  <span className="ntcollection-phone-ep-title">{ep.title}</span>
                  <span className="ntcollection-phone-ep-dur">{ep.duration}</span>
                </div>
              ))}
            </div>

            <div className="ntcollection-phone-season-card ntcollection-phone-module-collapsed">
              <div className="ntcollection-phone-season-head">
                <span>Módulo 2: Prática Avançada</span>
                <ChevronDown />
              </div>
            </div>
          </div>

          <div className="ntcollection-phone-foot">
            <button className="ntcollection-phone-foot-btn ntcollection-phone-foot-btn-prev">Anterior</button>
            <button className="ntcollection-phone-foot-btn ntcollection-phone-foot-btn-next">Próxima Aula</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default function FoundersSectionV2() {
  const scrollToPricing = () => {
    const el = document.getElementById('planos')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="ntcollection-founders">
      <img src={glowSvg} alt="" aria-hidden="true" className="ntcollection-founders-glow" />

      <div className="ntcollection-founders-header">
        <div className="ntcollection-founders-pill">FOUNDERS EDITION</div>
        <h2 className="ntcollection-founders-title">
          Entre para o NT Collection hoje e seja um membro fundador.
        </h2>
        <button
          type="button"
          className="ntcollection-founders-cta"
          onClick={scrollToPricing}
        >
          SER UM MEMBRO FUNDADOR
        </button>
      </div>

      <PhoneMockup />

      <style>{`
        body.pdv .ntcollection-founders {
          position: relative;
          background: #020305;
          padding: 84px 40px 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
        }

        body.pdv .ntcollection-founders-glow {
          position: absolute;
          top: 80%;
          left: 50%;
          width: 800px;
          height: auto;
          pointer-events: none;
          transform: translate(-50%, -50%);
          filter: blur(80px);
          opacity: 0.5;
          object-fit: cover;
          z-index: 0;
          user-select: none;
        }

        /* ── Header ─────────────────────────────────────── */
        body.pdv .ntcollection-founders-header {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 26px;
          text-align: center;
        }
        body.pdv .ntcollection-founders-pill {
          display: inline-flex;
          align-items: center;
          padding: 6px 14px;
          border: 1px solid rgba(249,103,20,0.36);
          border-radius: 75px;
          color: #F96714;
          font-family: 'Margem', 'Inter', sans-serif;
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 1px;
          text-transform: uppercase;
          line-height: 15px;
        }
        body.pdv .ntcollection-founders-title {
          margin: 0;
          max-width: 464px;
          font-family: 'Roslindale', Georgia, serif;
          font-weight: 400;
          font-size: 36px;
          line-height: 1.3;
          color: #EFEFEF;
          text-wrap: balance;
        }
        body.pdv .ntcollection-founders-cta {
          padding: 24px 40px;
          background: #87CDE7;
          color: #020305;
          font-family: 'Margem', 'Inter', sans-serif;
          font-weight: 700;
          font-size: 18px;
          letter-spacing: 0.52px;
          line-height: 19.5px;
          text-transform: uppercase;
          border: none;
          border-radius: 14px;
          cursor: pointer;
          box-shadow: inset 3px 3px 4px 0 rgba(255,255,255,0.25);
          transition: background 0.2s ease-in-out, transform 0.1s ease;
        }
        body.pdv .ntcollection-founders-cta:hover { background: #6BBCD8; }
        body.pdv .ntcollection-founders-cta:active { transform: scale(0.98); }

        /* ── Phone wrapper ──────────────────────────────── */
        body.pdv .ntcollection-phone {
          position: relative;
          z-index: 2;
          width: 350px;
          margin-top: 16px;
          /* recorta o bottom do phone (fica com aspecto de "subindo") */
          height: 620px;
          overflow: hidden;
          display: flex;
          justify-content: center;
          margin-bottom: -150px;
          border-radius: 50px;
          filter: drop-shadow(0 8px 8px rgba(0, 0, 0, 0.8));
        }
        body.pdv .ntcollection-phone-frame {
          position: relative;
          width: 350px;
          aspect-ratio: 350 / 712;
          background: #050505;
          border-radius: 50px;
          padding: 6px;
        }
        body.pdv .ntcollection-phone-screen {
          width: 100%;
          height: 100%;
          border-radius: 44px;
          background: #09090B;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          font-family: 'Inter', 'Margem', sans-serif;
          color: #F4F4F5;
          position: relative;
        }

        /* ── Status bar ─────────────────────────────────── */
        body.pdv .ntcollection-phone-statusbar {
          height: 44px;
          background: #0D0D0D;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          padding: 0 22px;
          flex-shrink: 0;
          position: relative;
        }
        body.pdv .ntcollection-phone-time {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 13px;
          color: #FFF;
          letter-spacing: -0.32px;
          text-align: left;
        }
        body.pdv .ntcollection-phone-island {
          display: block;
          width: 104px;
          height: 28px;
          background: #000;
          border-radius: 100px;
          justify-self: center;
        }
        body.pdv .ntcollection-phone-indicators {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          justify-self: end;
          color: #FFF;
        }
        body.pdv .ntcollection-phone-ind-signal { width: 14px; height: 10px; }
        body.pdv .ntcollection-phone-ind-wifi   { width: 14px; height: 10px; }
        body.pdv .ntcollection-phone-ind-battery {
          position: relative;
          display: inline-block;
          width: 22px;
          height: 10px;
          border: 1px solid rgba(255,255,255,0.6);
          border-radius: 3px;
          padding: 1px;
        }
        body.pdv .ntcollection-phone-ind-battery::after {
          content: '';
          position: absolute;
          right: -3px;
          top: 3px;
          width: 1.5px;
          height: 4px;
          background: rgba(255,255,255,0.6);
          border-radius: 1px;
        }
        body.pdv .ntcollection-phone-ind-battery-fill {
          display: block;
          width: 100%;
          height: 100%;
          background: #FFF;
          border-radius: 1px;
        }

        /* ── Top navbar ─────────────────────────────────── */
        body.pdv .ntcollection-phone-navbar {
          height: 48px;
          background: #0D0D0D;
          border-bottom: 0.8px solid #27272A;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 13px;
          flex-shrink: 0;
        }
        body.pdv .ntcollection-phone-logo {
          height: 26px;
          width: auto;
          display: block;
        }
        body.pdv .ntcollection-phone-menu {
          width: 29px;
          height: 29px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          color: #F4F4F5;
          padding: 0;
          cursor: default;
        }
        body.pdv .ntcollection-phone-menu svg { width: 18px; height: 18px; display: block; }

        /* ── Video ──────────────────────────────────────── */
        body.pdv .ntcollection-phone-video {
          position: relative;
          background: #020305;
          aspect-ratio: 16/9;
          width: 100%;
          flex-shrink: 0;
          overflow: hidden;
        }
        body.pdv .ntcollection-phone-video-iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: none;
          display: block;
          pointer-events: none;
        }
        body.pdv .ntcollection-phone-video-progress {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: #27272A;
          z-index: 1;
        }
        body.pdv .ntcollection-phone-video-progress-fill {
          width: 35%;
          height: 100%;
          background: #87CDE7;
        }

        /* ── Content ────────────────────────────────────── */
        body.pdv .ntcollection-phone-content {
          padding: 18px 13px 13px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex-shrink: 0;
        }
        body.pdv .ntcollection-phone-season {
          font-family: 'Margem', 'Inter', sans-serif;
          font-size: 11.6px;
          color: #87CDE7;
          letter-spacing: -0.15px;
          line-height: 16.6px;
        }
        body.pdv .ntcollection-phone-title {
          margin: 0;
          font-family: 'Margem', 'Inter', sans-serif;
          font-weight: 700;
          font-size: 17.6px;
          line-height: 23.5px;
          color: #F4F4F5;
          letter-spacing: 0.06px;
        }
        body.pdv .ntcollection-phone-desc {
          margin: 0;
          font-family: 'Margem', 'Inter', sans-serif;
          font-size: 11.6px;
          line-height: 17.4px;
          color: #9F9FA9;
          letter-spacing: -0.15px;
        }
        body.pdv .ntcollection-phone-duration {
          font-family: 'Margem', 'Inter', sans-serif;
          font-size: 11.6px;
          color: #9F9FA9;
          line-height: 16.6px;
        }

        /* ── Episodes section ───────────────────────────── */
        body.pdv .ntcollection-phone-episodes {
          padding: 0 13px 13px;
          display: flex;
          flex-direction: column;
          gap: 7px;
          flex-shrink: 0;
        }
        body.pdv .ntcollection-phone-episodes-title {
          margin: 0 0 6px;
          font-family: 'Margem', 'Inter', sans-serif;
          font-weight: 700;
          font-size: 15px;
          line-height: 22.4px;
          color: #F4F4F5;
          letter-spacing: -0.44px;
        }
        body.pdv .ntcollection-phone-season-card {
          background: #18181B;
          border: 0.8px solid #27272A;
          border-radius: 8px;
          overflow: hidden;
        }
        body.pdv .ntcollection-phone-season-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 13px;
          color: #F4F4F5;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 11.6px;
          letter-spacing: -0.15px;
        }
        body.pdv .ntcollection-phone-season-head svg {
          width: 16px; height: 16px;
          color: #F4F4F5;
        }
        body.pdv .ntcollection-phone-season-card .ntcollection-phone-ep + .ntcollection-phone-ep {
          border-top: 0.8px solid #27272A;
        }
        body.pdv .ntcollection-phone-season-card .ntcollection-phone-ep:first-of-type {
          border-top: 0.8px solid #27272A;
        }
        body.pdv .ntcollection-phone-ep {
          display: grid;
          grid-template-columns: 16px 1fr auto;
          column-gap: 10px;
          align-items: center;
          padding: 10px 13px;
          color: #D4D4D8;
          font-family: 'Inter', sans-serif;
          font-size: 11.6px;
          line-height: 16.6px;
          letter-spacing: -0.15px;
        }
        body.pdv .ntcollection-phone-ep-icon svg {
          width: 16px; height: 16px; display: block;
          color: #52525C;
        }
        body.pdv .ntcollection-phone-ep-unplayed .ntcollection-phone-ep-icon svg { color: #52525C; }
        body.pdv .ntcollection-phone-ep-active {
          background: rgba(135,205,231,0.1);
        }
        body.pdv .ntcollection-phone-ep-active .ntcollection-phone-ep-title { color: #87CDE7; font-weight: 500; }
        body.pdv .ntcollection-phone-ep-active .ntcollection-phone-ep-icon svg { color: #87CDE7; }
        body.pdv .ntcollection-phone-ep-dur {
          font-size: 10px;
          color: #71717B;
        }

        body.pdv .ntcollection-phone-module-collapsed .ntcollection-phone-season-head { padding: 10px 13px; }

        /* ── Footer ─────────────────────────────────────── */
        body.pdv .ntcollection-phone-foot {
          margin-top: auto;
          padding: 14px 13px;
          background: #18181B;
          border-top: 0.8px solid #27272A;
          display: flex;
          gap: 10px;
          flex-shrink: 0;
        }
        body.pdv .ntcollection-phone-foot-btn {
          flex: 1;
          height: 37px;
          border: none;
          border-radius: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 11.6px;
          font-weight: 500;
          cursor: default;
          letter-spacing: -0.15px;
        }
        body.pdv .ntcollection-phone-foot-btn-prev { background: #27272A; color: #F4F4F5; }
        body.pdv .ntcollection-phone-foot-btn-next { background: #87CDE7; color: #F4F4F5; }

        /* ── Tablet ─────────────────────────────────────── */
        @media (max-width: 900px) {
          body.pdv .ntcollection-founders { padding: 72px 32px 0; }
          body.pdv .ntcollection-founders-title { font-size: 32px; }
          body.pdv .ntcollection-founders-glow {
            width: 680px;
            filter: blur(50px);
          }
        }

        /* ── Mobile ─────────────────────────────────────── */
        @media (max-width: 767px) {
          body.pdv .ntcollection-founders {
            padding: 59px 20px 0;
            gap: 32px;
          }
          body.pdv .ntcollection-founders-title { font-size: 32px; }
          body.pdv .ntcollection-founders-cta {
            padding: 20px 32px;
            font-size: 16px;
            width: 100%;
            max-width: 360px;
          }
          body.pdv .ntcollection-founders-glow {
            width: 680px;
            opacity: 0.6;
            top: 62%;
            filter: blur(70px);
          }
          body.pdv .ntcollection-phone {
            width: 307px;
            height: 540px;
            margin-bottom: -40px;
            
          }
          body.pdv .ntcollection-phone-frame {
            width: 307px;
            border-radius: 44px;
            padding: 5px;
          }
          body.pdv .ntcollection-phone-screen {
            border-radius: 40px;
          }
          body.pdv .ntcollection-phone-title { font-size: 15.5px; line-height: 20.6px; }
          body.pdv .ntcollection-phone-desc { font-size: 10.2px; line-height: 15.3px; }
          body.pdv .ntcollection-phone-season { font-size: 10.2px; }
          body.pdv .ntcollection-phone-duration { font-size: 10.2px; }
          body.pdv .ntcollection-phone-episodes-title { font-size: 13px; }
          body.pdv .ntcollection-phone-ep { font-size: 10.2px; padding: 8px 12px; }
          body.pdv .ntcollection-phone-season-head { font-size: 10.2px; padding: 8px 12px; }
          body.pdv .ntcollection-phone-foot-btn { font-size: 10.2px; height: 32px; }
        }

        @media (max-width: 374px) {
          body.pdv .ntcollection-founders { padding: 48px 16px 0; }
          body.pdv .ntcollection-founders-title { font-size: 28px; }
        }
      `}</style>
    </section>
  )
}
