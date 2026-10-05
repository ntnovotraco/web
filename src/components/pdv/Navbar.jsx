const logoWhite = '/images/pdv/logo-white.svg'
const logoBlack = '/images/pdv/logo-black.svg'

export default function Navbar({ light = false, topOffset = 36, navigate }) {
  const bg = light
    ? 'rgba(239,239,239,0.95)'
    : 'linear-gradient(to bottom, rgba(2,3,5,0.92), transparent)'

  return (
    <nav className="r-nav" style={{
      position: 'fixed', top: `${topOffset}px`, left: 0, right: 0, zIndex: 50, transition: 'top 0.3s ease',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '20px 40px',
      background: bg,
      backdropFilter: 'blur(12px)',
    }}>
      <a
        href="/ntc"
        onClick={(e) => {
          const search = typeof window !== 'undefined' ? window.location.search : ''
          if (search) {
            e.preventDefault()
            window.location.href = `/ntc${search}`
          }
        }}
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
      >
        <img
          src={light ? logoBlack : logoWhite}
          alt="NT Collection"
          style={{ height: '38px', width: 'auto' }}
        />
      </a>
      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        <a className="r-nav-entrar" href="#login" style={{
          fontSize: '13px', letterSpacing: '0.04em',
          color: light ? 'rgba(2,3,5,0.55)' : 'rgba(239,239,239,0.55)',
          textDecoration: 'none', transition: 'color 0.2s', cursor: 'pointer'
        }}
          onMouseOver={e => e.target.style.color = light ? '#020305' : '#EFEFEF'}
          onMouseOut={e => e.target.style.color = light ? 'rgba(2,3,5,0.55)' : 'rgba(239,239,239,0.55)'}>
          Entrar
        </a>
        <button className="r-nav-cta" style={{
          background: '#87CDE7', color: '#020305',
          fontFamily: 'Margem, Inter, sans-serif',
          fontWeight: 600, fontSize: '13px', letterSpacing: '0.04em',
          padding: '12px 28px', border: 'none', cursor: 'pointer',
          transition: 'background 0.2s ease-in-out',
          minHeight: '44px',
        }}
          onClick={() => window.dispatchEvent(new CustomEvent('pdv:open-checkout'))}
          onMouseOver={e => e.currentTarget.style.background = '#6bbcd8'}
          onMouseOut={e => e.currentTarget.style.background = '#87CDE7'}>
          Começar Agora
        </button>
      </div>
    </nav>
  )
}
