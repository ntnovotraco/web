import { useCountdown, pad } from './countdown'

const iconFlash = '/images/ntcollection/pricing/icon-flash.svg'
const iconCheck = '/images/ntcollection/pricing/icon-check.svg'
const payVisa = '/images/ntcollection/pricing/visa.svg'
const payMC = '/images/ntcollection/pricing/mastercard.svg'
const payPP = '/images/ntcollection/pricing/paypal.svg'
const payPix = '/images/ntcollection/pricing/pix.svg'
const payBoleto = '/images/ntcollection/pricing/boleto.svg'

/* ─────────────────────────────────────────────────────────
   Lista de benefícios (coluna esquerda no desktop)
   ───────────────────────────────────────────────────────── */

const INCLUDES = [
  {
    icon: 'flash',
    label: 'Live exclusiva com L7 e Papatinho',
    badges: [
      { kind: 'founders', text: 'FOUNDERS EDITION' },
      { kind: 'strike', text: 'R$497' },
    ],
  },
  {
    icon: 'check',
    label: 'Todas as coleções disponíveis',
    badges: [{ kind: 'strike', text: 'R$699' }],
  },
  {
    icon: 'check',
    label: 'Duas coleções novas todos os meses',
    badges: [{ kind: 'strike', text: 'R$297' }],
  },
  { icon: 'check', label: 'Assista em qualquer dispositivo', badges: [] },
  { icon: 'check', label: '7 dias de garantia', badges: [] },
]

function Item({ item }) {
  const icon = item.icon === 'flash' ? iconFlash : iconCheck
  return (
    <div className="ntcollection-pricing-item">
      <img src={icon} alt="" aria-hidden="true" className="ntcollection-pricing-item-icon" />
      <span className="ntcollection-pricing-item-label">{item.label}</span>
      {item.badges.length > 0 && (
        <span className="ntcollection-pricing-item-badges">
          {item.badges.map((b, i) =>
            b.kind === 'founders' ? (
              <span key={i} className="ntcollection-pricing-badge-founders">{b.text}</span>
            ) : (
              <span key={i} className="ntcollection-pricing-badge-strike">{b.text}</span>
            )
          )}
        </span>
      )}
    </div>
  )
}

export default function PricingSectionV2() {
  const time = useCountdown()
  const clock = time
    ? `${pad(time.hours)} : ${pad(time.minutes)} : ${pad(time.seconds)}`
    : '00 : 00 : 00'

  const openCheckout = () => {
    window.dispatchEvent(new CustomEvent('pdv:open-checkout'))
  }

  return (
    <section className="ntcollection-pricing" id="planos">

      <div className="ntcollection-pricing-header">
        <div className="ntcollection-pricing-pill">CONDIÇÃO ESPECIAL POR TEMPO LIMITADO</div>
        <h2 className="ntcollection-pricing-title">
          Acesse todas as coleções. Por menos do que uma sessão de cinema.
        </h2>
      </div>

      <div className="ntcollection-pricing-card">

        {/* ── Coluna esquerda — Lista de benefícios ─────── */}
        <div className="ntcollection-pricing-left">
          <p className="ntcollection-pricing-left-label">O que está incluído na assinatura:</p>
          <div className="ntcollection-pricing-list">
            {INCLUDES.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </div>
        </div>

        {/* ── Coluna direita — Card azul de preço ───────── */}
        <div className="ntcollection-pricing-right">

          <div className="ntcollection-pricing-right-head">
            <p className="ntcollection-pricing-right-head-text">
              DESCONTO DE 28% + ACESSO À LIVE EXCLUSIVA COM L7NNON E PAPATINHO EXPIRA EM:
            </p>
            <div className="ntcollection-pricing-right-clock-pill">
              <span className="ntcollection-pricing-right-clock">{clock}</span>
            </div>
          </div>

          <h3 className="ntcollection-pricing-right-heading">Founders Edition</h3>

          <div className="ntcollection-pricing-right-price-block">
            <p className="ntcollection-pricing-right-price-from">
              DE <span className="ntcollection-pricing-right-price-strike">R$1.493,00</span> POR:
            </p>
            <div className="ntcollection-pricing-right-price-main">
              <span className="ntcollection-pricing-right-price-big">R$51,54</span>
              <p className="ntcollection-pricing-right-price-note">
                / por mês durante o período de um ano<br />
                ou R$497 à vista
              </p>
            </div>
          </div>

          <div className="ntcollection-pricing-right-cta-block">
            <button type="button" className="ntcollection-pricing-right-cta" onClick={openCheckout}>
              Garantir meu acesso agora
            </button>
            <div className="ntcollection-pricing-right-payments">
              <img src={payVisa} alt="Visa" loading="lazy" decoding="async" />
              <img src={payMC} alt="Mastercard" loading="lazy" decoding="async" />
              <img src={payPP} alt="PayPal" loading="lazy" decoding="async" />
              <img src={payPix} alt="Pix" loading="lazy" decoding="async" />
              <img src={payBoleto} alt="Boleto" loading="lazy" decoding="async" />
            </div>
          </div>

        </div>

      </div>

      <style>{`
        body.pdv .ntcollection-pricing {
          background: #020305;
          padding: 120px 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 60px;
        }

        /* ── Header ────────────────────────────────────── */
        body.pdv .ntcollection-pricing-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          text-align: center;
        }
        body.pdv .ntcollection-pricing-pill {
          display: inline-flex;
          align-items: center;
          padding: 6px 14px;
          border: 1px solid rgba(249,103,20,0.36);
          border-radius: 75px;
          color: #F96714;
          font-family: 'Margem', 'Inter', sans-serif;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 1px;
          text-transform: uppercase;
          line-height: 15px;
        }
        body.pdv .ntcollection-pricing-title {
          margin: 0;
          max-width: 740px;
          font-family: 'Roslindale', Georgia, serif;
          font-weight: 400;
          font-size: 36px;
          line-height: 1.3;
          color: #EFEFEF;
          text-wrap: balance;
        }

        /* ── Card outer ────────────────────────────────── */
        body.pdv .ntcollection-pricing-card {
          position: relative;
          width: 100%;
          max-width: 1078px;
          /* border: 1px solid #EFEFEF; */
          border-radius: 30px;
          padding: 20px 20px 20px 44px;
          display: flex;
          align-items: stretch;
          justify-content: space-between;
          gap: 32px;
          background:
            linear-gradient(112.96deg, rgba(239,239,239,0.12) 2.75%, rgba(239,239,239,0.024) 97.58%),
            #020305;
          box-shadow: inset 0 0 9.3px rgba(255,255,255,0.12);
        }

        /* ── Left column (lista) ───────────────────────── */
        body.pdv .ntcollection-pricing-left {
          flex: 1 1 454px;
          max-width: 454px;
          display: flex;
          flex-direction: column;
          gap: 29px;
          justify-content: center;
          padding: 48px 0;
        }
        body.pdv .ntcollection-pricing-left-label {
          margin: 0;
          font-family: 'Margem', 'Inter', sans-serif;
          font-weight: 700;
          font-size: 14px;
          line-height: 19.5px;
          color: #EFEFEF;
        }
        body.pdv .ntcollection-pricing-list {
          display: flex;
          flex-direction: column;
        }
        body.pdv .ntcollection-pricing-item {
          position: relative;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 20px 0;
          flex-wrap: wrap;
          border-top: 1px solid rgba(239,239,239,0.12);
        }
        body.pdv .ntcollection-pricing-item:last-child {
          border-bottom: 1px solid rgba(239,239,239,0.12);
        }
        body.pdv .ntcollection-pricing-item-icon {
          width: 24px; height: 24px;
          flex-shrink: 0;
          display: block;
        }
        body.pdv .ntcollection-pricing-item-label {
          font-family: 'Margem', 'Inter', sans-serif;
          font-size: 14px;
          line-height: 19.5px;
          color: rgba(239,239,239,0.96);
        }
        body.pdv .ntcollection-pricing-item-badges {
          display: inline-flex;
          gap: 7px;
          align-items: center;
          flex-wrap: wrap;
        }
        body.pdv .ntcollection-pricing-badge-founders {
          padding: 6px 12px;
          border: 1px solid rgba(249,103,20,0.3);
          border-radius: 75px;
          color: #F96714;
          font-family: 'Margem', 'Inter', sans-serif;
          font-weight: 700;
          font-size: 9.5px;
          letter-spacing: 1px;
          text-transform: uppercase;
          line-height: 15px;
          white-space: nowrap;
        }
        body.pdv .ntcollection-pricing-badge-strike {
          padding: 6px 12px;
          border: 1px solid rgba(255,255,255,0.26);
          border-radius: 78px;
          color: rgba(239,239,239,0.96);
          font-family: 'Margem', 'Inter', sans-serif;
          font-weight: 400;
          font-size: 10px;
          line-height: 19.5px;
          text-decoration: line-through;
          white-space: nowrap;
        }

        /* ── Right column (card azul) ──────────────────── */
        body.pdv .ntcollection-pricing-right {
          position: relative;
          flex: 0 0 514px;
          border: 1px solid #EFEFEF;
          border-radius: 14px;
          padding: 70px 50px;
          background: #87CDE7;
          box-shadow:
            0 0 36px 0 #020305,
            inset 3px 3px 4px 0 rgba(255,255,255,0.25);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 41px;
        }
        body.pdv .ntcollection-pricing-right-head {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          width: 100%;
        }
        body.pdv .ntcollection-pricing-right-head-text {
          margin: 0;
          max-width: 312px;
          font-family: 'Margem', 'Inter', sans-serif;
          font-weight: 900;
          font-size: 14px;
          line-height: 17px;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #000;
          text-align: center;
        }
        body.pdv .ntcollection-pricing-right-clock-pill {
          padding: 6px 15px;
          border: 1px solid rgba(249,103,20,0.3);
          border-radius: 75px;
          background: rgba(255,255,255,0.25);
        }
        body.pdv .ntcollection-pricing-right-clock {
          font-family: 'Margem', 'Inter', sans-serif;
          font-weight: 800;
          font-size: 20px;
          line-height: 1;
          color: #020305;
          white-space: nowrap;
          font-variant-numeric: tabular-nums;
        }
        body.pdv .ntcollection-pricing-right-heading {
          margin: 0;
          font-family: 'Roslindale', Georgia, serif;
          font-weight: 400;
          font-size: 36px;
          line-height: 1.06;
          color: #000;
          text-align: center;
        }
        body.pdv .ntcollection-pricing-right-price-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 22px;
          width: 100%;
        }
        body.pdv .ntcollection-pricing-right-price-from {
          margin: 0;
          font-family: 'Margem', 'Inter', sans-serif;
          font-weight: 700;
          font-size: 18px;
          line-height: 1.3;
          color: rgba(0,0,0,0.6);
          text-align: center;
        }
        body.pdv .ntcollection-pricing-right-price-strike {
          text-decoration: line-through;
        }
        body.pdv .ntcollection-pricing-right-price-main {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          width: 100%;
        }
        body.pdv .ntcollection-pricing-right-price-big {
          font-family: 'Univers Next Pro', 'Inter', sans-serif;
          font-weight: 700;
          font-size: 82px;
          line-height: 1;
          color: #000;
          letter-spacing: -0.02em;
        }
        body.pdv .ntcollection-pricing-right-price-note {
          margin: 0;
          max-width: 258px;
          font-family: 'Margem', 'Inter', sans-serif;
          font-weight: 500;
          font-size: 14px;
          line-height: 1.3;
          color: rgba(2,3,5,0.59);
          text-align: center;
        }
        body.pdv .ntcollection-pricing-right-cta-block {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        body.pdv .ntcollection-pricing-right-cta {
          width: 100%;
          padding: 24px 18px;
          background: #020305;
          color: #EFEFEF;
          font-family: 'Margem', 'Inter', sans-serif;
          font-weight: 700;
          font-size: 18px;
          letter-spacing: 0.52px;
          line-height: 19.5px;
          text-transform: uppercase;
          border: none;
          border-radius: 14px;
          cursor: pointer;
          box-shadow: inset 3px 3px 4px 0 rgba(255,255,255,0.25);
          transition: background 0.2s, transform 0.1s;
        }
        body.pdv .ntcollection-pricing-right-cta:hover { background: #14161A; }
        body.pdv .ntcollection-pricing-right-cta:active { transform: scale(0.98); }
        body.pdv .ntcollection-pricing-right-payments {
          display: flex;
          align-items: center;
          gap: 7px;
          flex-wrap: wrap;
          justify-content: center;
        }
        body.pdv .ntcollection-pricing-right-payments img {
          display: block;
        }

        /* ── Tablet ────────────────────────────────────── */
        @media (max-width: 1023px) {
          body.pdv .ntcollection-pricing { padding: 80px 32px; gap: 40px; }
          body.pdv .ntcollection-pricing-card {
            flex-direction: column-reverse;
            padding: 20px;
            gap: 20px;
          }
          body.pdv .ntcollection-pricing-left {
            flex: 1 1 auto;
            max-width: 100%;
            padding: 12px 12px 24px;
          }
          body.pdv .ntcollection-pricing-right {
            flex: 1 1 auto;
            width: 100%;
            padding: 48px 32px;
          }
        }

        /* ── Mobile ────────────────────────────────────── */
        @media (max-width: 767px) {
          body.pdv .ntcollection-pricing { padding: 48px 20px; gap: 32px; }
          body.pdv .ntcollection-pricing-title { font-size: 26px; }
          body.pdv .ntcollection-pricing-card {
            border-radius: 24px;
            padding: 16px;
            gap: 24px;
          }
          body.pdv .ntcollection-pricing-right {
            padding: 40px 24px;
            border-radius: 12px;
          }
            body.pdv .ntcollection-pricing-pill {
              max-width: 240px
            }
          body.pdv .ntcollection-pricing-right-head-text { font-size: 13px; line-height: 16px; }
          body.pdv .ntcollection-pricing-right-heading { font-size: 32px; }
          body.pdv .ntcollection-pricing-right-price-big { font-size: 68px; }
          body.pdv .ntcollection-pricing-right-cta { font-size: 16px; padding: 20px 16px; }
          body.pdv .ntcollection-pricing-left-label  { font-size: 13px; }
          body.pdv .ntcollection-pricing-item-label  { font-size: 13px; }
          body.pdv .ntcollection-pricing-item        { padding: 16px 0; }
        }

        @media (max-width: 374px) {
          body.pdv .ntcollection-pricing { padding: 40px 16px; }
          body.pdv .ntcollection-pricing-right { padding: 32px 20px; }
          body.pdv .ntcollection-pricing-right-price-big { font-size: 60px; }
        }
      `}</style>
    </section>
  )
}
