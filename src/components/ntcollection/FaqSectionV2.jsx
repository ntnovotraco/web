import { useState } from 'react'

const CATEGORIES = [
  {
    label: 'GERAL',
    items: [
      {
        q: 'O que é o NT Collection?',
        a: 'O NT Collection é uma plataforma digital de acesso a conteúdo audiovisual por assinatura um acervo vivo da genialidade criativa brasileira. Reúne coleções cinematográficas com artistas como L7NNON e Papatinho, além dos NT Sessions em qualidade premium.',
      },
      {
        q: 'O que está incluído na assinatura do NT Collection?',
        a: 'Você tem acesso a todas as coleções disponíveis, duas coleções novas adicionadas todos os meses, aos NT Sessions em qualidade premium e pode assistir em qualquer dispositivo. Na Founders Edition, inclui também a live exclusiva com L7NNON e Papatinho.',
      },
      {
        q: 'Como minha assinatura do NT Collection ajuda a democratizar o acesso à cultura?',
        a: 'Parte do valor arrecadado vai para a Novo Traço manter shows gratuitos, ingressos simbólicos e projetos culturais que levam cultura para quem quase nunca tem acesso. Não é caridade é a certeza de que a cultura desse país pertence ao país inteiro.',
      },
    ],
  },
  {
    label: 'PREÇO E PAGAMENTO',
    items: [
      {
        q: 'Quanto custa o NT Collection?',
        a: 'Na Founders Edition, a assinatura custa R$58,54/mês durante 12 meses ou R$497 à vista. A oferta de lançamento tem desconto de 28% e inclui acesso à live exclusiva com L7NNON e Papatinho condição por tempo limitado.',
      },
      {
        q: 'Como funciona a garantia de 7 dias?',
        a: 'Se em até 7 dias você não gostar, basta solicitar o reembolso pelo e-mail de suporte e devolvemos 100% do valor pago, sem perguntas. É o direito de arrependimento previsto no art. 49 do Código de Defesa do Consumidor.',
      },
      {
        q: 'Como faço para cancelar?',
        a: 'Você pode cancelar a qualquer momento pelo painel da Hotmart. O cancelamento tem efeito ao final do período já pago, então você mantém o acesso até essa data, sem multa ou tarifa adicional.',
      },
    ],
  },
]

function PlusIcon({ open }) {
  return (
    <svg
      className={`ntcollection-faq-icon ${open ? 'is-open' : ''}`}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <line x1="10" y1="3" x2="10" y2="17" className="ntcollection-faq-icon-v" />
      <line x1="3" y1="10" x2="17" y2="10" />
    </svg>
  )
}

function FaqItem({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`ntcollection-faq-item ${open ? 'is-open' : ''}`}>
      <button
        type="button"
        className="ntcollection-faq-q"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <span className="ntcollection-faq-q-text">{item.q}</span>
        <PlusIcon open={open} />
      </button>
      <div className="ntcollection-faq-a-wrap" aria-hidden={!open}>
        <div className="ntcollection-faq-a">{item.a}</div>
      </div>
    </div>
  )
}

function Column({ category }) {
  return (
    <div className="ntcollection-faq-col">
      <p className="ntcollection-faq-cat">{category.label}</p>
      <div className="ntcollection-faq-list">
        {category.items.map((item, i) => (
          <FaqItem key={i} item={item} />
        ))}
      </div>
    </div>
  )
}

export default function FaqSectionV2() {
  return (
    <section className="ntcollection-faq" id="faq">
      <div className="ntcollection-faq-inner">
        <h2 className="ntcollection-faq-title">Perguntas frequentes</h2>
        <div className="ntcollection-faq-grid">
          {CATEGORIES.map(cat => <Column key={cat.label} category={cat} />)}
        </div>
      </div>

      <style>{`
        body.pdv .ntcollection-faq {
          background: #020305;
          padding: 120px 40px;
        }
        body.pdv .ntcollection-faq-inner {
          max-width: 1076px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 72px;
        }
        body.pdv .ntcollection-faq-title {
          margin: 0;
          font-family: 'Roslindale', Georgia, serif;
          font-weight: 400;
          font-size: 44px;
          line-height: 1.05;
          color: #EFEFEF;
        }

        body.pdv .ntcollection-faq-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 80px;
          row-gap: 56px;
        }

        body.pdv .ntcollection-faq-col {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        body.pdv .ntcollection-faq-cat {
          margin: 0;
          font-family: 'Margem', 'Inter', sans-serif;
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          line-height: 14px;
          color: #87CDE7;
        }

        body.pdv .ntcollection-faq-list {
          display: flex;
          flex-direction: column;
        }

        body.pdv .ntcollection-faq-item {
          border-bottom: 1px solid rgba(239,239,239,0.10);
        }

        body.pdv .ntcollection-faq-q {
          width: 100%;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 24px;
          padding: 24px 0;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          color: rgba(239,239,239,0.88);
          font-family: 'Margem', 'Inter', sans-serif;
          font-weight: 400;
          font-size: 15px;
          line-height: 1.45;
          transition: color 0.2s ease-in-out;
        }
        body.pdv .ntcollection-faq-q:hover { color: #EFEFEF; }
        body.pdv .ntcollection-faq-item.is-open .ntcollection-faq-q { color: #EFEFEF; }

        body.pdv .ntcollection-faq-q-text {
          flex: 1;
        }

        body.pdv .ntcollection-faq-icon {
          flex-shrink: 0;
          margin-top: 2px;
          color: rgba(239,239,239,0.45);
          transition: color 0.2s ease-in-out, transform 0.3s ease;
        }
        body.pdv .ntcollection-faq-item.is-open .ntcollection-faq-icon {
          color: #87CDE7;
          transform: rotate(45deg);
        }

        /* Accordion — grid-template-rows animation (altura natural) */
        body.pdv .ntcollection-faq-a-wrap {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.32s ease;
        }
        body.pdv .ntcollection-faq-item.is-open .ntcollection-faq-a-wrap {
          grid-template-rows: 1fr;
        }
        body.pdv .ntcollection-faq-a {
          overflow: hidden;
          min-height: 0;
          font-family: 'Margem', 'Inter', sans-serif;
          font-size: 14px;
          line-height: 1.6;
          color: rgba(239,239,239,0.6);
          padding-bottom: 0;
          padding-right: 44px;
          transition: padding-bottom 0.32s ease;
        }
        body.pdv .ntcollection-faq-item.is-open .ntcollection-faq-a {
          padding-bottom: 24px;
        }

        /* ── Tablet ────────────────────────────────────── */
        @media (max-width: 1023px) {
          body.pdv .ntcollection-faq { padding: 80px 32px; }
          body.pdv .ntcollection-faq-inner { gap: 56px; }
          body.pdv .ntcollection-faq-title { font-size: 36px; }
          body.pdv .ntcollection-faq-grid {
            grid-template-columns: 1fr;
            row-gap: 48px;
          }
        }

        /* ── Mobile ────────────────────────────────────── */
        @media (max-width: 767px) {
          body.pdv .ntcollection-faq { padding: 64px 20px; }
          body.pdv .ntcollection-faq-inner { gap: 40px; }
          body.pdv .ntcollection-faq-title { font-size: 32px; }
          body.pdv .ntcollection-faq-q { font-size: 14px; padding: 20px 0; }
          body.pdv .ntcollection-faq-a { font-size: 13px; padding-right: 32px; }
          body.pdv .ntcollection-faq-col { gap: 20px; }
        }
      `}</style>
    </section>
  )
}
