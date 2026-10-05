import Navbar from '../Navbar'
import ArtistHero from '../ArtistHero'
import UpcomingArtists from '../UpcomingArtists'
import AboutSection from '../AboutSection'
import CommunitySection from '../CommunitySection'
import Footer from '../Footer'
import PricingSection from '../PricingSection'
import FaqSection from '../FaqSection'

const heroImg = '/images/pdv/L7.jpg'
const imgPapatinho = '/images/pdv/Papatinho.png'

const BG = '#020305'
const OW = '#EFEFEF'
const BLUE = '#87CDE7'
const MUTED = 'rgba(239,239,239,0.45)'
const BORDER = 'rgba(239,239,239,0.07)'
const EDITORIAL = 'Roslindale, Georgia, serif'
const LBG = '#EFEFEF'
const LTEXT = '#020305'
const LMUTED = 'rgba(2,3,5,0.5)'

const S = {
  section: { padding: '80px 0', borderTop: `1px solid ${BORDER}` },
  container: { maxWidth: '1280px', margin: '0 auto', padding: '0 40px' },
}

const papatinhoFeatured = {
  name: 'Papatinho',
  title: 'O Músculo Criativo Que Ninguém te Ensina',
  tagline: 'Do baile funk ao Record Plant. O método de quem construiu uma geração.',
  img: imgPapatinho,
  page: 'papatinho',
}

export default function L7nnon({ bannerHeight = 36, navigate }) {
  return (
    <div style={{ background: BG, color: OW, minHeight: '100vh' }}>
      <Navbar topOffset={bannerHeight} navigate={navigate} />

      <ArtistHero
        bannerHeight={bannerHeight}
        collectionLabel="Coleção 01"
        titleLines={['Profetize', 'sua Criação']}
        artistName="L7NNON"
        description="As palavras que você fala hoje são a planta baixa da vida que você vai habitar. Defina o que você quer antes de tê-lo."
        stats={[
          { value: '14', label: 'episódios' },
          { value: '2h 34min', label: 'de conteúdo' },
        ]}
        img={heroImg}
        layoutId="artist-img-l7nnon"
        navigate={navigate}
      />

      <section className="r-section" style={{ padding: '80px 0', borderTop: `1px solid ${BORDER}` }}>
        <div className="r-container" style={S.container}>
          <p style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: BLUE, marginBottom: '24px' }}>
            Conteúdo
          </p>
          <h2 style={{ fontFamily: EDITORIAL, fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, color: OW, marginBottom: '72px', maxWidth: '560px', lineHeight: 1.2 }}>
            O que te espera
          </h2>
          <div className="r-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {[
              {
                num: '01',
                title: 'A palavra que arquiteta a realidade',
                body: 'O que você nomeia, você convoca. L7NNON mostra como a linguagem é a primeira ferramenta criativa — e por que declarar antes de ter é o ponto de partida de tudo.',
              },
              {
                num: '02',
                title: 'O preço e a força de ser real',
                body: 'Autenticidade custa. Mas é o único ativo que não se replica. Entenda como a vulnerabilidade vira vantagem e por que o mercado sempre paga mais pelo genuíno.',
              },
              {
                num: '03',
                title: 'O legado como única métrica que resiste',
                body: 'Streams somem, trends passam. O que fica é o que você construiu com intenção. Entenda como L7NNON tomou decisões de carreira a longo prazo.',
              },
            ].map((item) => (
              <div key={item.num} style={{ background: 'rgba(239,239,239,0.03)', border: `1px solid ${BORDER}`, borderRadius: '12px', padding: '48px 40px' }}>
                <p style={{ fontFamily: EDITORIAL, fontSize: '2.2rem', fontWeight: 300, color: 'rgba(239,239,239,0.1)', lineHeight: 1, marginBottom: '32px' }}>{item.num}</p>
                <h3 style={{ fontFamily: EDITORIAL, fontSize: '1.35rem', fontWeight: 400, color: OW, marginBottom: '16px', lineHeight: 1.3 }}>{item.title}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.8, color: MUTED }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="trailer" className="r-section" style={{ padding: '80px 0', borderTop: `1px solid ${BORDER}` }}>
        <div className="r-container" style={S.container}>
          <div style={{ position: 'relative', aspectRatio: '16/9', background: '#0d0d12', border: `1px solid ${BORDER}`, cursor: 'pointer', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '88px', height: '88px', borderRadius: '50%', border: `2px solid rgba(240,239,235,0.25)`, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 0.3s' }}>
                <svg width="32" height="32" fill={OW} viewBox="0 0 24 24" style={{ marginLeft: '4px' }}><path d="M8 5v14l11-7z" /></svg>
              </div>
            </div>
            <div style={{ position: 'absolute', bottom: '32px', left: '32px', display: 'flex', gap: '12px' }}>
              <button style={{ fontSize: '12px', padding: '10px 20px', background: 'rgba(240,239,235,0.12)', color: OW, border: 'none', cursor: 'pointer', backdropFilter: 'blur(8px)', letterSpacing: '0.05em', transition: 'background 0.2s' }}
                onMouseOver={e => e.currentTarget.style.background = 'rgba(240,239,235,0.22)'}
                onMouseOut={e => e.currentTarget.style.background = 'rgba(240,239,235,0.12)'}>
                Trailer
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="r-section" style={{ padding: '80px 0', borderTop: `1px solid ${BORDER}` }}>
        <div className="r-quote-inner" style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px', textAlign: 'center' }}>
          <p style={{ fontFamily: EDITORIAL, fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: OW, lineHeight: 1.55, marginBottom: '32px' }}>
            "Nunca pensei em ensinar. Aí percebi que guardar isso só pra mim seria egoísmo."
          </p>
          <p style={{ fontSize: '13px', color: MUTED, letterSpacing: '0.1em' }}>— L7NNON</p>
        </div>
      </section>

      <section className="r-section" style={{ padding: '80px 0', background: LBG }}>
        <div className="r-container" style={S.container}>
          <div className="r-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '64px' }}>
            {[
              { title: 'Direto da fonte', body: 'Quem criou, contando como criou. Em primeira pessoa, sem roteiro.' },
              { title: 'No seu tempo', body: 'Episódios curtos. Assista quando e onde quiser.' },
              { title: 'Em todos os seus dispositivos', body: 'Celular, tablet, computador. A coleção vai com você.' },
            ].map((item) => (
              <div key={item.title} style={{ borderTop: '2px solid rgba(2,3,5,0.15)', paddingTop: '40px' }}>
                <h3 style={{ fontFamily: EDITORIAL, fontSize: '1.4rem', color: LTEXT, marginBottom: '16px', fontWeight: 400 }}>{item.title}</h3>
                <p style={{ fontSize: '15px', lineHeight: 1.75, color: LMUTED }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <UpcomingArtists navigate={navigate} featuredArtist={papatinhoFeatured} />

      <AboutSection />
      <CommunitySection />

      <PricingSection navigate={navigate} />
      <FaqSection />

      <Footer />
    </div>
  )
}
