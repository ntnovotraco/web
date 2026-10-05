const logoWhite = '/images/pdv/logo-white.svg'

const BG = '#020305'
const OW = '#F0EFEB'
const BLUE = '#87CDE7'
const BORDER = 'rgba(240,239,235,0.1)'

const links = [
  { label: 'As coleções', href: '/ntc#artistas' },
  { label: 'Planos', href: '/ntc#planos' },
  { label: 'Perguntas frequentes', href: '/ntc#faq' },
  { label: 'Política de Privacidade', event: 'pdv:open-privacy' },
  { label: 'Termos de Uso', event: 'pdv:open-terms' },
]

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/novo.traco/',
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@novotraco7195',
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/novotraco',
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
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
  //     <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
  //       <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.95a8.16 8.16 0 0 0 4.77 1.52V7.01a4.85 4.85 0 0 1-1-.32z" />
  //     </svg>
  //   ),
  // },
]

const label = {
  fontSize: '12px',
  fontWeight: 700,
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  color: `rgba(240,239,235,0.4)`,
  marginBottom: '24px',
  fontFamily: 'Margem, Inter, sans-serif',
}

export default function Footer() {
  return (
    <footer style={{ background: BG, borderTop: `1px solid ${BORDER}` }}>
      <div className="r-footer-inner" style={{ maxWidth: '1280px', margin: '0 auto', padding: '60px 40px 32px' }}>

        <div className="r-footer-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '64px', alignItems: 'start' }}>

          <div>
            <img src={logoWhite} alt="NT Collection" style={{ height: '36px', width: 'auto', marginBottom: '32px', display: 'block' }} />
            <p style={{ fontSize: '14px', lineHeight: 1.6, color: `rgba(240,239,235,0.6)`, fontFamily: 'Margem, Inter, sans-serif', maxWidth: '260px' }}>
              O acervo da genialidade artística brasileira.<br />
              Uma iniciativa Novo Traço.
            </p>
          </div>

          <div>
            <p style={label}>Navegação</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {links.map(item => (
                <a
                  key={item.label}
                  href={item.href ?? '#'}
                  onClick={(e) => {
                    if (item.event) {
                      e.preventDefault()
                      window.dispatchEvent(new CustomEvent(item.event))
                      return
                    }
                    if (item.href && item.href.startsWith('/ntc#')) {
                      const id = item.href.split('#')[1]
                      const target = document.getElementById(id)
                      if (target) {
                        e.preventDefault()
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        history.replaceState(null, '', '#' + id)
                      } else {
                        const search = window.location.search
                        if (search) {
                          e.preventDefault()
                          window.location.href = `/ntc${search}#${id}`
                        }
                      }
                    }
                  }}
                  style={{ fontSize: '15px', color: `rgba(240,239,235,0.75)`, textDecoration: 'none', fontFamily: 'Margem, Inter, sans-serif', transition: 'color 0.2s ease-in-out', cursor: 'pointer' }}
                  onMouseOver={e => e.currentTarget.style.color = BLUE}
                  onMouseOut={e => e.currentTarget.style.color = `rgba(240,239,235,0.75)`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p style={label}>Siga</p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: '40px', height: '40px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: '1px solid rgba(240,239,235,0.15)',
                    borderRadius: '4px',
                    color: `rgba(240,239,235,0.7)`,
                    background: 'transparent',
                    transition: 'color 0.2s ease-in-out, border-color 0.2s ease-in-out, background 0.2s ease-in-out',
                    cursor: 'pointer',
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.color = OW
                    e.currentTarget.style.borderColor = BLUE
                    e.currentTarget.style.background = 'rgba(135,205,231,0.08)'
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.color = `rgba(240,239,235,0.7)`
                    e.currentTarget.style.borderColor = 'rgba(240,239,235,0.15)'
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        <div style={{ height: '1px', background: BORDER, margin: '64px 0 24px' }} />

        <div className="r-footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <p style={{ fontSize: '13px', color: `rgba(240,239,235,0.4)`, fontFamily: 'Margem, Inter, sans-serif' }}>
            © 2026 Novo Traço. Todos os direitos reservados.
          </p>

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            border: '1px solid rgba(240,239,235,0.15)', padding: '8px 14px',
            borderRadius: '4px',
          }}>
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke={`rgba(240,239,235,0.5)`} strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span style={{ fontSize: '12px', color: `rgba(240,239,235,0.5)`, letterSpacing: '0.05em', fontFamily: 'Margem, Inter, sans-serif' }}>
              Certificado SSL
            </span>
          </div>
        </div>

      </div>
    </footer>
  )
}
