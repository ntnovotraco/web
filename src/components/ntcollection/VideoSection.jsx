const PANDA_VIDEO_ID = '7971e5eb-3242-4f7e-9100-8660bab4cd97'
const PANDA_LIBRARY = 'vz-9033b41f-ff1'

export default function VideoSection() {
  return (
    <section className="ntcollection-video" id="video">
      <div className="ntcollection-video-frame">
        <div className="ntcollection-video-screen">
          <iframe
            id={`panda-${PANDA_VIDEO_ID}`}
            src={`https://player-${PANDA_LIBRARY}.tv.pandavideo.com.br/embed/?v=${PANDA_VIDEO_ID}`}
            title="NT Collection"
            allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
            allowFullScreen
            fetchpriority="high"
            className="ntcollection-video-iframe"
          />
        </div>
      </div>

      <style>{`
        body.pdv .ntcollection-video {
          position: relative;
          background: #020305;
          padding: 84px 40px;
        }

        body.pdv .ntcollection-video-frame {
          position: relative;
          width: 100%;
          max-width: 1079px;
          margin: 0 auto;
          padding: 16px;
          border-radius: 34px;
          background: linear-gradient(146.8deg, rgba(239,239,239,0.12) 6.8%, rgba(239,239,239,0.002) 78.7%);
          box-shadow: inset 0 0 10.56px 0 rgba(255,255,255,0.12);
        }

        body.pdv .ntcollection-video-screen {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 26px;
          background: #000;
          box-shadow: inset 0 0 10.56px 0 rgba(255,255,255,0.12);
          overflow: hidden;
        }

        body.pdv .ntcollection-video-iframe {
          width: 100%;
          height: 100%;
          display: block;
          border: none;
          background: #000;
        }

        /* ── Tablet ──────────────────────────────────── */
        @media (max-width: 1024px) {
          body.pdv .ntcollection-video { padding: 64px 32px; }
        }

        /* ── Mobile ──────────────────────────────────── */
        @media (max-width: 767px) {
          body.pdv .ntcollection-video {
            padding: 48px 16px;
          }
          body.pdv .ntcollection-video-frame {
            padding: 8px;
            border-radius: 22px;
          }
          body.pdv .ntcollection-video-screen {
            border-radius: 16px;
          }
        }
      `}</style>
    </section>
  )
}
