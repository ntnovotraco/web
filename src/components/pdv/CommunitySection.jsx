const OW = '#EFEFEF'
const BLUE = '#87CDE7'
const BORDER = 'rgba(239,239,239,0.07)'
const EDITORIAL = 'Roslindale, Georgia, serif'

const S = {
  section: { padding: '80px 0', borderTop: `1px solid ${BORDER}` },
  container: { maxWidth: '1280px', margin: '0 auto', padding: '0 40px' },
}

export default function CommunitySection() {
  return (
    <section className="r-section" style={S.section}>
      <div className="r-community-grid" style={{
        ...S.container,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'center',
      }}>

        <div>
          <p style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: BLUE, marginBottom: '20px' }}>
            Comunidade
          </p>
          <h2 style={{
            fontFamily: EDITORIAL,
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontWeight: 400,
            color: OW,
            lineHeight: 1.1,
            marginBottom: '36px',
          }}>
            Você não assiste sozinho.
          </h2>
          <p style={{ fontSize: '15px', lineHeight: 1.85, color: 'rgba(239,239,239,0.5)', marginBottom: '22px' }}>
            O NT Collection{' '}
            <span style={{ color: OW, fontWeight: 500 }}>não é só uma biblioteca de conteúdo</span>
            {' '}— é um espaço para quem leva cultura a sério. Cada coleção tem seu próprio fórum, onde assinantes trocam referências, debatem ideias e se conectam com outras pessoas que estão ali pelo mesmo motivo que você: entender o processo por trás do que move a cultura brasileira.
          </p>
          <p style={{ fontSize: '15px', lineHeight: 1.85, color: 'rgba(239,239,239,0.5)', marginBottom: '40px' }}>
            Uma conversa contínua, dentro da plataforma,{' '}
            <span style={{ color: OW, fontWeight: 500 }}>entre quem enxerga valor em ir fundo.</span>
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              'Fóruns dedicados para cada coleção',
              'Conversas diretas com outros assinantes',
              'Comunidade de criadores e entusiastas da cultura brasileira',
            ].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: BLUE, flexShrink: 0 }} />
                <p style={{ fontSize: '14px', color: 'rgba(239,239,239,0.55)', margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="r-iphone-mockup" style={{
            width: '260px',
            height: '540px',
            borderRadius: '40px',
            border: '2px solid rgba(239,239,239,0.15)',
            background: '#0a0a0d',
            position: 'relative',
            boxShadow: '0 0 0 1px rgba(239,239,239,0.04), 0 40px 80px rgba(0,0,0,0.6)',
            overflow: 'hidden',
            flexShrink: 0,
          }}>
            <div style={{
              position: 'absolute', top: '16px', left: '50%', transform: 'translateX(-50%)',
              width: '96px', height: '28px',
              background: '#000', borderRadius: '20px', zIndex: 2,
            }} />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(160deg, rgba(135,205,231,0.05) 0%, rgba(2,3,5,0) 60%)',
              display: 'flex', flexDirection: 'column',
              padding: '64px 16px 20px',
              gap: '10px',
            }}>
              <div style={{ height: '7px', width: '50%', background: 'rgba(135,205,231,0.25)', borderRadius: '4px' }} />
              <div style={{ height: '6px', width: '35%', background: 'rgba(239,239,239,0.06)', borderRadius: '4px', marginBottom: '8px' }} />
              <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(239,239,239,0.1)', flexShrink: 0 }} />
                <div style={{ background: 'rgba(239,239,239,0.07)', borderRadius: '12px 12px 12px 2px', padding: '10px 12px', maxWidth: '75%' }}>
                  <div style={{ height: '5px', width: '100%', background: 'rgba(239,239,239,0.15)', borderRadius: '3px', marginBottom: '6px' }} />
                  <div style={{ height: '5px', width: '70%', background: 'rgba(239,239,239,0.08)', borderRadius: '3px' }} />
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(239,239,239,0.08)', flexShrink: 0 }} />
                <div style={{ background: 'rgba(239,239,239,0.07)', borderRadius: '12px 12px 12px 2px', padding: '10px 12px', maxWidth: '65%' }}>
                  <div style={{ height: '5px', width: '90%', background: 'rgba(239,239,239,0.12)', borderRadius: '3px', marginBottom: '6px' }} />
                  <div style={{ height: '5px', width: '55%', background: 'rgba(239,239,239,0.07)', borderRadius: '3px' }} />
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div style={{ background: 'rgba(135,205,231,0.12)', border: '1px solid rgba(135,205,231,0.15)', borderRadius: '12px 12px 2px 12px', padding: '10px 12px', maxWidth: '70%' }}>
                  <div style={{ height: '5px', width: '100%', background: 'rgba(135,205,231,0.3)', borderRadius: '3px', marginBottom: '6px' }} />
                  <div style={{ height: '5px', width: '60%', background: 'rgba(135,205,231,0.18)', borderRadius: '3px' }} />
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(239,239,239,0.12)', flexShrink: 0 }} />
                <div style={{ background: 'rgba(239,239,239,0.07)', borderRadius: '12px 12px 12px 2px', padding: '10px 12px', maxWidth: '80%' }}>
                  <div style={{ height: '5px', width: '85%', background: 'rgba(239,239,239,0.13)', borderRadius: '3px', marginBottom: '6px' }} />
                  <div style={{ height: '5px', width: '45%', background: 'rgba(239,239,239,0.07)', borderRadius: '3px' }} />
                </div>
              </div>
              <div style={{ flex: 1 }} />
              <div style={{
                background: 'rgba(239,239,239,0.05)',
                border: '1px solid rgba(239,239,239,0.08)',
                borderRadius: '24px',
                padding: '10px 16px',
                display: 'flex', alignItems: 'center', gap: '8px',
              }}>
                <div style={{ height: '5px', width: '60%', background: 'rgba(239,239,239,0.08)', borderRadius: '3px', flex: 1 }} />
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(135,205,231,0.2)', flexShrink: 0 }} />
              </div>
            </div>
            <div style={{ position: 'absolute', right: '-3px', top: '120px', width: '3px', height: '64px', background: 'rgba(239,239,239,0.12)', borderRadius: '0 2px 2px 0' }} />
            <div style={{ position: 'absolute', left: '-3px', top: '100px', width: '3px', height: '36px', background: 'rgba(239,239,239,0.12)', borderRadius: '2px 0 0 2px' }} />
            <div style={{ position: 'absolute', left: '-3px', top: '148px', width: '3px', height: '36px', background: 'rgba(239,239,239,0.12)', borderRadius: '2px 0 0 2px' }} />
          </div>
        </div>

      </div>
    </section>
  )
}
