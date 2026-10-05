const BG = '#020305'
const OW = '#EFEFEF'
const BLUE = '#87CDE7'
const BORDER = 'rgba(239,239,239,0.07)'
const EDITORIAL = 'Roslindale, Georgia, serif'

const S = {
  section: { padding: '80px 0', borderTop: `1px solid ${BORDER}` },
  container: { maxWidth: '1280px', margin: '0 auto', padding: '0 40px' },
}

export default function AboutSection() {
  return (
    <section className="r-section r-about" style={S.section}>
      <div className="r-about-grid" style={{
        ...S.container,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'center',
      }}>

        <div style={{ textAlign: 'left' }}>
          <h2 style={{
            fontFamily: EDITORIAL,
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontWeight: 400,
            color: OW,
            lineHeight: 1.1,
            marginBottom: '40px',
          }}>
            O que é o NT Collection
          </h2>
          <p style={{ fontSize: '15px', lineHeight: 1.85, color: 'rgba(239,239,239,0.5)', marginBottom: '22px' }}>
            Uma coleção de séries que te coloca na mesma sala que alguns dos maiores nomes da cultura brasileira de hoje. Músicos, produtores, compositores — gente que mudou o som do Brasil — contando a própria história com as próprias palavras, sem roteiro, sem pose.
          </p>
          <p style={{ fontSize: '15px', lineHeight: 1.85, color: 'rgba(239,239,239,0.5)', marginBottom: '22px' }}>
            O Brasil tem mania de reconhecer os gênios só depois que eles se vão. L7NNON, Papatinho e os próximos nomes do NT Collection já mudaram como o país escuta música — e o que eles sabem sobre criação e processo não está documentado em lugar nenhum. Até agora.
          </p>
          <p style={{ fontSize: '15px', lineHeight: 1.85, color: 'rgba(239,239,239,0.5)', marginBottom: 0 }}>
            Ao assinar, você acessa tudo isso por menos do que uma sessão de cinema. E, no mesmo gesto, ajuda a Novo Traço a manter shows gratuitos, ingressos simbólicos e projetos que levam cultura para quem quase nunca tem acesso. Não é caridade. É a certeza de que a cultura desse país pertence ao país inteiro — e quem assina o NT Collection está fazendo parte disso de verdade.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0px' }}>
          <div className="r-macbook-screen" style={{
            width: '100%',
            maxWidth: '480px',
            background: '#0d0d12',
            border: '2px solid rgba(239,239,239,0.12)',
            borderBottom: 'none',
            borderRadius: '12px 12px 0 0',
            position: 'relative',
            aspectRatio: '16/10',
            overflow: 'hidden',
            boxShadow: '0 -4px 40px rgba(0,0,0,0.5)',
          }}>
            <div style={{ position: 'absolute', top: '10px', left: '14px', display: 'flex', gap: '6px', zIndex: 2 }}>
              {['rgba(239,239,239,0.12)', 'rgba(239,239,239,0.08)', 'rgba(239,239,239,0.08)'].map((bg, i) => (
                <div key={i} style={{ width: '8px', height: '8px', borderRadius: '50%', background: bg }} />
              ))}
            </div>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(160deg, rgba(135,205,231,0.04) 0%, #020305 70%)',
              display: 'flex', flexDirection: 'column',
              paddingTop: '32px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '0 16px', marginBottom: '12px' }}>
                <div style={{ height: '5px', width: '60px', background: 'rgba(135,205,231,0.2)', borderRadius: '3px' }} />
                <div style={{ flex: 1 }} />
                <div style={{ height: '5px', width: '30px', background: 'rgba(239,239,239,0.07)', borderRadius: '3px' }} />
                <div style={{ height: '5px', width: '30px', background: 'rgba(239,239,239,0.07)', borderRadius: '3px' }} />
              </div>
              <div style={{
                margin: '0 16px', flex: 1,
                background: 'rgba(239,239,239,0.03)',
                border: '1px solid rgba(239,239,239,0.07)',
                borderRadius: '6px', position: 'relative', overflow: 'hidden',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{
                  width: '32px', height: '32px', borderRadius: '50%',
                  border: '1.5px solid rgba(239,239,239,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <div style={{ width: 0, height: 0, borderTop: '6px solid transparent', borderBottom: '6px solid transparent', borderLeft: '10px solid rgba(239,239,239,0.4)', marginLeft: '2px' }} />
                </div>
                <div style={{ position: 'absolute', bottom: '10px', left: '12px', right: '12px' }}>
                  <div style={{ height: '2px', background: 'rgba(239,239,239,0.08)', borderRadius: '1px', position: 'relative' }}>
                    <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '35%', background: BLUE, borderRadius: '1px', opacity: 0.7 }} />
                  </div>
                </div>
              </div>
              <div style={{ padding: '10px 16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {[70, 90, 55].map((w, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '24px', height: '16px', background: i === 0 ? 'rgba(135,205,231,0.15)' : 'rgba(239,239,239,0.04)', borderRadius: '3px', flexShrink: 0 }} />
                    <div style={{ height: '4px', width: `${w}%`, background: i === 0 ? 'rgba(239,239,239,0.15)' : 'rgba(239,239,239,0.06)', borderRadius: '2px' }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{
            width: '100%', maxWidth: '480px', height: '6px',
            background: 'linear-gradient(to bottom, rgba(239,239,239,0.1), rgba(239,239,239,0.04))',
            borderRadius: '0 0 2px 2px',
          }} />
          <div style={{
            width: '110%', maxWidth: '528px', height: '14px',
            background: 'linear-gradient(to bottom, rgba(239,239,239,0.07), rgba(239,239,239,0.03))',
            borderRadius: '0 0 8px 8px', position: 'relative',
          }}>
            <div style={{
              position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
              width: '60px', height: '5px',
              background: 'rgba(239,239,239,0.06)', borderRadius: '0 0 4px 4px',
            }} />
          </div>
        </div>

      </div>
    </section>
  )
}
