export default function InkStroke({ color = '#F0EFEB', opacity = 0.15, className = '' }) {
  return (
    <svg
      viewBox="0 0 400 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M2 12 C40 6, 80 18, 120 11 C160 4, 200 16, 240 10 C280 4, 320 17, 360 9 C375 6, 388 13, 398 11"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={opacity}
        style={{ filter: 'url(#ink)' }}
      />
      <path
        d="M2 15 C50 18, 90 8, 130 14 C170 20, 210 7, 250 13 C290 19, 330 8, 370 12 C382 13, 392 10, 398 12"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity={opacity * 0.6}
      />
      <defs>
        <filter id="ink" x="-5%" y="-50%" width="110%" height="200%">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
        </filter>
      </defs>
    </svg>
  )
}
