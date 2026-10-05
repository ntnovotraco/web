const logoWhite = '/images/pdv/logo-white.svg'
const glowSvg = '/images/pdv/Glow.svg'

// Vídeo do mockup: autoplay mudo em loop (desktop e mobile).
const MOCKUP_VIDEO_ID = 'NiNrAWRHj4Q'

const EPISODES = [
  { num: '01', title: 'O Que Só Você Consegue Ouvir', duration: '18:42', state: 'done' },
  { num: '02', title: 'A Escola Que Ninguém Construiu Para Você', duration: '22:15', state: 'done' },
  { num: '03', title: 'Encontre a Matemática por Trás do Que Você Sente', duration: '19:38', state: 'done' },
  { num: '04', title: 'Comece com o Que Está Imperfeito', duration: '16:52', state: 'done' },
  { num: '05', title: 'Escute o Passado Para Criar o Futuro', duration: '24:18', state: 'active' },
  { num: '06', title: 'Reconheça o Momento em Que Você Achou', duration: '20:45', state: 'locked' },
  { num: '07', title: 'Construa Sua Própria Biblioteca', duration: '23:12', state: 'locked' },
  { num: '08', title: 'Produza Volume Para Encontrar o Extraordinário', duration: '21:30', state: 'locked' },
  { num: '09', title: 'Registre Antes que a Ideia Escape', duration: '17:25', state: 'locked' },
  { num: '10', title: 'Confie no Que Você Sente Antes de Explicar', duration: '19:18', state: 'locked' },
  { num: '11', title: 'A Combinação Que Ninguém Teria Tentado', duration: '22:40', state: 'locked' },
  { num: '12', title: 'Encontre o Timbre Que É Só Seu', duration: '20:15', state: 'locked' },
  { num: '13', title: 'Assine Tudo Que Você Cria', duration: '18:55', state: 'locked' },
  { num: '14', title: 'A Anatomia de Uma Batida Que Parou o Brasil', duration: '28:30', state: 'locked', special: true },
]

function FlowerIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="64" viewBox="0 0 54 64" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M32.7946 24.4411C32.6203 23.8823 32.3069 23.377 31.8838 22.9724C31.4607 22.5679 30.9417 22.2775 30.3756 22.1285C28.7754 21.8457 27.1379 21.8457 25.5376 22.1285C24.9274 22.1813 24.3137 22.1813 23.7034 22.1285C23.5218 22.1212 23.3434 22.0774 23.179 21.9998C23.0146 21.9221 22.8675 21.8122 22.7465 21.6766C22.0819 20.6399 22.9591 19.9487 24.0224 19.4702C25.4385 18.8254 26.987 18.5248 28.5415 18.593C28.7353 18.6514 28.9444 18.6311 29.1234 18.5366C29.3025 18.4421 29.4372 18.2809 29.4984 18.0879C29.5174 17.9916 29.5165 17.8924 29.4956 17.7964C29.4747 17.7005 29.4344 17.6098 29.3771 17.5301C29.3198 17.4504 29.2467 17.3833 29.1624 17.3329C29.0781 17.2825 28.9844 17.25 28.887 17.2373C28.0151 17.0435 27.1192 16.9808 26.2288 17.0512C26.2169 16.9808 26.2169 16.9089 26.2288 16.8386C26.2555 16.6356 26.2555 16.4301 26.2288 16.2272C26.2689 16.0343 26.2689 15.8352 26.2288 15.6423C26.0959 15.1373 25.8566 14.7385 25.6971 14.2601C25.6971 14.0345 25.6075 13.8181 25.448 13.6586C25.2885 13.499 25.0721 13.4094 24.8465 13.4094C24.6185 13.4163 24.4021 13.5118 24.2433 13.6756C24.0845 13.8393 23.9957 14.0585 23.9959 14.2866C23.8226 14.7824 23.6806 15.2884 23.5705 15.8018C23.5574 16.0143 23.5574 16.2274 23.5705 16.4398C23.543 16.6516 23.543 16.866 23.5705 17.0778L23.73 17.4234C22.7611 17.6485 21.8535 18.0841 21.0718 18.6993C20.4744 19.198 20.0818 19.8993 19.969 20.6693C19.8562 21.4392 20.0311 22.2237 20.4604 22.8728C20.7311 23.366 21.1116 23.7904 21.5726 24.1131C22.0335 24.4357 22.5625 24.648 23.1186 24.7336C24.6734 24.9056 26.2424 24.9056 27.7971 24.7336C28.3612 24.651 28.9343 24.651 29.4984 24.7336C29.6508 24.7662 29.7917 24.8389 29.9067 24.9441C30.0217 25.0494 30.1065 25.1833 30.1526 25.3322C30.1986 25.4811 30.2041 25.6396 30.1686 25.7913C30.133 25.9431 30.0577 26.0826 29.9503 26.1956C29.4907 26.6801 28.9396 27.0686 28.3288 27.3386C26.9849 27.9398 25.5201 28.2218 24.049 28.1627C23.621 28.1196 23.2056 27.9932 22.8262 27.7905C22.3871 27.5657 21.9766 27.2891 21.6034 26.9665C21.5162 26.8966 21.416 26.8446 21.3087 26.8135C21.2013 26.7823 21.0889 26.7727 20.9778 26.785C20.8667 26.7974 20.7591 26.8315 20.6612 26.8854C20.5633 26.9394 20.477 27.0121 20.4072 27.0994C20.2577 27.2574 20.1743 27.4667 20.1743 27.6842C20.1743 27.9018 20.2577 28.111 20.4072 28.269C20.9457 28.7623 21.5337 29.1988 22.1617 29.5716C22.6301 29.8127 23.1318 29.983 23.6503 30.0766C24.1278 30.1198 24.6082 30.1198 25.0857 30.0766C25.0731 30.2802 25.0731 30.4844 25.0857 30.688C25.0706 30.8915 25.0706 31.0959 25.0857 31.2994C25.2452 31.8045 25.4579 32.2032 25.644 32.6817C25.6439 32.7922 25.6661 32.9016 25.7091 33.0033C25.7522 33.1051 25.8153 33.1971 25.8946 33.274C25.974 33.3509 26.068 33.411 26.1711 33.4508C26.2741 33.4906 26.3842 33.5093 26.4946 33.5058C26.6062 33.5097 26.7173 33.4902 26.8209 33.4485C26.9244 33.4068 27.0181 33.3439 27.0958 33.2637C27.1734 33.1835 27.2334 33.0879 27.2718 32.9831C27.3102 32.8782 27.3262 32.7665 27.3187 32.6551C27.5093 32.1629 27.6604 31.6562 27.7706 31.1399C27.7984 30.9193 27.7984 30.696 27.7706 30.4754C27.7983 30.2725 27.7983 30.0668 27.7706 29.864C29.0397 29.6041 30.2426 29.0886 31.306 28.3488C31.9438 27.9464 32.4337 27.3479 32.7022 26.6433C32.9706 25.9386 33.0031 25.1658 32.7946 24.4411Z" fill="#020305"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.84967 23.351C5.53333 21.2184 4.81199 18.7723 4.76057 16.2668C4.70915 13.7612 5.32952 11.2876 6.55726 9.1028C7.08842 8.14311 7.85521 7.33449 8.78535 6.75315C9.7155 6.17181 10.7784 5.8369 11.8737 5.77999C14.3063 5.57665 16.7435 6.11413 18.8649 7.32177C20.4465 8.35192 21.7956 9.70097 22.8257 11.2826C23.8624 12.4788 24.846 12.2129 25.484 11.6813C25.7633 11.3556 26.0041 10.9988 26.2017 10.618C26.8397 9.58128 27.3182 7.95975 27.9296 7.1357C28.9963 5.58674 30.4547 4.34843 32.1562 3.54706C33.8132 2.76529 35.6814 2.55044 37.4727 2.93567C38.6329 3.25126 39.7101 3.81694 40.6285 4.59302C41.5469 5.36909 42.2844 6.33676 42.7892 7.4281C43.9104 9.67558 44.5102 12.1471 44.5436 14.6585C44.4142 19.5666 42.8628 24.3316 40.0777 28.3751C37.4077 32.5314 33.5036 35.7476 28.9131 37.5726C28.8095 37.6083 28.714 37.6644 28.6323 37.7374C28.5505 37.8105 28.4842 37.8991 28.4372 37.9982C28.3902 38.0972 28.3634 38.2046 28.3583 38.3141C28.3533 38.4236 28.3702 38.533 28.408 38.6359C28.441 38.7419 28.4951 38.8402 28.567 38.9248C28.6388 39.0094 28.7271 39.0786 28.8264 39.1283C28.9257 39.178 29.034 39.207 29.1449 39.2138C29.2557 39.2205 29.3667 39.2048 29.4713 39.1676C34.472 37.3121 38.7665 33.9378 41.7524 29.5181C44.8043 25.1525 46.5473 20.0068 46.7765 14.6851C46.8603 11.185 45.9377 7.73447 44.1183 4.74328C42.802 2.59233 40.7233 1.01666 38.2967 0.330587C35.8988 -0.276959 33.365 -0.0423469 31.1195 0.995148C28.9052 1.95425 26.9938 3.49807 25.5903 5.461C25.0477 6.4172 24.5768 7.41234 24.1814 8.43824C23.1089 6.97733 21.7527 5.74774 20.1941 4.82302C17.0851 3.07409 13.4341 2.55251 9.95981 3.36099C8.73028 3.66629 7.58204 4.23587 6.59503 5.03007C5.60801 5.82428 4.80592 6.82403 4.24458 7.95975C2.90156 10.5277 2.26291 13.4057 2.39366 16.3007C2.5244 19.1957 3.41986 22.0044 4.98889 24.4409C9.36819 31.0383 15.7377 36.0668 23.1713 38.7954C24.0751 39.2207 24.5536 38.0511 24.0219 37.4929C16.9378 34.7282 10.9215 29.7736 6.84967 23.351Z" fill="#020305"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M53.4231 42.8625C53.3783 42.1092 53.0564 41.3991 52.5193 40.8689C52.2604 40.6956 51.9695 40.5757 51.6637 40.5164C51.3578 40.457 51.0432 40.4594 50.7383 40.5233C49.356 40.736 45.8737 41.56 45.5813 41.5866C41.0217 41.7958 36.7021 43.6904 33.4597 46.9031C30.9306 49.902 29.4141 53.6236 29.1268 57.5361C28.9141 56.2069 28.728 54.8778 28.542 53.336C28.3559 51.7943 28.09 50.093 27.8508 48.5246C27.261 45.3588 26.8351 42.1647 26.5748 38.9549C26.5859 38.8585 26.5772 38.7609 26.5494 38.6679C26.5216 38.575 26.4752 38.4886 26.4131 38.4141C26.351 38.3395 26.2744 38.2783 26.188 38.2342C26.1016 38.1901 26.0071 38.164 25.9103 38.1575C23.8369 37.9448 24.9533 41.6132 24.9533 47.6208C25.0177 48.8689 25.1598 50.1119 25.3786 51.3424C25.5647 52.5651 25.804 53.8145 26.0698 55.0107C26.0577 55.1434 26.0577 55.2768 26.0698 55.4095C24.4442 53.0979 22.3969 51.1138 20.0356 49.5613C17.7738 48.1967 15.1487 47.5567 12.5127 47.7271C11.3944 47.7878 10.2875 47.9842 9.2165 48.312C7.7013 48.7373 6.23927 49.3753 4.80381 49.9069L2.41139 50.7044H1.13543C0.758274 50.8135 0.435766 51.0601 0.23163 51.3955C0.0803363 51.634 0 51.9106 0 52.193C0 52.4754 0.0803363 52.752 0.23163 52.9905C0.753691 53.7336 1.43475 54.3511 2.22531 54.7981C3.6076 55.6487 5.52154 56.3664 6.42534 56.8981C10.2522 59.3173 14.4572 61.0784 18.8659 62.1083C21.9322 62.763 25.1276 62.4183 27.9837 61.1247C28.2717 61.8773 28.6183 62.6061 29.0204 63.3045C29.0734 63.4051 29.1459 63.4941 29.2338 63.5662C29.3218 63.6383 29.4232 63.6921 29.5323 63.7243C29.6413 63.7565 29.7557 63.7665 29.8687 63.7538C29.9817 63.741 30.0909 63.7057 30.1901 63.65C30.3862 63.5431 30.5325 63.3632 30.5971 63.1493C30.6618 62.9355 30.6397 62.7047 30.5356 62.507C30.4289 62.3242 30.3484 62.1274 30.2964 61.9222C30.4176 61.9922 30.5551 62.029 30.6951 62.029C30.8351 62.029 30.9726 61.9922 31.0939 61.9222C32.284 61.0636 33.603 60.3996 35.0015 59.9551C38.6574 59.1925 42.2218 58.043 45.6345 56.5259C47.497 55.3977 49.1294 53.9276 50.4459 52.193C51.786 50.4337 52.7455 48.415 53.2636 46.2651C53.5106 45.1483 53.5645 43.9975 53.4231 42.8625ZM27.3723 59.5829C24.8294 60.572 22.0405 60.7394 19.3976 60.0614C15.3276 58.8798 11.4827 57.0292 8.02029 54.5854C7.27598 54.1335 5.94686 53.5487 4.72407 52.8841L5.97344 52.4854C7.35573 51.9272 8.63169 51.3158 10.2001 50.8373C11.0619 50.5338 11.9526 50.32 12.8583 50.1993C15.0256 49.9343 17.2223 50.3328 19.1583 51.3424C22.4711 53.4581 25.2831 56.2702 27.3989 59.5829H27.3723ZM50.7649 44.1385C50.7151 44.6391 50.6352 45.1362 50.5256 45.6271C50.0572 47.3958 49.2342 49.0508 48.1066 50.4917C47.0606 52.013 45.7344 53.3211 44.199 54.3462C41.0195 55.913 37.6882 57.1511 34.2572 58.0411C32.6955 58.6165 31.2335 59.4327 29.9242 60.4601C29.9242 60.4601 29.9242 60.6462 29.9242 60.726C29.9242 60.8057 29.7913 60.1677 29.7116 59.8753C29.8934 59.8832 30.0714 59.8216 30.2096 59.7032C30.3478 59.5848 30.4358 59.4182 30.4559 59.2373C30.7437 55.1942 32.382 51.3651 35.1078 48.3651C38.0827 45.7283 41.925 44.2803 45.9003 44.298C46.1661 44.298 49.037 43.6334 50.7117 43.3676C50.7453 43.6232 50.7631 43.8807 50.7649 44.1385Z" fill="#020305"/>
</svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12.5l2.5 2.5L16 9.5" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 018 0v4" />
    </svg>
  )
}

function ChevronUp() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="18 15 12 9 6 15" />
    </svg>
  )
}

function MockupVideo() {
  return (
    <div className="ntcollection-mockup-video">
      <iframe
        className="ntcollection-mockup-video-iframe"
        src={`https://www.youtube-nocookie.com/embed/${MOCKUP_VIDEO_ID}?autoplay=1&mute=1&loop=1&controls=0&playlist=${MOCKUP_VIDEO_ID}&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&disablekb=1`}
        title=""
        allow="autoplay; encrypted-media"
        loading="lazy"
        tabIndex={-1}
        aria-hidden="true"
      />
      <div className="ntcollection-mockup-video-progress">
        <div className="ntcollection-mockup-video-progress-fill" />
      </div>
    </div>
  )
}

function MockupApp() {
  return (
    <div className="ntcollection-mockup-app">
      <div className="ntcollection-mockup-topbar">
        <img src={logoWhite} alt="" className="ntcollection-mockup-logo" />
      </div>

      <div className="ntcollection-mockup-body">
        <div className="ntcollection-mockup-main">
          <MockupVideo />

          <div className="ntcollection-mockup-meta">
            <span className="ntcollection-mockup-meta-season">Temporada 1: O Ouvido</span>
            <span className="ntcollection-mockup-meta-dot">•</span>
            <span className="ntcollection-mockup-meta-ep">Episódio 05</span>
          </div>

          <h3 className="ntcollection-mockup-title">Escute o Passado Para Criar o Futuro</h3>

          <div className="ntcollection-mockup-progress-row">
            <div className="ntcollection-mockup-progress">
              <span className="ntcollection-mockup-progress-dot" />
              <span className="ntcollection-mockup-progress-text">42% concluído</span>
            </div>
            <span className="ntcollection-mockup-duration">24:18 min</span>
          </div>

          <div className="ntcollection-mockup-tabs">
            <span className="ntcollection-mockup-tab ntcollection-mockup-tab-active">Descrição</span>
            <span className="ntcollection-mockup-tab">Key Insights</span>
          </div>

          <p className="ntcollection-mockup-desc">
            Samplear é ser um arqueólogo do som: escavar décadas de música gravada para encontrar fragmentos que ainda têm algo a dizer, e recontextualizá-los de formas que o original nunca imaginou. Papatinho não apenas fez isso com maestria: foi o primeiro produtor brasileiro a ter o sampler registrado como instrumento de especialidade na Ordem dos Músicos do Brasil.
          </p>
          <p className="ntcollection-mockup-desc">
            Essa aula mergulha na filosofia do sample não como técnica musical, mas como método de criação que se aplica em qualquer campo.
          </p>
        </div>

        <div className="ntcollection-mockup-sidebar">
          <div className="ntcollection-mockup-sidebar-head">
            <h4>Episódios da Série</h4>
          </div>
          <div className="ntcollection-mockup-sidebar-list">
            <div className="ntcollection-mockup-season-row">
              <span>Temporada 1: O Ouvido</span>
              <span className="ntcollection-mockup-season-chevron"><ChevronUp /></span>
            </div>
            {EPISODES.map(ep => (
              <div
                key={ep.num}
                className={`ntcollection-mockup-ep ntcollection-mockup-ep-${ep.state}${ep.special ? ' ntcollection-mockup-ep-special' : ''}`}
              >
                <span className="ntcollection-mockup-ep-icon">
                  {ep.state === 'done' ? <CheckIcon /> : ep.state === 'active' ? <PlayIcon /> : <LockIcon />}
                </span>
                <span className="ntcollection-mockup-ep-num">{ep.num}</span>
                <span className="ntcollection-mockup-ep-title">
                  {ep.title}
                  {ep.special && <span className="ntcollection-mockup-ep-special-label">★ Especial</span>}
                </span>
                <span className="ntcollection-mockup-ep-dur">{ep.duration}</span>
              </div>
            ))}
          </div>
          <div className="ntcollection-mockup-sidebar-foot">
            <button className="ntcollection-mockup-foot-btn ntcollection-mockup-foot-btn-prev">Anterior</button>
            <button className="ntcollection-mockup-foot-btn ntcollection-mockup-foot-btn-next">Próximo</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AboutSectionV2() {
  const scrollToPricing = () => {
    const el = document.getElementById('planos')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="ntcollection-about" id="sobre">
      <div className="ntcollection-about-inner">

        <div className="ntcollection-about-header">
          <div className="ntcollection-about-title-block">
            <div className="ntcollection-about-pill">O QUE É O NT COLLECTION</div>
            <h2 className="ntcollection-about-title">
              Uma coleção de séries que te coloca na mesma sala que alguns dos maiores nomes da música brasileira de hoje.
            </h2>
          </div>
          <p className="ntcollection-about-subtitle">
            Músicos, produtores, compositores…gente que mudou o som do Brasil contando a própria história com as próprias palavras, sem roteiro, sem pose.
          </p>
        </div>

        <div className="ntcollection-about-mockup" aria-hidden="true">
          <img src={glowSvg} alt="" className="ntcollection-mockup-glow" />
          <MockupApp />
        </div>

        <div className="ntcollection-about-bottom">
          <p className="ntcollection-about-para">
            O Brasil tem mania de reconhecer os gênios só depois que eles se vão. L7NNON, Papatinho e os próximos nomes do NT Collection já mudaram como o país escuta música, e o que eles sabem sobre criação e processo não está documentado em lugar nenhum. Até agora.
          </p>
          <div className="ntcollection-about-card">
            <div className="ntcollection-about-card-top">
              <FlowerIcon />
              <p className="ntcollection-about-card-text">
                <strong>Ao assinar, você acessa tudo isso por menos do que uma sessão de cinema. E, no mesmo gesto, ajuda a Novo Traço a manter shows gratuitos, ingressos simbólicos e projetos que levam cultura para quem quase nunca tem acesso.</strong>
                {' '}Não é caridade. É a certeza de que a cultura desse país pertence ao país inteiro, e quem assina o NT Collection está fazendo parte disso de verdade.
              </p>
            </div>
            <button
              type="button"
              className="ntcollection-about-cta"
              onClick={scrollToPricing}
            >
              FAZER PARTE AGORA
            </button>
          </div>
        </div>

      </div>

      <style>{`
        body.pdv .ntcollection-about {
          background: #020305;
          padding: 84px 40px;
        }

        body.pdv .ntcollection-about-inner {
          max-width: 1072px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 48px;
        }

        /* ── Header ─────────────────────────────────────── */
        body.pdv .ntcollection-about-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          text-align: center;
        }
        body.pdv .ntcollection-about-title-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          max-width: 556px;
        }
        body.pdv .ntcollection-about-pill {
          display: inline-flex;
          align-items: center;
          padding: 6px 14px;
          border: 1px solid rgba(135,205,231,0.36);
          border-radius: 75px;
          color: #87CDE7;
          font-family: 'Margem', 'Inter', sans-serif;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 1px;
          text-transform: uppercase;
          line-height: 15px;
        }
        body.pdv .ntcollection-about-title {
          margin: 0;
          font-family: 'Roslindale', Georgia, serif;
          font-weight: 400;
          font-size: 36px;
          line-height: 1.3;
          color: #EFEFEF;
          text-wrap: balance;
        }
        body.pdv .ntcollection-about-subtitle {
          margin: 0;
          max-width: 424px;
          font-family: 'Margem', 'Inter', sans-serif;
          font-weight: 400;
          font-size: 16px;
          line-height: 1.45;
          color: rgba(240,239,235,0.82);
        }

        /* ── Mockup frame ───────────────────────────────── */
        body.pdv .ntcollection-about-mockup {
          position: relative;
          width: 100%;
          height: 503px;
          overflow: hidden;
          /* border: 0.466px solid #EFEFEF; */
          border-radius: 17px;
          background: linear-gradient(153deg, rgba(239,239,239,0.12) 6.8%, rgba(239,239,239,0.002) 78.7%);
          box-shadow: inset 0 0 10.56px rgba(255,255,255,0.12);
        }
        body.pdv .ntcollection-mockup-glow {
          position: absolute;
          top: 100%;
          left: 66%;
          width: 578px;
          height: auto;
          pointer-events: none;
          transform: translate(-50%, -50%);
          filter: blur(50px);
          opacity: 0.6;
          object-fit: cover;
          z-index: 5;
          user-select: none;
        }

        /* ── Mockup app (scaled screenshot of the área de membros) ─ */
        body.pdv .ntcollection-mockup-app {
          position: absolute;
          top: 58px;
          left: 75px;
          width: 920px;
          background: #09090B;
          border-radius: 15.13px;
          box-shadow: 0 4.1px 25.8px 0 #000;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
          color: #F4F4F5;
          z-index: 1;
        }
        body.pdv .ntcollection-mockup-topbar {
          height: 38px;
          background: #18181B;
          border-bottom: 0.72px solid #27272A;
          display: flex;
          align-items: center;
          padding: 0 17.3px;
        }
        body.pdv .ntcollection-mockup-logo {
          height: 22px;
          width: auto;
          display: block;
        }
        body.pdv .ntcollection-mockup-body {
          display: flex;
          align-items: stretch;
        }
        body.pdv .ntcollection-mockup-main {
          flex: 1;
          padding: 17.3px 28px 17.3px 17.3px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        body.pdv .ntcollection-mockup-video {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          border-radius: 10px;
          overflow: hidden;
          background: #000;
        }
        body.pdv .ntcollection-mockup-video-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
          display: block;
        }
        body.pdv .ntcollection-mockup-video-iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: none;
          display: block;
          pointer-events: none;
        }
        body.pdv .ntcollection-mockup-video-progress {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: #27272A;
        }
        body.pdv .ntcollection-mockup-video-progress-fill {
          width: 42%;
          height: 100%;
          background: #87CDE7;
        }
        body.pdv .ntcollection-mockup-meta {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          line-height: 14px;
        }
        body.pdv .ntcollection-mockup-meta-season { color: #87CDE7; }
        body.pdv .ntcollection-mockup-meta-dot    { color: #52525C; }
        body.pdv .ntcollection-mockup-meta-ep     { color: #9F9FA9; }
        body.pdv .ntcollection-mockup-title {
          margin: 0;
          font-family: 'Inter', sans-serif;
          font-size: 26px;
          font-weight: 600;
          line-height: 1.1;
          color: #F4F4F5;
          letter-spacing: 0.27px;
        }
        body.pdv .ntcollection-mockup-progress-row {
          display: flex;
          align-items: center;
          gap: 17px;
          font-size: 10px;
          color: #9F9FA9;
          line-height: 14px;
        }
        body.pdv .ntcollection-mockup-progress {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        body.pdv .ntcollection-mockup-progress-dot {
          width: 6px; height: 6px;
          background: #87CDE7;
          border-radius: 50%;
        }
        body.pdv .ntcollection-mockup-tabs {
          display: flex;
          gap: 17px;
          border-bottom: 0.72px solid #27272A;
        }
        body.pdv .ntcollection-mockup-tab {
          display: inline-block;
          padding: 2px 0 8px;
          font-size: 10px;
          font-weight: 500;
          color: #9F9FA9;
          border-bottom: 1.44px solid transparent;
          margin-bottom: -1px;
        }
        body.pdv .ntcollection-mockup-tab-active {
          color: #87CDE7;
          border-bottom-color: #87CDE7;
        }
        body.pdv .ntcollection-mockup-desc {
          margin: 0;
          font-size: 11.5px;
          line-height: 1.62;
          color: #D4D4D8;
          letter-spacing: -0.22px;
        }

        /* ── Sidebar ────────────────────────────────────── */
        body.pdv .ntcollection-mockup-sidebar {
          width: 277px;
          background: #18181B;
          border-left: 0.72px solid #27272A;
          display: flex;
          flex-direction: column;
        }
        body.pdv .ntcollection-mockup-sidebar-head {
          padding: 17.3px 17.3px 0.7px;
          border-bottom: 0.72px solid #27272A;
          background: #18181B;
        }
        body.pdv .ntcollection-mockup-sidebar-head h4 {
          margin: 0;
          font-size: 13px;
          font-weight: 600;
          color: #F4F4F5;
          letter-spacing: -0.32px;
          line-height: 19.5px;
          padding-bottom: 14.5px;
        }
        body.pdv .ntcollection-mockup-sidebar-list {
          flex: 1;
          background: #09090B;
          border: 0.72px solid #27272A;
          margin: 11.5px;
          border-radius: 7.2px;
          overflow: hidden;
          font-size: 10px;
        }
        body.pdv .ntcollection-mockup-season-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8.6px 11.5px;
          color: #F4F4F5;
          font-weight: 500;
          font-size: 10px;
          border-bottom: 0.72px solid #27272A;
        }
        body.pdv .ntcollection-mockup-season-chevron svg {
          width: 13px; height: 13px;
          color: #F4F4F5;
        }
        body.pdv .ntcollection-mockup-ep {
          display: grid;
          grid-template-columns: 13px 14px 1fr auto;
          column-gap: 8.6px;
          align-items: center;
          padding: 8.6px 11.5px;
          border-bottom: 0.72px solid #27272A;
          color: #D4D4D8;
          line-height: 14.4px;
          min-height: 32px;
        }
        body.pdv .ntcollection-mockup-ep-icon svg {
          width: 13px; height: 13px; display: block;
        }
        body.pdv .ntcollection-mockup-ep-done .ntcollection-mockup-ep-icon   { color: #87CDE7; }
        body.pdv .ntcollection-mockup-ep-active .ntcollection-mockup-ep-icon { color: #87CDE7; }
        body.pdv .ntcollection-mockup-ep-locked .ntcollection-mockup-ep-icon { color: #52525C; }
        body.pdv .ntcollection-mockup-ep-num {
          color: #71717B;
          font-size: 8.6px;
          text-align: center;
          font-weight: 500;
        }
        body.pdv .ntcollection-mockup-ep-title {
          font-size: 10px;
          font-weight: 500;
          color: #D4D4D8;
          letter-spacing: -0.11px;
          line-height: 14px;
        }
        body.pdv .ntcollection-mockup-ep-special-label {
          display: block;
          font-size: 8.6px;
          color: #F96714;
          font-weight: 500;
          line-height: 11.5px;
          margin-top: 2px;
        }
        body.pdv .ntcollection-mockup-ep-dur {
          font-size: 8.6px;
          color: #71717B;
          font-weight: 500;
        }
        body.pdv .ntcollection-mockup-ep-active {
          background: rgba(0,188,125,0.1);
        }
        body.pdv .ntcollection-mockup-ep-active .ntcollection-mockup-ep-title {
          color: #87CDE7;
        }
        body.pdv .ntcollection-mockup-ep-special {
          background: linear-gradient(to right, rgba(173,70,255,0.05), transparent);
        }
        body.pdv .ntcollection-mockup-sidebar-foot {
          background: #18181B;
          border-top: 0.72px solid #27272A;
          padding: 12.25px 11.5px;
          display: flex;
          gap: 8.6px;
        }
        body.pdv .ntcollection-mockup-foot-btn {
          flex: 1;
          height: 31.7px;
          border: none;
          border-radius: 7.2px;
          font-family: 'Inter', sans-serif;
          font-size: 10px;
          font-weight: 500;
          cursor: default;
          letter-spacing: -0.11px;
        }
        body.pdv .ntcollection-mockup-foot-btn-prev {
          background: #27272A;
          color: #F4F4F5;
        }
        body.pdv .ntcollection-mockup-foot-btn-next {
          background: #87CDE7;
          color: #000;
        }

        /* ── Bottom row ─────────────────────────────────── */
        body.pdv .ntcollection-about-bottom {
          display: flex;
          gap: 10px;
          align-items: stretch;
        }
        body.pdv .ntcollection-about-para {
          flex: 0 0 303px;
          margin: 0;
          padding-top: 2px;
          font-family: 'Margem', 'Inter', sans-serif;
          font-size: 16px;
          line-height: 1.45;
          color: rgba(240,239,235,0.82);
        }
        body.pdv .ntcollection-about-card {
          flex: 1;
          background: #87CDE7;
          border-radius: 16px;
          padding: 36px 39px;
          display: flex;
          flex-direction: column;
          gap: 38px;
        }
        body.pdv .ntcollection-about-card-top {
          display: flex;
          gap: 38px;
          align-items: flex-start;
        }
        body.pdv .ntcollection-about-flower {
          width: 53.5px;
          height: 63.8px;
          flex-shrink: 0;
          display: block;
        }
        body.pdv .ntcollection-about-card-text {
          margin: 0;
          flex: 1;
          font-family: 'Margem', 'Inter', sans-serif;
          font-size: 16px;
          line-height: 1.45;
          color: #020305;
        }
        body.pdv .ntcollection-about-card-text strong {
          font-weight: 700;
        }
        body.pdv .ntcollection-about-cta {
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
          transition: background 0.2s ease-in-out, transform 0.1s ease;
        }
        body.pdv .ntcollection-about-cta:hover { background: #14161A; }
        body.pdv .ntcollection-about-cta:active { transform: scale(0.98); }

        /* ── Tablet (≤ 1120px): scale mockup down ───────── */
        @media (max-width: 1120px) {
          body.pdv .ntcollection-about { padding: 72px 32px; }
          body.pdv .ntcollection-about-mockup { height: 420px; }
          body.pdv .ntcollection-mockup-app {
            transform: scale(0.78);
            transform-origin: top left;
            top: 40px;
            left: 40px;
          }
          body.pdv .ntcollection-about-bottom {
            flex-direction: column;
            gap: 24px;
          }
          body.pdv .ntcollection-about-para { flex: none; }
        }

        /* ── Mobile (≤ 767px) ───────────────────────────── */
        @media (max-width: 767px) {
          body.pdv .ntcollection-about {
            padding: 32px 20px;
            gap: 32px;
          }
          body.pdv .ntcollection-about-inner { gap: 48px; }
          body.pdv .ntcollection-about-title { font-size: 26px; }
          body.pdv .ntcollection-about-subtitle { max-width: 100%; }

          body.pdv .ntcollection-about-mockup {
            height: 250px;
            border-radius: 17px;
          }
          body.pdv .ntcollection-mockup-app {
            transform: scale(0.42);
            transform-origin: top left;
            top: 24.5px;
            left: 21.5px;
          }
          body.pdv .ntcollection-mockup-glow {
            display: none;
          }

          body.pdv .ntcollection-about-bottom {
            flex-direction: column;
            gap: 32px;
          }
          body.pdv .ntcollection-about-para { flex: none; }

          body.pdv .ntcollection-about-card {
            padding: 32px 28px;
            gap: 32px;
          }
          body.pdv .ntcollection-about-card-top {
            flex-direction: column;
            gap: 24px;
          }
          body.pdv .ntcollection-about-cta {
            padding: 20px 18px;
            font-size: 16px;
          }
        }

        @media (max-width: 374px) {
          body.pdv .ntcollection-about { padding: 28px 16px; }
          body.pdv .ntcollection-about-card { padding: 28px 22px; }
        }
      `}</style>
    </section>
  )
}
