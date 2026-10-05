import { useEffect, useState } from 'react'

/*
 * Cards exportados direto do Figma em /public/images/ntcollection/cards/:
 *   card{n}.webp (desktop) e card{n}m.webp (mobile)
 */

const CARDS = [
  { n: 1, size: 'big',   alt: 'Live Exclusiva com L7NNON e Papatinho' },
  { n: 2, size: 'big',   alt: '+2 Novas Coleções sendo adicionadas todos os meses' },
  { n: 3, size: 'small', alt: 'Assista onde quiser' },
  { n: 4, size: 'small', alt: 'Comunidade' },
  { n: 5, size: 'small', alt: 'Condição Exclusiva' },
  { n: 6, size: 'small', alt: 'Garantia de 7 dias' },
]

function Card({ item, isMobile }) {
  const file = isMobile ? `card${item.n}m.webp` : `card${item.n}.webp`
  return (
    <img
      className={`ntcollection-access-card ntcollection-access-card-${item.size}`}
      src={`/images/ntcollection/cards/${file}`}
      alt={item.alt}
      loading="lazy"
      decoding="async"
    />
  )
}

export default function AccessSectionV2() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return (
    <section className="ntcollection-access">
      <div className="ntcollection-access-header">
        <div className="ntcollection-access-pill">ACESSOS</div>
        <h2 className="ntcollection-access-title">
          O que você leva com a sua assinatura do NT Collection Founder&rsquo;s Edition
        </h2>
      </div>

      <div className="ntcollection-access-grid">
        {CARDS.map(item => <Card key={item.key} item={item} isMobile={isMobile} />)}
      </div>

      <style>{`
        body.pdv .ntcollection-access {
          background: #020305;
          padding: 120px 40px;
        }

        body.pdv .ntcollection-access-header {
          max-width: 560px;
          margin: 0 auto 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          text-align: center;
        }
        body.pdv .ntcollection-access-pill {
          display: inline-flex;
          align-items: center;
          padding: 6px 14px;
          border: 1px solid rgba(239,239,239,0.18);
          border-radius: 75px;
          color: rgba(239,239,239,0.9);
          font-family: 'Margem', 'Inter', sans-serif;
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 1px;
          text-transform: uppercase;
          line-height: 15px;
        }
        body.pdv .ntcollection-access-title {
          margin: 0;
          font-family: 'Roslindale', Georgia, serif;
          font-weight: 400;
          font-size: 36px;
          line-height: 1.3;
          color: #EFEFEF;
          text-wrap: balance;
        }

        body.pdv .ntcollection-access-grid {
          max-width: 1076px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        body.pdv .ntcollection-access-card-big   { grid-column: span 2; }
        body.pdv .ntcollection-access-card-small { grid-column: span 1; }

        body.pdv .ntcollection-access-card {
          display: block;
          width: 100%;
          height: auto;
        }

        @media (max-width: 1024px) {
          body.pdv .ntcollection-access { padding: 80px 32px; }
          body.pdv .ntcollection-access-grid { grid-template-columns: 1fr 1fr; }
          body.pdv .ntcollection-access-card-big,
          body.pdv .ntcollection-access-card-small { grid-column: span 1; }
        }

        @media (max-width: 767px) {
          body.pdv .ntcollection-access { padding: 64px 20px; }
          body.pdv .ntcollection-access-header { margin-bottom: 40px; gap: 20px; }
          body.pdv .ntcollection-access-title { font-size: 28px; }
          body.pdv .ntcollection-access-grid {
            grid-template-columns: 1fr;
            gap: 16px;
            max-width: 400px;
          }
        }
      `}</style>
    </section>
  )
}
