const cliente1 = '/images/pdv/cliente-1.png'
const cliente2 = '/images/pdv/cliente-2.png'
const cliente3 = '/images/pdv/cliente-3.png'
const cliente4 = '/images/pdv/cliente-4.png'
const cliente5 = '/images/pdv/cliente-5.png'

const avatars = [cliente1, cliente2, cliente3, cliente4, cliente5]
const BODY = 'Margem, Inter, sans-serif'

export default function SocialProof({ light = false }) {
  const textColor = light ? 'rgba(2,3,5,0.7)' : 'rgba(239,239,239,0.6)'
  const subColor  = light ? 'rgba(2,3,5,0.4)'  : 'rgba(239,239,239,0.35)'

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {avatars.map((src, i) => (
          <img key={i} src={src} alt="" style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: 'none',
            marginLeft: i === 0 ? 0 : '-8px',
            position: 'relative',
            zIndex: avatars.length - i,
            flexShrink: 0,
          }} />
        ))}
      </div>

      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
          <span style={{ fontFamily: BODY, fontSize: '13px', fontWeight: 700, color: textColor, lineHeight: 1 }}>
            A partir de R$ 58,25
          </span>
        </div>
        <p style={{ fontFamily: BODY, fontSize: '10px', fontWeight: 400, color: subColor, marginTop: '2px', letterSpacing: '0.01em' }}>
          cobrado mensalmente por um ano
        </p>
      </div>
    </div>
  )
}
