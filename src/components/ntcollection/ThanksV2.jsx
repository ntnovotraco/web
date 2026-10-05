const logoWhite = '/images/pdv/logo-white.svg'
const glowSvg = '/images/pdv/Glow.svg'
const mockup = '/images/ntcollection/mockup-obrigado.webp'
const mockupMobile = '/images/ntcollection/mockup-obrigado-mobile.png'

function ShieldIcon() {
  return (
    <svg
      width="19" height="19" viewBox="0 0 24 24"
      fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

export default function ThanksV2() {
  return (
    <div className="thanks-v2">

      <div className="thanks-v2-main">
        <header className="thanks-header">
          <a href="/ntcollection" aria-label="NT Collection">
            <img src={logoWhite} alt="NT Collection" className="thanks-header-logo" />
          </a>
        </header>

        <div className="thanks-card">
          <img src={glowSvg} alt="" aria-hidden="true" className="thanks-card-glow" />

          <div className="thanks-card-content">
            <p className="thanks-eyebrow">Você está dentro. E foi o primeiro.</p>
            <h1 className="thanks-title">
              Sua assinatura da Founder&rsquo;s Edition está confirmada.
            </h1>
            <p className="thanks-p thanks-p-tight">
              Você vai receber um e-mail com seu acesso em até 5 minutos. Verifique sua caixa de entrada e, se necessário, a pasta de spam.
            </p>
            <p className="thanks-p">
              Já estão disponíveis as coleções do L7NNON e do Papatinho. As demais coleções da primeira temporada chegam progressivamente, com 2 novas por mês.
            </p>
          </div>

          <div className="thanks-phone">
            <picture>
              <source media="(max-width: 767px)" srcSet={mockupMobile} />
              <img
                src={mockup}
                alt=""
                aria-hidden="true"
                width="444"
                height="600"
                fetchpriority="high"
                decoding="async"
                className="thanks-phone-img"
              />
            </picture>
          </div>
        </div>

        <div className="thanks-quote">
          <p className="thanks-quote-text">
            Sempre existe uma versão que ainda não foi desenhada.
          </p>
          <p className="thanks-quote-author">Novo Traço</p>
        </div>
      </div>

      <footer className="thanks-footer">
        <div className="thanks-footer-inner">
          <p className="thanks-footer-help">
            <strong>Dúvidas sobre seu acesso?</strong>{' '}
            Entre em contato pelo email{' '}
            <a href="mailto:suporte@novotraco.com">suporte@novotraco.com</a>
          </p>
          <div className="thanks-footer-divider" />
          <div className="thanks-footer-bottom">
            <p className="thanks-footer-copy">
              © 2026 Novo Traço. Todos os direitos reservados.
            </p>
           {/*  <div className="thanks-footer-ssl">
              <ShieldIcon />
              <span>Certificado SSL</span>
            </div> */}
          </div>
        </div>
      </footer>

      <style>{`
        body.pdv .thanks-v2 {
          background: #020305;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        body.pdv .thanks-v2-main {
          flex: 1;
          padding: 60px 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 60px;
        }

        /* ── Header ────────────────────────────────────── */
        body.pdv .thanks-header {
          display: flex;
          justify-content: center;
        }
        body.pdv .thanks-header-logo {
          height: 48px;
          width: auto;
          display: block;
        }

        /* ── Card principal ────────────────────────────── */
        body.pdv .thanks-card {
          position: relative;
          width: 100%;
          max-width: 1072px;
          height: 607px;
          overflow: hidden;
          border-radius: 17px;
          background:
            linear-gradient(148.7deg, rgba(239,239,239,0.12) 6.85%, rgba(239,239,239,0.002) 78.77%),
            #020305;
          box-shadow: inset 0 0 10.56px rgba(255,255,255,0.12);
        }

        body.pdv .thanks-card-glow {
          position: absolute;
          top: 78%;
          left: 67%;
          width: 984px;
          height: auto;
          pointer-events: none;
          transform: translate(-50%, -50%);
          filter: blur(50px);
          opacity: 0.5;
          object-fit: cover;
          z-index: 0;
          user-select: none;
        }

        body.pdv .thanks-card-content {
          position: absolute;
          top: 50%;
          left: 49.53px;
          width: 486px;
          transform: translateY(-50%);
          z-index: 5;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 21px;
          text-align: center;
        }

        body.pdv .thanks-eyebrow {
          margin: 0;
          font-family: 'Margem', 'Inter', sans-serif;
          font-weight: 400;
          font-size: 16px;
          line-height: 1.45;
          color: #F96714;
        }
        body.pdv .thanks-title {
          margin: 0;
          font-family: 'Roslindale', Georgia, serif;
          font-weight: 400;
          font-size: 42px;
          line-height: 54px;
          color: #F0EFEB;
          text-wrap: balance;
        }
        body.pdv .thanks-p {
          margin: 0;
          max-width: 418px;
          font-family: 'Margem', 'Inter', sans-serif;
          font-weight: 400;
          font-size: 16px;
          line-height: 1.45;
          color: rgba(240,239,235,0.82);
        }
        body.pdv .thanks-p-tight { max-width: 366px; }

        /* ── Mockup do phone (imagem) ──────────────────── */
        body.pdv .thanks-phone {
          position: absolute;
          top: 58px;
          right: 52px;
          width: 444px;
          z-index: 2;
        }
        body.pdv .thanks-phone-img {
          width: 100%;
          height: auto;
          display: block;
          user-select: none;
          pointer-events: none;
        }

        /* ── Quote ─────────────────────────────────────── */
        body.pdv .thanks-quote {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          text-align: center;
        }
        body.pdv .thanks-quote-text {
          margin: 0;
          max-width: 418px;
          font-family: 'Roslindale', Georgia, serif;
          font-weight: 400;
          font-size: 32px;
          line-height: 1.27;
          color: #F0EFEB;
        }
        body.pdv .thanks-quote-author {
          margin: 0;
          font-family: 'Margem', 'Inter', sans-serif;
          font-size: 16px;
          line-height: 1.45;
          color: rgba(240,239,235,0.82);
        }

        /* ── Footer ────────────────────────────────────── */
        body.pdv .thanks-footer {
          border-top: 1px solid rgba(240,239,235,0.1);
          background: #020305;
          padding: 0 80px;
        }
        body.pdv .thanks-footer-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 60px 40px 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        body.pdv .thanks-footer-help {
          margin: 0;
          text-align: center;
          font-family: 'Margem', 'Inter', sans-serif;
          font-weight: 400;
          font-size: 13.3px;
          line-height: 22.4px;
          color: rgba(240,239,235,0.75);
        }
        body.pdv .thanks-footer-help strong {
          color: #F0EFEB;
          font-weight: 700;
        }
        body.pdv .thanks-footer-help a {
          color: inherit;
          text-decoration: none;
          transition: color 0.2s;
        }
        body.pdv .thanks-footer-help a:hover { color: #87CDE7; }
        body.pdv .thanks-footer-divider {
          height: 1px;
          background: rgba(240,239,235,0.1);
          width: 100%;
        }
        body.pdv .thanks-footer-bottom {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          width: 100%;
        }
        body.pdv .thanks-footer-copy {
          margin: 0;
          font-family: 'Margem', 'Inter', sans-serif;
          font-weight: 400;
          font-size: 12.1px;
          line-height: 19.5px;
          color: rgba(240,239,235,0.4);
        }
        body.pdv .thanks-footer-ssl {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 15px;
          border: 1px solid rgba(240,239,235,0.15);
          border-radius: 4px;
          color: rgba(240,239,235,0.5);
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          font-size: 11.6px;
          letter-spacing: 0.6px;
          line-height: 18px;
        }

        /* ── Tablet ────────────────────────────────────── */
        @media (max-width: 1023px) {
          body.pdv .thanks-v2-main { padding: 40px 32px; gap: 48px; }
          body.pdv .thanks-card {
            height: auto;
            min-height: 540px;
          }
          body.pdv .thanks-card-content {
            position: relative;
            transform: none;
            width: 100%;
            max-width: 486px;
            margin: 60px auto 0;
            padding: 0 32px;
            left: inherit;
            z-index: 1;
          }
          body.pdv .thanks-phone {
            position: static;
            margin: 40px auto 0;
            width: 320px;
          }
          body.pdv .thanks-footer { padding: 0 40px; }
          body.pdv .thanks-footer-inner { padding: 48px 0 32px; }
        }

        /* ── Mobile ────────────────────────────────────── */
        @media (max-width: 767px) {
          body.pdv .thanks-v2-main { padding: 32px 20px; gap: 32px; }
          body.pdv .thanks-header-logo { height: 40px; }
          body.pdv .thanks-card {
            border-radius: 14px;
            min-height: auto;
            padding-left: 20px;
            padding-right: 20px;
          }
          body.pdv .thanks-card-content {
            margin-top: 40px;
            padding: 0px;
            gap: 16px;
          }
          body.pdv .thanks-eyebrow { font-size: 14px; }
          body.pdv .thanks-title { font-size: 30px; line-height: 1.15; }
          body.pdv .thanks-p { font-size: 14px; }
          body.pdv .thanks-card-glow {
                    width: 700px;
                    left: 50%;
                    top: 70%;
                    filter: blur(50px);
                    opacity: 0.6;
          }
          body.pdv .thanks-quote-text { font-size: 26px; }

          /* Mobile usa imagem própria (mockup-obrigado-mobile.png) */
          body.pdv .thanks-phone {
            margin: 24px auto 0;
            width: 100%;
            max-width: 280px;
            height: auto;
            overflow: visible;
            position: relative;
            z-index: 1;
            top: inherit;
            right: inherit;
          }

          body.pdv .thanks-footer { padding: 0 20px; }
          body.pdv .thanks-footer-inner {
            padding: 40px 0 32px;
            padding-bottom: max(32px, env(safe-area-inset-bottom));
            align-items: flex-start;
          }
          body.pdv .thanks-footer-help { 
            text-align: center;
            max-width: 300px;
            margin: 0 auto;

          }
          body.pdv .thanks-footer-bottom {
            flex-direction: column;
            align-items: center;
            gap: 16px;
          }
        }
      `}</style>
    </div>
  )
}
