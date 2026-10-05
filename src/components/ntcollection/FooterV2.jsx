const logoWhite = '/images/pdv/logo-white.svg'

const NAV_LINKS = [
  { label: 'As coleções',           target: 'artistas' },
  { label: 'Planos',                target: 'planos' },
  { label: 'Perguntas frequentes',  target: 'faq' },
  { label: 'Política de Privacidade', event: 'pdv:open-privacy' },
  { label: 'Termos de Uso',          event: 'pdv:open-terms' },
]

const SOCIALS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/novo.traco/',
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@novotraco7195',
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/novotraco',
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  // {
  //   label: 'TikTok',
  //   href: 'https://www.tiktok.com/@novo_traco',
  //   icon: (
  //     <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
  //       <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.95a8.16 8.16 0 0 0 4.77 1.52V7.01a4.85 4.85 0 0 1-1-.32z" />
  //     </svg>
  //   ),
  // },
]

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

export default function FooterV2() {
  const handleNavClick = (item, e) => {
    if (item.event) {
      e.preventDefault()
      window.dispatchEvent(new CustomEvent(item.event))
      return
    }
    if (item.target) {
      e.preventDefault()
      const el = document.getElementById(item.target)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      else window.location.hash = item.target
    }
  }

  return (
    <footer className="ntcollection-footer">
      <div className="ntcollection-footer-inner">

        <div className="ntcollection-footer-grid">
          {/* ── Coluna 1: Logo + tagline ──────────────── */}
          <div className="ntcollection-footer-col">
            <img src={logoWhite} alt="NT Collection" className="ntcollection-footer-logo" />
            <p className="ntcollection-footer-tagline">
              O acervo da genialidade artística brasileira.<br />
              Uma iniciativa Novo Traço.
            </p>
          </div>

          {/* ── Coluna 2: Navegação ───────────────────── */}
          <div className="ntcollection-footer-col">
            <p className="ntcollection-footer-label">Navegação</p>
            <ul className="ntcollection-footer-links">
              {NAV_LINKS.map(item => (
                <li key={item.label}>
                  <a
                    href={item.target ? `#${item.target}` : '#'}
                    onClick={e => handleNavClick(item, e)}
                    className="ntcollection-footer-link"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Coluna 3: Social ──────────────────────── */}
          <div className="ntcollection-footer-col ntcollection-footer-col-social">
            <p className="ntcollection-footer-label">Siga</p>
            <div className="ntcollection-footer-socials">
              {SOCIALS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="ntcollection-footer-social"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="ntcollection-footer-divider" />

        <div className="ntcollection-footer-bottom">
          <p className="ntcollection-footer-copyright">
            © 2026 Novo Traço. Todos os direitos reservados.
          </p>
          <div className="ntcollection-footer-ssl">
            <ShieldIcon />
            <span>Certificado SSL</span>
          </div>
        </div>

      </div>

      <style>{`
        body.pdv .ntcollection-footer {
          background: #020305;
          border-top: 1px solid rgba(240,239,235,0.1);
          padding: 0 80px;
        }

        body.pdv .ntcollection-footer-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 60px 40px 32px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        body.pdv .ntcollection-footer-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 64px;
          padding-bottom: 40px;
        }

        body.pdv .ntcollection-footer-col {
          display: flex;
          flex-direction: column;
          gap: 24px;
          align-items: flex-start;
        }
        body.pdv .ntcollection-footer-col:first-child { gap: 31px; }
        body.pdv .ntcollection-footer-col-social { align-items: flex-end; }

        body.pdv .ntcollection-footer-logo {
          height: 36px;
          width: auto;
          display: block;
        }
        body.pdv .ntcollection-footer-tagline {
          margin: 0;
          max-width: 260px;
          font-family: 'Margem', 'Inter', sans-serif;
          font-weight: 400;
          font-size: 13.3px;
          line-height: 22.4px;
          color: rgba(240,239,235,0.6);
        }

        body.pdv .ntcollection-footer-label {
          margin: 0;
          font-family: 'Margem', 'Inter', sans-serif;
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 1.8px;
          line-height: 18px;
          text-transform: uppercase;
          color: rgba(240,239,235,0.4);
        }

        body.pdv .ntcollection-footer-links {
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 100%;
        }
        body.pdv .ntcollection-footer-link {
          font-family: 'Margem', 'Inter', sans-serif;
          font-weight: 400;
          font-size: 14px;
          line-height: 22.5px;
          color: rgba(240,239,235,0.75);
          text-decoration: none;
          cursor: pointer;
          transition: color 0.2s ease-in-out;
        }
        body.pdv .ntcollection-footer-link:hover { color: #87CDE7; }

        body.pdv .ntcollection-footer-socials {
          display: flex;
          gap: 12px;
        }
        body.pdv .ntcollection-footer-social {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(240,239,235,0.15);
          border-radius: 4px;
          color: rgba(240,239,235,0.7);
          background: transparent;
          text-decoration: none;
          transition: color 0.2s, border-color 0.2s, background 0.2s;
        }
        body.pdv .ntcollection-footer-social:hover {
          color: #EFEFEF;
          border-color: #87CDE7;
          background: rgba(135,205,231,0.08);
        }

        body.pdv .ntcollection-footer-divider {
          height: 1px;
          background: rgba(240,239,235,0.1);
        }

        body.pdv .ntcollection-footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        body.pdv .ntcollection-footer-copyright {
          margin: 0;
          font-family: 'Margem', 'Inter', sans-serif;
          font-weight: 400;
          font-size: 12px;
          line-height: 19.5px;
          color: rgba(240,239,235,0.4);
        }
        body.pdv .ntcollection-footer-ssl {
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
          body.pdv .ntcollection-footer { padding: 0 40px; }
          body.pdv .ntcollection-footer-inner { padding: 48px 0 32px; }
          body.pdv .ntcollection-footer-grid {
            gap: 40px;
            padding-bottom: 32px;
          }
        }

        /* ── Mobile ────────────────────────────────────── */
        @media (max-width: 767px) {
          body.pdv .ntcollection-footer { padding: 0 20px; }
          body.pdv .ntcollection-footer-inner {
            padding: 40px 0 32px;
            padding-bottom: max(32px, env(safe-area-inset-bottom));
          }
          body.pdv .ntcollection-footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
            padding-bottom: 24px;
          }
          body.pdv .ntcollection-footer-col-social { align-items: flex-start; }
          body.pdv .ntcollection-footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
        }
      `}</style>
    </footer>
  )
}
