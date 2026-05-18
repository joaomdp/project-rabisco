import Reveal from './Reveal'
import RabiscoLogo from './RabiscoLogo'
import CoupleIllustration from './CoupleIllustration'
import BadgeTyper from './BadgeTyper'

const marqueeItems = [
  ['Criatividade', 'text-white'],
  ['Estratégia', 'text-rab-yellow'],
  ['Conteúdo que converte', 'text-white'],
  ['Vídeo', 'text-rab-yellow'],
  ['Branding', 'text-white'],
  ['Social media', 'text-rab-yellow'],
] as const

export default function Hero() {
  return (
    <section id="top" className="relative hero-warm text-rab-dark overflow-hidden">

      <svg
        className="absolute top-32 -left-10 w-40 opacity-40 animate-float-y pointer-events-none"
        viewBox="0 0 400 400" fill="none" aria-hidden="true"
      >
        <path d="M20 200 C 80 60, 220 60, 260 180 S 380 320, 320 360" stroke="#FFEA00" strokeWidth="8" strokeLinecap="round" />
      </svg>
      <svg
        className="absolute bottom-40 right-0 w-28 md:w-36 opacity-50 animate-float-y pointer-events-none"
        style={{ animationDelay: '-3s' }}
        viewBox="0 0 200 200" fill="none" aria-hidden="true"
      >
        <path d="M10 100 C 60 20, 140 180, 190 80" stroke="#FF4DA6" strokeWidth="5" strokeLinecap="round" />
        <path d="M30 140 C 80 80, 130 200, 180 130" stroke="#FF007A" strokeWidth="3" strokeLinecap="round" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-32 md:pt-44 pb-24 md:pb-36 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

        <div className="relative z-10 flex flex-col">
          <Reveal>
            <div
              className="inline-flex items-center gap-2.5"
              style={{ borderLeft: '1.5px solid #FF007A', paddingLeft: '10px' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-rab-pink animate-pulse flex-shrink-0" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-rab-dark/50">
                <BadgeTyper />
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-3">
              <RabiscoLogo size="large" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-10 text-4xl md:text-6xl font-display leading-[1.02] tracking-tight max-w-lg">
              Sua marca ganha{' '}
              <span className="hand-underline text-rab-pink">voz</span>
              {' '}e{' '}
              <span className="text-rab-pink">atitude</span>
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contato"
                className="btn-shine inline-flex items-center gap-2 bg-rab-pink hover:bg-rab-pink2 text-white font-bold text-base px-8 py-4 rounded-full shadow-glow transition"
              >
                Quero rabiscar minha marca
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-5-6 6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#portfolio"
                className="text-sm font-semibold text-rab-dark/60 hover:text-rab-pink transition-colors underline underline-offset-4 decoration-rab-dark/20 hover:decoration-rab-pink"
              >
                Ver portfólio
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-12 flex items-center gap-3 text-rab-dark/40">
              <span className="text-2xl font-display text-rab-pink leading-none">+120</span>
              <span className="w-px h-4 bg-rab-dark/15" />
              <span className="text-sm">campanhas no ar</span>
              <span className="w-px h-4 bg-rab-dark/15" />
              <span className="text-sm">+2.8M de alcance</span>
            </div>
          </Reveal>
        </div>

        <div className="relative">
          <Reveal delay={0.1}>
            <div className="relative mx-auto w-full max-w-sm md:max-w-md aspect-[4/5]">
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-3xl rotate-[-8deg] stripe-pink opacity-80" />
              <div className="absolute -bottom-8 -right-8 w-44 h-44 rounded-full bg-rab-yellow shadow-[0_30px_60px_-20px_rgba(255,234,0,.45)]" />

              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border-[6px] border-white shadow-2xl avatar-bg">
                <CoupleIllustration />
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-rab-yellow text-rab-dark text-xs font-bold rotate-[6deg] shadow-lg select-none">
                  ✦ ORIGINAL
                </div>
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 500" fill="none" aria-hidden="true">
                  <path d="M-10 60 C 80 40, 160 100, 260 70 S 410 90, 420 70" stroke="#FFEA00" strokeWidth="5" strokeLinecap="round" opacity=".8" />
                  <path d="M-10 430 C 100 460, 220 410, 410 450" stroke="#FFEA00" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </div>

              <div
                className="absolute -left-8 bottom-16 bg-white text-rab-dark rounded-2xl px-4 py-3 shadow-2xl rotate-[-5deg] animate-float-y border border-rab-dark/5"
                style={{ animationDelay: '-4s' }}
              >
                <div className="text-[10px] font-bold tracking-widest text-rab-pink uppercase">Em alta</div>
                <div className="font-display text-sm leading-snug mt-0.5">Engajamento<br />+340% 🚀</div>
              </div>

              <div
                className="absolute -right-4 top-10 bg-rab-pink text-white rounded-full w-20 h-20 grid place-items-center font-display text-[11px] text-center leading-tight rotate-[10deg] shadow-glow animate-float-y"
                style={{ animationDelay: '-2s' }}
              >
                MARCAS<br />DE VERDADE
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="relative bg-rab-dark overflow-hidden">
        <div className="animate-marquee flex gap-10 py-4 whitespace-nowrap font-display text-2xl md:text-3xl uppercase">
          {[...marqueeItems, ...marqueeItems].map(([label, txt], i) => (
            <span key={i} className="flex items-center gap-10">
              <span className={txt}>{label}</span>
              <span className="text-rab-pink">★</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
