export default function PricingCard() {
  return (
    <div style={{
      background: 'rgba(2,3,5,0.8)',
      border: '1px solid rgba(239,239,239,0.12)',
      padding: '40px',
      backdropFilter: 'blur(16px)',
    }}>
      <p style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(239,239,239,0.4)', marginBottom: '24px' }}>
        NT Collection
      </p>
      <p style={{ fontSize: '14px', color: 'rgba(239,239,239,0.65)', marginBottom: '12px' }}>
        Acesse todos os artistas da coleção
      </p>
      <p style={{ fontSize: '2rem', fontWeight: 700, color: '#87CDE7', marginBottom: '4px', fontFamily: 'Roslindale, Georgia, serif' }}>
        R$ 69,90<span style={{ fontSize: '13px', fontWeight: 400, color: 'rgba(239,239,239,0.35)', fontFamily: 'Margem, Inter, sans-serif' }}>/mês</span>
      </p>
      <p style={{ fontSize: '12px', color: 'rgba(239,239,239,0.3)', marginBottom: '28px' }}>
        ou R$ 699,90/ano <span style={{ color: '#87CDE7' }}>economize 2 meses</span>
      </p>
      <button style={{
        width: '100%', background: '#87CDE7', color: '#020305',
        fontFamily: 'Margem, Inter, sans-serif',
        fontWeight: 700, padding: '16px', fontSize: '13px',
        border: 'none', cursor: 'pointer', letterSpacing: '0.04em',
        marginBottom: '24px', transition: 'background 0.2s'
      }}
        onMouseOver={e => e.currentTarget.style.background = '#6bbcd8'}
        onMouseOut={e => e.currentTarget.style.background = '#87CDE7'}>
        Começar Agora
      </button>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {[
          'Todos os artistas da coleção',
          'Novos lançamentos todo mês',
          'Assista em qualquer dispositivo',
          '30 dias de garantia',
        ].map(item => (
          <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '12px', color: 'rgba(239,239,239,0.5)' }}>
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#87CDE7" strokeWidth={2} style={{ flexShrink: 0 }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
