type Props = {
  className?:    string
  size?:         'small' | 'normal' | 'large'
  hideSubtitle?: boolean
}

const cfg = {
  small:  { main: '1.8rem',                     sub: '0.62rem' },
  normal: { main: '2.3rem',                     sub: '0.76rem' },
  large:  { main: 'clamp(3.5rem,10vw,6.5rem)', sub: 'clamp(.82rem,1.8vw,1rem)' },
}

export default function RabiscoLogo({ className = '', size = 'normal', hideSubtitle = false }: Props) {
  const { main, sub } = cfg[size]

  return (
    <div className={`inline-flex flex-col items-start ${className}`}>
      <div
        style={{
          fontFamily:    'var(--font-archivo-black), sans-serif',
          fontWeight:    900,
          lineHeight:    1,
          display:       'flex',
          alignItems:    'baseline',
          letterSpacing: '-0.045em',
          fontSize:      main,
        }}
      >
        <span style={{ color: '#FF007A' }}>R</span>
        <span style={{ color: '#1A1A1A' }}>ABISCO</span>
        <span
          aria-hidden="true"
          style={{
            display:      'inline-block',
            background:   '#FF007A',
            borderRadius: '50%',
            flexShrink:   0,
            width:        '0.19em',
            height:       '0.19em',
            marginLeft:   '0.04em',
          }}
        />
      </div>

      {!hideSubtitle && (
        <div style={{ marginTop: '-2px', display: 'inline-block' }}>
          <div
            style={{
              fontFamily:    'var(--font-archivo-black), sans-serif',
              fontWeight:    500,
              color:         '#FF007A',
              letterSpacing: '0.18em',
              textTransform: 'lowercase',
              whiteSpace:    'nowrap',
              fontSize:      sub,
              lineHeight:    1.2,
            }}
          >
            agência de marketing
          </div>
          <svg
            viewBox="0 0 220 12"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
            style={{ display: 'block', width: '100%', height: '7px', marginTop: '4px' }}
          >
            <path
              d="M0 8 C 45 3, 90 11, 135 6 C 172 1, 200 10, 220 7"
              stroke="#FFEA00"
              strokeWidth="2.5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      )}
    </div>
  )
}
