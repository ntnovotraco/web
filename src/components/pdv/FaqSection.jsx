import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const whatsappIcon = '/images/pdv/whatsapp.webp'

const BG = '#020305'
const TEXT = '#EFEFEF'
const MUTED = 'rgba(239,239,239,0.45)'
const BORDER = 'rgba(239,239,239,0.07)'
const EDITORIAL = 'Roslindale, Georgia, serif'
const BLUE = '#87CDE7'

const groups = [
  {
    label: 'Geral',
    items: [
      {
        q: 'O que é o NT Collection?',
        a: 'O NT Collection é uma plataforma de coleções com os maiores nomes da cultura brasileira. Cada coleção é uma imersão profunda na mente, no método e na trajetória de quem construiu algo extraordinário no seu campo — transformando experiência de vida em aulas aplicáveis para qualquer pessoa que queira criar, liderar ou construir algo próprio.',
      },
      {
        q: 'O que está incluído na assinatura do NT Collection?',
        a: 'Sua assinatura dá acesso ilimitado a todo o catálogo de coleções da plataforma, incluindo novos lançamentos durante o período da sua assinatura. Você pode assistir no seu próprio ritmo, quantas vezes quiser, de onde estiver.',
      },
      {
        q: 'Onde posso assistir?',
        a: 'Você pode assistir às aulas pelo navegador no computador, tablet ou celular, e também pelos aplicativos disponíveis para iOS e Android. Seu progresso é sincronizado entre os dispositivos automaticamente.',
      },
      {
        q: 'Como minha assinatura do NT Collection ajuda a democratizar o acesso à cultura?',
        a: 'Há quase duas décadas, a Novo Traço nasceu com uma missão clara: democratizar o acesso à cultura. O NT Collection é a extensão digital dessa postura. Ao assinar, você paga um valor calibrado para a realidade brasileira e acessa um acervo que reúne a genialidade criativa do país contada em primeira pessoa. E, no mesmo gesto, ajuda a fortalecer o braço de democratização da Novo Traço — contribuindo para que projetos gratuitos de cultura sigam abertos, ingressos sigam simbólicos e projetos sigam chegando do norte ao sul do Brasil.',
      },
    ],
  },
  {
    label: 'Preço e Pagamento',
    items: [
      {
        q: 'Quanto custa o NT Collection?',
        a: 'Você pode assinar o NT Collection por R$ 69,90 por mês no plano mensal ou R$ 699,00 por ano no plano anual — uma economia significativa para quem quer acesso contínuo ao conteúdo.',
      },
      {
        q: 'Como funciona a garantia de 7 dias?',
        a: 'Oferecemos 7 dias de garantia em todas as assinaturas. Se nesse período você sentir que o NT Collection não é para você, basta solicitar o cancelamento e o reembolso integral será realizado, sem burocracia.',
      },
      {
        q: 'Como faço para cancelar?',
        a: 'Você pode cancelar sua assinatura a qualquer momento diretamente pela sua conta, na área de configurações. O cancelamento é simples e não exige contato com o suporte, mas nossa equipe está disponível caso você precise de ajuda.',
      },
    ],
  },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ borderBottom: `1px solid ${BORDER}` }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '28px 0', fontSize: '15px', color: TEXT, background: 'none', border: 'none',
          cursor: 'pointer', textAlign: 'left', fontFamily: 'Margem, Inter, sans-serif',
        }}
      >
        {q}
        <motion.svg
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: [0.65, 0, 0.35, 1] }}
          width="16" height="16" fill="none" viewBox="0 0 24 24" stroke={open ? TEXT : MUTED}
          style={{ flexShrink: 0, marginLeft: '24px' }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
        </motion.svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ fontSize: '14px', lineHeight: 1.8, color: MUTED, paddingBottom: '28px' }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FaqSection() {
  return (
    <section id="faq" className="r-section" style={{ padding: '80px 0', background: BG }}>
      <div className="r-faq-inner" style={{ maxWidth: '760px', margin: '0 auto', padding: '0 40px' }}>
        <h2 style={{ fontFamily: EDITORIAL, fontSize: '2rem', color: TEXT, fontWeight: 400, marginBottom: '72px' }}>
          Perguntas frequentes
        </h2>
        {groups.map((group, gi) => (
          <div key={group.label} style={{ marginBottom: gi < groups.length - 1 ? '64px' : 0 }}>
            <p style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: BLUE, marginBottom: '32px' }}>
              {group.label}
            </p>
            {group.items.map(item => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        ))}
        <div style={{ borderBottom: `1px solid ${BORDER}` }} />

        <div className="r-wpp-cta" style={{
          marginTop: '64px',
          border: `1px solid ${BORDER}`,
          borderRadius: '12px',
          padding: '40px 56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '40px',
          background: 'rgba(239,239,239,0.03)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <img src={whatsappIcon} alt="WhatsApp" style={{ width: '32px', height: '32px', flexShrink: 0 }} />
            <div>
              <p style={{ fontFamily: 'Margem, Inter, sans-serif', fontSize: '17px', fontWeight: 700, color: TEXT, marginBottom: '4px', lineHeight: 1.2 }}>
                Alguma dúvida?
              </p>
              <p style={{ fontSize: '13px', color: 'rgba(239,239,239,0.6)', lineHeight: 1.5 }}>
                Chame nosso time no WhatsApp
              </p>
            </div>
          </div>
          <a
            href="https://nt.novotraco.com/whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flexShrink: 0,
              display: 'inline-block',
              background: '#25D366',
              color: '#fff',
              fontFamily: 'Margem, Inter, sans-serif',
              fontWeight: 600,
              fontSize: '13px',
              letterSpacing: '0.03em',
              padding: '12px 24px',
              borderRadius: '50px',
              textDecoration: 'none',
              transition: 'background 0.2s ease',
            }}
            onMouseOver={e => e.currentTarget.style.background = '#1ebe5a'}
            onMouseOut={e => e.currentTarget.style.background = '#25D366'}
          >
            Chamar no WhatsApp
          </a>
        </div>
        <style>{`
          @media (max-width: 600px) {
            .r-wpp-cta {
              flex-direction: column !important;
              align-items: flex-start !important;
              padding: 32px 28px !important;
              gap: 24px !important;
            }
            .r-wpp-cta a {
              width: 100% !important;
              text-align: center !important;
            }
          }
        `}</style>
      </div>
    </section>
  )
}
