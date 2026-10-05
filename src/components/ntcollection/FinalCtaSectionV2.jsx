const glowSvg = '/images/pdv/Glow.svg'

export default function FinalCtaSectionV2() {
  const scrollToPricing = () => {
    const el = document.getElementById('planos')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="ntcollection-final">
      <img src={glowSvg} alt="" aria-hidden="true" className="ntcollection-final-glow" />

      <div className="ntcollection-final-inner">
        <h2 className="ntcollection-final-title">
          Entre para o NT Collection hoje e garanta as exclusividades do Founders Edition.
        </h2>
        <button
          type="button"
          className="ntcollection-final-cta"
          onClick={scrollToPricing}
        >
          SER UM MEMBRO FUNDADOR
        </button>
      </div>

      <style>{`
        body.pdv .ntcollection-final {
          position: relative;
          background: #020305;
          padding: 147px 40px;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        body.pdv .ntcollection-final-glow {
          position: absolute;
          top: 100%;
          left: 50%;
          width: 800px;
          height: auto;
          pointer-events: none;
          transform: translate(-50%, -50%);
          filter: blur(80px);
          opacity: 0.5;
          object-fit: cover;
          z-index: 0;
          user-select: none;
        }

        body.pdv .ntcollection-final-inner {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 42px;
          text-align: center;
        }

        body.pdv .ntcollection-final-title {
          margin: 0;
          max-width: 520px;
          font-family: 'Roslindale', Georgia, serif;
          font-weight: 400;
          font-size: 36px;
          line-height: 1.3;
          color: #EFEFEF;
          text-wrap: balance;
        }

        body.pdv .ntcollection-final-cta {
          padding: 24px 40px;
          background: #87CDE7;
          color: #020305;
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
          transition: background 0.2s ease-in-out, transform 0.1s ease;
        }
        body.pdv .ntcollection-final-cta:hover { background: #6BBCD8; }
        body.pdv .ntcollection-final-cta:active { transform: scale(0.98); }

        /* ── Tablet ─────────────────────────────────────── */
        @media (max-width: 1023px) {
          body.pdv .ntcollection-final { padding: 100px 32px; }
          body.pdv .ntcollection-final-glow {
            width: 680px;
            filter: blur(40px);
          }
        }

        /* ── Mobile ─────────────────────────────────────── */
        @media (max-width: 767px) {
          body.pdv .ntcollection-final { padding: 80px 20px; }
          body.pdv .ntcollection-final-inner { gap: 32px; }
          body.pdv .ntcollection-final-title { font-size: 30px; max-width: 300px; }
          body.pdv .ntcollection-final-cta {
            padding: 20px 32px;
            font-size: 16px;
            width: 100%;
            max-width: 360px;
          }
          body.pdv .ntcollection-final-glow {
            width: 520px;
            top: 80%;
          }
        }
      `}</style>
    </section>
  )
}
