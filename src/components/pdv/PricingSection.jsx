const BG = '#020305'
const OW = '#EFEFEF'
const BLUE = '#87CDE7'
const MUTED = 'rgba(239,239,239,0.45)'
const BORDER = 'rgba(239,239,239,0.07)'
const EDITORIAL = 'Roslindale, Georgia, serif'
const BODY = 'Margem, Inter, sans-serif'

export default function PricingSection({ navigate }) {
  return (
    <section id="planos" className="r-section" style={{ padding: '80px 0', borderTop: `1px solid ${BORDER}` }}>
      <div className="r-container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>
        <div className="r-pricing-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>

          <div>
            <p style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: BLUE, marginBottom: '24px' }}>
              Sua assinatura
            </p>
            <h2 style={{ fontFamily: EDITORIAL, fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: OW, lineHeight: 1.15, fontWeight: 400, marginBottom: '40px' }}>
              Acesse todas as coleções.<br />
              Por menos do que uma sessão de cinema.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {[
                { label: 'Todas as coleções', desc: 'L7NNON, Papatinho e todos os próximos lançamentos inclusos.' },
                { label: 'Novos episódios todo mês', desc: 'A coleção está em crescimento contínuo. Novos artistas, novas temporadas.' },
                { label: 'Assistência sem limite', desc: 'Reveja quantas vezes quiser, em qualquer dispositivo.' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', gap: '16px' }}>
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke={BLUE} strokeWidth={2} style={{ flexShrink: 0, marginTop: '2px' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p style={{ fontSize: '14px', color: OW, fontWeight: 600, marginBottom: '4px' }}>{item.label}</p>
                    <p style={{ fontSize: '13px', color: MUTED, lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="r-pricing-card" style={{
              background: 'rgba(2,3,5,0.8)',
              border: '1px solid rgba(239,239,239,0.12)',
              padding: '48px',
              backdropFilter: 'blur(16px)',
              borderRadius: '6px',
            }}>
              <p style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(239,239,239,0.4)', marginBottom: '32px' }}>
                NT Collection — Assinatura
              </p>

              <div style={{
                border: `1px solid ${BLUE}`,
                background: 'rgba(135,205,231,0.06)',
                borderRadius: '4px',
                padding: '24px',
                marginBottom: '32px',
                position: 'relative',
              }}>
                <p style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: BLUE, fontFamily: BODY, fontWeight: 700, marginBottom: '16px' }}>
                  Founders Edition
                </p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '6px' }}>
                  <p style={{ fontFamily: EDITORIAL, fontSize: '2.4rem', fontWeight: 400, color: BLUE, lineHeight: 1 }}>
                    R$ 499
                  </p>
                  <p style={{ fontFamily: BODY, fontSize: '1rem', color: 'rgba(239,239,239,0.35)', textDecoration: 'line-through', lineHeight: 1 }}>
                    R$ 699
                  </p>
                </div>
                <p style={{ fontSize: '12px', color: 'rgba(239,239,239,0.45)', fontFamily: BODY }}>
                  pagamento único · acesso vitalício
                </p>
              </div>

              <button
                onClick={() => window.dispatchEvent(new CustomEvent('pdv:open-checkout'))}
                style={{
                  width: '100%', background: BLUE, color: BG,
                  fontFamily: BODY, fontWeight: 700, padding: '18px',
                  fontSize: '13px', border: 'none', cursor: 'pointer',
                  letterSpacing: '0.04em', marginBottom: '28px',
                  transition: 'background 0.2s ease-in-out',
                }}
                onMouseOver={e => e.currentTarget.style.background = '#6bbcd8'}
                onMouseOut={e => e.currentTarget.style.background = BLUE}>
                Garantir meu acesso
              </button>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { text: 'Todas as coleções disponíveis', founders: false },
                  { text: 'Novos lançamentos todo mês', founders: false },
                  { text: 'Assista em qualquer dispositivo', founders: false },
                  { text: '7 dias de garantia', founders: false },
                  { text: 'Live exclusiva com os membros do NT Collection', founders: true },
                ].map(item => (
                  <li key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: item.founders ? BLUE : 'rgba(239,239,239,0.5)' }}>
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke={item.founders ? BLUE : BLUE} strokeWidth={2} style={{ flexShrink: 0 }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item.text}{item.founders && <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginLeft: '8px', opacity: 0.7 }}>· Founders</span>}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
