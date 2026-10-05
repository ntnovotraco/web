const CARD_BG = '#F0EFEB'
const TEXT = '#020305'
const MUTED = 'rgba(2,3,5,0.6)'
const EDITORIAL = 'Roslindale, Georgia, serif'
const BODY = 'Margem, Inter, sans-serif'

export default function ImpactSection() {
  return (
    <section className="r-impact-outer" style={{ padding: '120px 64px', background: '#020305' }}>
      <div className="r-impact-card" style={{
        maxWidth: '1280px',
        margin: '0 auto',
        background: CARD_BG,
        borderRadius: '10px',
        padding: '96px 80px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 24px 80px rgba(2,3,5,0.4), inset 0 0 0 1px rgba(2,3,5,0.05)',
      }}>

        <div className="r-impact-grid" style={{
          display: 'grid',
          gridTemplateColumns: '45fr 55fr',
          gap: '96px',
          alignItems: 'start',
        }}>

          <div>
            <p style={{
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: MUTED,
              fontFamily: BODY,
              marginBottom: '24px',
            }}>
              Mais que uma assinatura
            </p>
            <h2 style={{
              fontFamily: EDITORIAL,
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: TEXT,
              margin: 0,
            }}>
              Cada assinatura<br />
              vira cultura<br />
              na rua.
            </h2>
          </div>

          <div style={{ paddingTop: '4px' }}>
            <p style={{
              fontFamily: BODY,
              fontSize: '15px',
              lineHeight: 1.85,
              color: MUTED,
              margin: 0,
            }}>
              Parte da receita do NT Collection financia diretamente iniciativas que colocam a arte onde ela precisa estar:{' '}
              <strong style={{ color: TEXT, fontWeight: 500 }}>shows a R$5</strong>,{' '}
              <strong style={{ color: TEXT, fontWeight: 500 }}>apresentações gratuitas em praças</strong>,{' '}
              <strong style={{ color: TEXT, fontWeight: 500 }}>projetos culturais em comunidades que o mercado esqueceu</strong>.
              {' '}Todas essas ações são{' '}
              <strong style={{ color: TEXT, fontWeight: 500 }}>realizadas pela Novo Traço</strong>,
              com os mesmos 18 anos de curadoria e engenharia que sustentam nossos palcos.
              Ao fazer parte, você não está só assistindo à genialidade brasileira — você está ajudando a pagar para que mais gente tenha acesso a ela.
            </p>

            <div style={{
              width: '48px',
              height: '1px',
              background: 'rgba(2,3,5,0.2)',
              margin: '36px 0',
            }} />

            <p style={{
              fontFamily: BODY,
              fontSize: '14px',
              fontWeight: 500,
              color: TEXT,
              lineHeight: 1.6,
              letterSpacing: '0.02em',
              margin: 0,
            }}>
              Isso é Prosperidade Social. Isso é Novo Traço.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
