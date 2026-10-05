import { useEffect, useRef } from 'react'
import Splide from '@splidejs/splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import '@splidejs/splide/css/core'

const artists = [
  { name: 'L7NNON',             tagline: 'Profetize sua Criação',                img: '/images/ntcollection/carrossel/L7.webp',            available: true },
  { name: 'Papatinho',          tagline: 'O Músculo Criativo',                   img: '/images/ntcollection/carrossel/Papatinho.webp',     available: true },
  { name: 'MC Pedrinho',        tagline: 'Crie do Que Você É',                   img: '/images/ntcollection/carrossel/Pedrinho.webp' },
  { name: 'Tasha & Tracie',     tagline: 'Gênio Começa Agora',                   img: '/images/ntcollection/carrossel/tasha-tracie.webp' },
  { name: 'Froid',              tagline: 'Elimine a Concorrência Sendo Você Mesmo', img: '/images/ntcollection/carrossel/Froid.webp' },
  { name: 'Rincon Sapiência',   tagline: 'Das Suas Raízes ao Mundo',             img: '/images/ntcollection/carrossel/Rincon.webp' },
  { name: 'Jean Tassy',         tagline: 'Crie de Dentro Para Fora',             img: '/images/ntcollection/carrossel/Jean.webp' },
  { name: 'Kyan',               tagline: 'A Identidade Que Não Negocia',         img: '/images/ntcollection/carrossel/Kayk.webp' },
  { name: 'Duckjay',            tagline: 'Construa Sua Frequência',              img: '/images/ntcollection/carrossel/duck-jay.webp' },
  { name: 'Zeca Baleiro',       tagline: 'Misture Tudo, Encontre o que é Seu',   img: '/images/ntcollection/carrossel/zeca-baleiro.png' },
  { name: 'Dora Morelenbaum',   tagline: 'A Arquitetura do Invisível',           img: '/images/ntcollection/carrossel/Dora.webp' },
  { name: 'Mauro Henrique',     tagline: 'Afine o Canal',                        img: '/images/ntcollection/carrossel/Mauro.webp' },
  { name: 'Hamilton de Holanda', tagline: 'A técnica a serviço da emoção',       img: '/images/ntcollection/carrossel/Hamilton.webp' },
]

// Split (para o mobile em 2 linhas parecerem diferentes)
const row1 = artists
const row2 = [...artists].reverse()

function Card({ artist }) {
  return (
    <div className="ntcollection-artists-card">
      <img
        src={artist.img}
        alt={artist.name}
        width="310"
        height="510"
        loading="lazy"
        decoding="async"
        className="ntcollection-artists-card-img"
      />
      <div className="ntcollection-artists-card-gradient" aria-hidden="true" />
      <span className="ntcollection-artists-card-mark" aria-hidden="true" />
      {artist.available ? (
        <span className="ntcollection-artists-card-badge is-live">Já disponível</span>
      ) : (
        <span className="ntcollection-artists-card-badge">Em breve</span>
      )}
      <div className="ntcollection-artists-card-text">
        <h3 className="ntcollection-artists-card-name">{artist.name}</h3>
        <p className="ntcollection-artists-card-tagline">{artist.tagline}</p>
      </div>
    </div>
  )
}

export default function ArtistsCarouselV2() {
  const desktopRef = useRef(null)
  const mobileRow1Ref = useRef(null)
  const mobileRow2Ref = useRef(null)

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 767px)').matches
    const instances = []

    if (!isMobile && desktopRef.current) {
      instances.push(
        new Splide(desktopRef.current, {
          type: 'loop',
          drag: 'free',
          snap: false,
          arrows: false,
          pagination: false,
          autoWidth: true,
          gap: '20px',
          autoScroll: {
            speed: 0.8,
            pauseOnHover: true,
            pauseOnFocus: false,
            rewind: false,
          },
        }).mount({ AutoScroll })
      )
    }

    if (isMobile && mobileRow1Ref.current) {
      instances.push(
        new Splide(mobileRow1Ref.current, {
          type: 'loop',
          drag: 'free',
          snap: false,
          arrows: false,
          pagination: false,
          autoWidth: true,
          gap: '12px',
          autoScroll: {
            speed: 0.6,
            pauseOnHover: false,
            pauseOnFocus: false,
          },
        }).mount({ AutoScroll })
      )
    }

    if (isMobile && mobileRow2Ref.current) {
      instances.push(
        new Splide(mobileRow2Ref.current, {
          type: 'loop',
          drag: 'free',
          snap: false,
          arrows: false,
          pagination: false,
          autoWidth: true,
          gap: '12px',
          autoScroll: {
            speed: -0.6,
            pauseOnHover: false,
            pauseOnFocus: false,
          },
        }).mount({ AutoScroll })
      )
    }

    return () => {
      instances.forEach(i => i?.destroy())
    }
  }, [])

  return (
    <section className="ntcollection-artists" id="artistas" aria-label="Artistas do NT Collection">

      {/* DESKTOP — 1 linha, auto-scroll, arrows, pausa no hover */}
      <div ref={desktopRef} className="splide ntcollection-artists-desktop">
        <div className="splide__track">
          <ul className="splide__list">
            {row1.map(a => (
              <li key={`d-${a.name}`} className="splide__slide">
                <Card artist={a} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* MOBILE — 2 linhas em direções opostas */}
      <div ref={mobileRow1Ref} className="splide ntcollection-artists-mobile">
        <div className="splide__track">
          <ul className="splide__list">
            {row1.map(a => (
              <li key={`m1-${a.name}`} className="splide__slide">
                <Card artist={a} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div ref={mobileRow2Ref} className="splide ntcollection-artists-mobile">
        <div className="splide__track">
          <ul className="splide__list">
            {row2.map(a => (
              <li key={`m2-${a.name}`} className="splide__slide">
                <Card artist={a} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        body.pdv .ntcollection-artists {
          background: #020305;
          padding: 80px 0;
          overflow: hidden;
        }

        /* ── Card ───────────────────────────────────────── */
        body.pdv .ntcollection-artists-card {
          position: relative;
          width: 310px;
          height: 510px;
          border-radius: 6px;
          overflow: hidden;
          background: #0a0b0e;
          flex-shrink: 0;
          user-select: none;
        }
        body.pdv .ntcollection-artists-card-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }
        body.pdv .ntcollection-artists-card-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(2,3,5,0.92) 0%, rgba(2,3,5,0.45) 45%, transparent 75%);
          z-index: 1;
        }
        body.pdv .ntcollection-artists-card-mark {
          position: absolute;
          top: 24px;
          left: 24px;
          z-index: 2;
          width: 24px;
          height: 2px;
          background: #87CDE7;
          border-radius: 1px;
        }
        body.pdv .ntcollection-artists-card-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          z-index: 2;
          padding: 5px 10px;
          border-radius: 4px;
          background: rgba(239,239,239,0.10);
          color: rgba(239,239,239,0.85);
          font-family: 'Margem', 'Inter', sans-serif;
          font-weight: 700;
          font-size: 10px;
          letter-spacing: 0.12em;
          line-height: 14px;
          text-transform: uppercase;
          backdrop-filter: blur(6px);
        }
        body.pdv .ntcollection-artists-card-badge.is-live {
          background: #87CDE7;
          color: #020305;
        }
        body.pdv .ntcollection-artists-card-text {
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: 24px;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        body.pdv .ntcollection-artists-card-name {
          margin: 0;
          font-family: 'Roslindale', Georgia, serif;
          font-weight: 400;
          font-size: 22px;
          line-height: 1.15;
          color: #EFEFEF;
        }
        body.pdv .ntcollection-artists-card-tagline {
          margin: 0;
          font-family: 'Margem', 'Inter', sans-serif;
          font-size: 13px;
          line-height: 1.4;
          color: rgba(239,239,239,0.55);
        }

        /* ── Splide wrappers ───────────────────────────── */
        body.pdv .ntcollection-artists-mobile { display: none; }

        body.pdv .ntcollection-artists-desktop .splide__track {
          overflow: visible;
        }
        body.pdv .ntcollection-artists-desktop .splide__list {
          display: flex;
          align-items: stretch;
        }
        body.pdv .ntcollection-artists-desktop .splide__slide {
          list-style: none;
          flex-shrink: 0;
        }

        /* ── Tablet ─────────────────────────────────────── */
        @media (max-width: 1024px) {
          body.pdv .ntcollection-artists { padding: 64px 0; }
        }

        /* ── Mobile ─────────────────────────────────────── */
        @media (max-width: 767px) {
          body.pdv .ntcollection-artists { padding: 48px 0; }
          body.pdv .ntcollection-artists-desktop { display: none; }
          body.pdv .ntcollection-artists-mobile  { display: block; }
          body.pdv .ntcollection-artists-mobile + .ntcollection-artists-mobile { margin-top: 12px; }

          body.pdv .ntcollection-artists-mobile .splide__track { overflow: hidden; }
          body.pdv .ntcollection-artists-mobile .splide__list  { display: flex; }
          body.pdv .ntcollection-artists-mobile .splide__slide {
            list-style: none;
            flex-shrink: 0;
          }

          body.pdv .ntcollection-artists-card {
            width: 200px;
            height: 320px;
          }
          body.pdv .ntcollection-artists-card-mark { top: 16px; left: 16px; width: 20px; }
          body.pdv .ntcollection-artists-card-badge {
            top: 12px; right: 12px;
            padding: 4px 8px;
            font-size: 9px;
            letter-spacing: 0.08em;
            line-height: 12px;
          }
          body.pdv .ntcollection-artists-card-text {
            left: 16px; right: 16px; bottom: 16px;
            gap: 4px;
          }
          body.pdv .ntcollection-artists-card-name { font-size: 17px; }
          body.pdv .ntcollection-artists-card-tagline { font-size: 11px; }
        }
      `}</style>
    </section>
  )
}
