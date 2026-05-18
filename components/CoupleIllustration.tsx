export default function CoupleIllustration() {
  return (
    <svg viewBox="0 0 400 500" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="bgg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#FF4DA6" />
          <stop offset="1" stopColor="#FF007A" />
        </linearGradient>
        <linearGradient id="skin1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#FFD9C2" />
          <stop offset="1" stopColor="#E0A684" />
        </linearGradient>
        <linearGradient id="skin2" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#F4C7A1" />
          <stop offset="1" stopColor="#B97B52" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill="url(#bgg)" />
      <ellipse cx="200" cy="500" rx="260" ry="80" fill="#1F0033" opacity=".45" />

      {/* Woman */}
      <g>
        <path d="M70 500 C 60 380, 100 320, 150 320 L 200 320 C 220 360, 220 460, 200 500 Z" fill="#FFEA00" />
        <rect x="130" y="290" width="32" height="40" rx="10" fill="url(#skin1)" />
        <ellipse cx="146" cy="248" rx="58" ry="62" fill="url(#skin1)" />
        <path d="M88 230 C 80 160, 220 150, 208 240 C 200 200, 100 195, 88 230 Z" fill="#1F1F1F" />
        <path d="M90 260 C 70 250, 60 300, 90 310 Z" fill="#1F1F1F" />
        <circle cx="128" cy="248" r="3.5" fill="#1F1F1F" />
        <circle cx="166" cy="248" r="3.5" fill="#1F1F1F" />
        <path d="M128 274 Q 146 290 168 272" stroke="#1F1F1F" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <circle cx="92"  cy="262" r="4" fill="#FF007A" />
        <circle cx="204" cy="262" r="4" fill="#FF007A" />
      </g>

      {/* Man */}
      <g>
        <path d="M220 500 C 210 380, 240 310, 290 310 L 340 310 C 360 360, 360 460, 340 500 Z" fill="#1F0033" />
        <rect x="278" y="280" width="32" height="40" rx="10" fill="url(#skin2)" />
        <ellipse cx="294" cy="240" rx="56" ry="60" fill="url(#skin2)" />
        <path d="M240 218 C 250 170, 350 170, 350 222 L 340 232 C 320 212, 270 212, 248 232 Z" fill="#1F1F1F" />
        <circle cx="278" cy="240" r="3.5" fill="#1F1F1F" />
        <circle cx="312" cy="240" r="3.5" fill="#1F1F1F" />
        <path d="M278 266 Q 294 282 314 264" stroke="#1F1F1F" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M268 270 Q 294 296 322 270" stroke="#3D2A1F" strokeWidth="2" fill="none" opacity=".5" />
      </g>

      <path
        d="M205 220 c -10 -10 -28 -2 -28 12 c 0 16 28 30 28 30 c 0 0 28 -14 28 -30 c 0 -14 -18 -22 -28 -12 z"
        fill="#FF007A"
        stroke="#fff"
        strokeWidth="3"
      />
    </svg>
  )
}
