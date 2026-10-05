import { motion } from 'framer-motion'
import Navbar from '../Navbar'

const BG = '#020305'
const OW = '#EFEFEF'
const BLUE = '#87CDE7'
const MUTED = 'rgba(239,239,239,0.45)'
const BORDER = 'rgba(239,239,239,0.07)'
const EDITORIAL = 'Roslindale, Georgia, serif'
const BODY = 'Margem, Inter, sans-serif'

export default function Obrigado({ bannerHeight = 36, navigate }) {
  return (
    <div style={{ background: BG, color: OW, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar topOffset={bannerHeight} navigate={navigate} />

      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '120px 40px 80px' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          style={{ maxWidth: '640px', width: '100%' }}
        >
          <p style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: BLUE, fontFamily: BODY, marginBottom: '24px' }}>
            Founders Edition · Confirmado
          </p>

          <h1 style={{ fontFamily: EDITORIAL, fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 400, lineHeight: 1.1, color: OW, marginBottom: '48px' }}>
            Você está dentro.<br />E foi o primeiro.
          </h1>

          <div style={{ borderTop: `1px solid ${BORDER}`, marginBottom: '48px' }} />

          <div style={{ marginBottom: '40px' }}>
            <p style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: BLUE, fontFamily: BODY, marginBottom: '12px' }}>
              Confirmação
            </p>
            <p style={{ fontSize: '15px', lineHeight: 1.75, color: MUTED }}>
              Sua assinatura da Founder's Edition está confirmada. Você é Membro Fundador do NT Collection.
            </p>
          </div>

          <div style={{ marginBottom: '48px' }}>
            <p style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: BLUE, fontFamily: BODY, marginBottom: '12px' }}>
              Seu acesso
            </p>
            <p style={{ fontSize: '15px', lineHeight: 1.75, color: MUTED, marginBottom: '16px' }}>
              Você vai receber um e-mail com seu acesso em até 5 minutos. Verifique sua caixa de entrada e, se necessário, a pasta de spam.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { text: 'Coleção L7NNON — já disponível', available: true },
                { text: 'Coleção Papatinho — já disponível', available: true },
                { text: '2 novas coleções por mês ao longo da primeira temporada', available: false },
              ].map(item => (
                <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke={item.available ? BLUE : 'rgba(239,239,239,0.2)'} strokeWidth={2} style={{ flexShrink: 0 }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p style={{ fontSize: '13px', color: item.available ? OW : MUTED }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ borderTop: `1px solid ${BORDER}`, marginBottom: '48px' }} />

          <div style={{ marginBottom: '48px' }}>
            <p style={{ fontFamily: EDITORIAL, fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)', color: OW, lineHeight: 1.55, marginBottom: '16px' }}>
              "Sempre existe uma versão que ainda não foi desenhada."
            </p>
            <p style={{ fontSize: '13px', color: MUTED, lineHeight: 1.6 }}>
              Esta é a sua.<br />
              <span style={{ color: OW, fontWeight: 600 }}>Novo Traço</span>
            </p>
          </div>

          <button
            onClick={() => navigate?.('home')}
            style={{
              background: BLUE, color: BG,
              fontFamily: BODY, fontWeight: 700,
              fontSize: '13px', letterSpacing: '0.04em',
              padding: '14px 32px', border: 'none',
              cursor: 'pointer', marginBottom: '48px',
              transition: 'background 0.2s ease-in-out',
            }}
            onMouseOver={e => e.currentTarget.style.background = '#6bbcd8'}
            onMouseOut={e => e.currentTarget.style.background = BLUE}
          >
            Explorar as coleções
          </button>

          <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: '32px' }}>
            <p style={{ fontSize: '12px', color: 'rgba(239,239,239,0.3)', lineHeight: 1.7 }}>
              Dúvidas sobre seu acesso? Entre em contato com nosso suporte.{' '}
              <a
                href="mailto:contato@novotraco.com"
                style={{ color: 'rgba(239,239,239,0.5)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
              >
                contato@novotraco.com
              </a>
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
