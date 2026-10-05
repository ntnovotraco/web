const logoWhite = '/images/pdv/logo-white.svg'

const links = [
  { label: 'Founders Edition', target: 'planos' },
  { label: 'Artistas', target: 'artistas' },
  { label: 'FAQ', target: 'faq' },
]

export default function NavbarV2({ topOffset = 44 }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      // fallback se a seção ainda não existe na página
      window.location.hash = id
    }
  }

  return (
    <nav
      className="ntcollection-nav"
      style={{
        position: 'fixed',
        top: `${topOffset}px`, left: 0, right: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 40px',
        background: 'linear-gradient(to bottom, rgba(2,3,5,0.92), rgba(2,3,5,0))',
        transition: 'top 0.28s ease',
      }}
    >
      <a
        href="/ntcollection"
        aria-label="NT Collection"
        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
      >
        <img
          src={logoWhite}
          alt="NT Collection"
          style={{ height: '38px', width: 'auto', display: 'block' }}
        />
      </a>

      <div className="ntcollection-nav-links" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        {links.map(item => (
          <button
            key={item.label}
            onClick={() => scrollTo(item.target)}
            className="ntcollection-nav-link"
            style={{
              background: 'none', border: 'none', padding: 0,
              cursor: 'pointer',
              fontFamily: 'Margem, Inter, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              letterSpacing: '0.52px',
              lineHeight: '19.5px',
              color: 'rgba(239,239,239,0.99)',
              transition: 'color 0.2s ease-in-out',
              whiteSpace: 'nowrap',
            }}
            onMouseOver={e => e.currentTarget.style.color = '#87CDE7'}
            onMouseOut={e => e.currentTarget.style.color = 'rgba(239,239,239,0.99)'}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
