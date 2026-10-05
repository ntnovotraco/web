import { useRef, useState, useEffect } from 'react'

const imgPedrinho = '/images/pdv/Pedrinho.png'
const imgTasha = '/images/pdv/tasha-tracie.png'
const imgFroid = '/images/pdv/Froid.png'
const imgRincon = '/images/pdv/Rincon.png'
const imgJean = '/images/pdv/Jean.png'
const imgKayk = '/images/pdv/Kayk.png'
const imgDuckjay = '/images/pdv/duck-jay.png'
const imgHamilton = '/images/pdv/Hamilton.png'
const imgZeca = '/images/pdv/zeca-baleiro.png'
const imgDora = '/images/pdv/Dora.png'
const imgMauro = '/images/pdv/Mauro.png'

const BLUE = '#87CDE7'
const OW = '#EFEFEF'
const EDITORIAL = 'Roslindale, Georgia, serif'

const upcomingArtists = [
  { name: 'MC Pedrinho', title: 'Crie do Que Você É', tagline: 'A autenticidade não é estratégia.', img: imgPedrinho },
  { name: 'Tasha & Tracie', title: 'Gênio Começa Agora', tagline: 'Gênio não espera condição. Começa agora.', img: imgTasha },
  { name: 'Froid', title: 'Elimine a Concorrência Sendo Você Mesmo', tagline: 'A criatividade não se produz: ela se registra.', img: imgFroid },
  { name: 'Rincon Sapiência', title: 'Das Suas Raízes ao Mundo', tagline: 'A profundidade da sua raiz determina a altura do seu alcance.', img: imgRincon },
  { name: 'Jean Tassy', title: 'Crie de Dentro Para Fora', tagline: 'A obra mais verdadeira nasce quando você para de se esconder.', img: imgJean },
  { name: 'Kyan', title: 'A Identidade Que Não Negocia', tagline: 'Nova geração. Sem concessão.', img: imgKayk },
  { name: 'Duckjay', title: 'Construa Sua Frequência', tagline: 'De um barraco em Planaltina a 3,5 bilhões de visualizações.', img: imgDuckjay },
  { name: 'Zeca Baleiro', title: 'Misture Tudo, Encontre o que é Seu', tagline: 'A curiosidade voraz é o único método criativo.', img: imgZeca },
  { name: 'Dora Morelenbaum', title: 'A Arquitetura do Invisível', tagline: 'O invisível é a matéria mais real que existe.', img: imgDora },
  { name: 'Mauro Henrique', title: 'Afine o Canal', tagline: 'O artista verdadeiro não inventa do nada. Ele se sintoniza.', img: imgMauro },
  { name: 'Hamilton de Holanda', title: 'A técnica a serviço da emoção', tagline: 'Como a excelência técnica se torna humildade.', img: imgHamilton },
]

const CARD_W = 340
const CARD_GAP = 20

function useContainerLeft() {
  const [left, setLeft] = useState(40)
  useEffect(() => {
    const calc = () => {
      const vw = window.innerWidth
      if (vw < 768) setLeft(20)
      else if (vw < 1280) setLeft(40)
      else setLeft(Math.round((vw - 1280) / 2 + 40))
    }
    calc()
    window.addEventListener('resize', calc)
    return () => window.removeEventListener('resize', calc)
  }, [])
  return left
}

function ArtistCard({ artist, index, available = false, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        flexShrink: 0, width: `${CARD_W}px`,
        scrollSnapAlign: 'start',
        background: '#0a0a0d',
        border: available ? '1px solid rgba(135,205,231,0.25)' : '1px solid rgba(239,239,239,0.06)',
        borderRadius: '6px',
        overflow: 'hidden',
        transition: 'border-color 0.3s',
        cursor: onClick ? 'pointer' : 'default',
      }}
      onMouseOver={e => e.currentTarget.style.borderColor = available ? 'rgba(135,205,231,0.5)' : 'rgba(135,205,231,0.3)'}
      onMouseOut={e => e.currentTarget.style.borderColor = available ? 'rgba(135,205,231,0.25)' : 'rgba(239,239,239,0.06)'}
    >
      <div style={{
        aspectRatio: '2/3',
        background: artist.img
          ? 'none'
          : `linear-gradient(135deg, hsl(${(index * 27) % 360}, 20%, 10%) 0%, #020305 100%)`,
        position: 'relative', overflow: 'hidden',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        padding: '24px',
      }}>
        {artist.img && (
          <img
            src={artist.img}
            alt={artist.name}
            loading="lazy"
            style={{
              position: 'absolute', inset: 0, width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center top',
            }}
          />
        )}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(2,3,5,0.15) 0%, rgba(2,3,5,0.1) 40%, rgba(2,3,5,0.75) 100%)',
        }} />
        <div style={{ position: 'relative', zIndex: 1, width: '24px', height: '2px', background: BLUE, opacity: 0.7 }} />

        {available ? (
          <div className="badge-shimmer" style={{
            position: 'absolute', top: '16px', right: '16px', zIndex: 1,
            display: 'inline-block', fontSize: '9px', letterSpacing: '0.15em',
            textTransform: 'uppercase', padding: '5px 10px',
            background: BLUE, color: '#020305', fontWeight: 700,
            borderRadius: '2px',
          }}>Já disponível</div>
        ) : (
          <span className="badge-shimmer" style={{
            position: 'absolute', top: '16px', right: '16px', zIndex: 1,
            display: 'inline-block', fontSize: '9px', letterSpacing: '0.15em',
            textTransform: 'uppercase', padding: '5px 10px',
            background: 'rgba(239,239,239,0.1)', color: 'rgba(239,239,239,0.5)',
            borderRadius: '2px',
          }}>Em breve</span>
        )}

        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontFamily: EDITORIAL, fontSize: '17px', color: OW, fontWeight: 400, marginBottom: '8px', lineHeight: 1.3 }}>
            {artist.name}
          </p>
          <p style={{ fontSize: '12px', color: 'rgba(239,239,239,0.35)', lineHeight: 1.5 }}>
            {artist.title}
          </p>
        </div>
      </div>

      <div style={{ padding: '20px 24px', borderTop: '1px solid rgba(239,239,239,0.05)' }}>
        <p style={{ fontSize: '12px', color: available ? 'rgba(135,205,231,0.5)' : 'rgba(239,239,239,0.3)', lineHeight: 1.6 }}>
          "{artist.tagline}"
        </p>
      </div>
    </div>
  )
}

export default function UpcomingArtists({ navigate, featuredArtist }) {
  const trackRef = useRef(null)
  const left = useContainerLeft()

  const scroll = (dir) => {
    if (!trackRef.current) return
    trackRef.current.scrollBy({ left: dir * (CARD_W + CARD_GAP) * 2, behavior: 'smooth' })
  }

  return (
    <section className="r-section" style={{ padding: '80px 0', background: '#020305', borderTop: '1px solid rgba(239,239,239,0.07)' }}>

      <div className="r-upcoming-header" style={{
        paddingLeft: `${left}px`,
        paddingRight: `${left}px`,
        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
        marginBottom: '80px',
      }}>
        <div>
          <p style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: BLUE, marginBottom: '16px' }}>
            A coleção está crescendo
          </p>
          <h2 style={{ fontFamily: EDITORIAL, fontSize: 'clamp(2rem, 4vw, 3rem)', color: OW, fontWeight: 400, lineHeight: 1.1 }}>
            O que vem por aí
          </h2>
          <p style={{ fontSize: '13px', color: 'rgba(239,239,239,0.35)', marginTop: '20px' }}>
            Já incluído na sua assinatura.
          </p>
        </div>
        <div className="r-arrow-controls" style={{ display: 'flex', gap: '12px', flexShrink: 0 }}>
          {[{ dir: -1, label: '←' }, { dir: 1, label: '→' }].map(({ dir, label }) => (
            <button key={dir} onClick={() => scroll(dir)} style={{
              width: '48px', height: '48px', border: '1px solid rgba(239,239,239,0.15)',
              background: 'transparent', color: 'rgba(239,239,239,0.6)', fontSize: '18px',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s',
            }}
              onMouseOver={e => { e.currentTarget.style.borderColor = BLUE; e.currentTarget.style.color = BLUE }}
              onMouseOut={e => { e.currentTarget.style.borderColor = 'rgba(239,239,239,0.15)'; e.currentTarget.style.color = 'rgba(239,239,239,0.6)' }}>
              {label}
            </button>
          ))}
        </div>
      </div>

      <div
        ref={trackRef}
        style={{
          display: 'flex',
          gap: `${CARD_GAP}px`,
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          scrollPaddingLeft: `${left}px`,
          paddingLeft: `${left}px`,
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          cursor: 'grab',
        }}
        onMouseDown={e => {
          const el = e.currentTarget
          el.style.cursor = 'grabbing'
          const startX = e.pageX - el.offsetLeft
          const startScroll = el.scrollLeft
          const onMove = ev => { el.scrollLeft = startScroll - (ev.pageX - el.offsetLeft - startX) }
          const onUp = () => {
            el.style.cursor = 'grab'
            window.removeEventListener('mousemove', onMove)
            window.removeEventListener('mouseup', onUp)
          }
          window.addEventListener('mousemove', onMove)
          window.addEventListener('mouseup', onUp)
        }}
      >
        {featuredArtist && (
          <ArtistCard
            artist={featuredArtist}
            index={0}
            available={true}
            onClick={() => navigate?.(featuredArtist.page)}
          />
        )}

        {upcomingArtists.map((artist, i) => (
          <ArtistCard key={artist.name} artist={artist} index={i} />
        ))}

        <div style={{ flexShrink: 0, width: `${left}px` }} />
      </div>

      <style>{`div::-webkit-scrollbar { display: none; }`}</style>

      <div style={{ paddingLeft: `${left}px`, paddingRight: `${left}px`, marginTop: '48px' }}>
        <p style={{ fontSize: '13px', color: 'rgba(239,239,239,0.3)' }}>
          Novas temporadas. Novos artistas. Mesma profundidade.
        </p>
      </div>
    </section>
  )
}
