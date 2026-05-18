import type { CSSProperties, ReactNode } from 'react'
import Reveal from './Reveal'
import { getProjetos, type ProjetoTheme } from '@/sanity/queries'

type ThemeConfig = {
  bg: string
  bgStyle?: CSSProperties
  tagClass: string
  numClass: string
  textClass: string
  descClass: string
  resultClass: string
  decor: ReactNode
}

const THEMES: Record<ProjetoTheme, ThemeConfig> = {
  'rosa-escuro': {
    bg: 'bg-gradient-to-br from-rab-pink via-rab-pink2 to-rab-deep',
    tagClass: 'bg-white/15 backdrop-blur text-white',
    numClass: 'text-white/40',
    textClass: 'text-white',
    descClass: 'text-white/80',
    resultClass: 'bg-rab-yellow text-rab-dark',
    decor: (
      <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 400 500" preserveAspectRatio="none">
        <path d="M-10 100 C 80 60, 160 180, 260 110 S 410 120, 420 100" stroke="#fff" strokeWidth="6" strokeLinecap="round" fill="none" />
        <path d="M-10 380 C 100 410, 220 340, 410 400" stroke="#FFEA00" strokeWidth="6" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  'amarelo': {
    bg: 'bg-gradient-to-br from-rab-yellow via-yellow-400 to-rab-pink',
    tagClass: 'bg-rab-dark text-rab-yellow',
    numClass: 'text-rab-dark/30',
    textClass: 'text-rab-dark',
    descClass: 'text-rab-dark/80',
    resultClass: 'bg-rab-dark text-white',
    decor: (
      <>
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: 'repeating-linear-gradient(45deg,#fff 0 2px, transparent 2px 16px)' }} />
        <svg className="absolute inset-0 w-full h-full opacity-70" viewBox="0 0 400 500" preserveAspectRatio="none">
          <circle cx="80" cy="380" r="40" stroke="#FF007A" strokeWidth="5" fill="none" />
          <path d="M280 80 q 40 60 0 120" stroke="#fff" strokeWidth="5" strokeLinecap="round" fill="none" />
        </svg>
      </>
    ),
  },
  'rosa-claro': {
    bg: 'bg-gradient-to-br from-rab-pink2 via-pink-400 to-rab-yellow',
    tagClass: 'bg-rab-dark text-white',
    numClass: 'text-rab-dark/30',
    textClass: 'text-rab-dark',
    descClass: 'text-rab-dark/80',
    resultClass: 'bg-rab-dark text-white',
    decor: (
      <svg className="absolute right-4 top-4 w-32 opacity-90" viewBox="0 0 100 100" fill="none">
        <path d="M50 5 L 61 39 H 95 L 67 60 L 78 95 L 50 73 L 22 95 L 33 60 L 5 39 H 39 Z" fill="#1F0033" />
      </svg>
    ),
  },
  'profundo': {
    bg: '',
    bgStyle: { background: 'radial-gradient(circle at 30% 30%, #FF4DA6 0%, #1F0033 75%)' },
    tagClass: 'bg-white/15 backdrop-blur text-white',
    numClass: 'text-white/30',
    textClass: 'text-white',
    descClass: 'text-white/80',
    resultClass: 'bg-rab-yellow text-rab-dark',
    decor: (
      <svg className="absolute inset-0 w-full h-full opacity-80" viewBox="0 0 400 500" preserveAspectRatio="none">
        <path d="M40 250 C 100 150, 200 350, 360 200" stroke="#FFEA00" strokeWidth="7" strokeLinecap="round" fill="none" />
        <path d="M40 320 C 140 260, 240 400, 360 300" stroke="#fff" strokeWidth="5" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  'solar': {
    bg: 'bg-gradient-to-tl from-rab-pink via-rab-pink2 to-rab-yellow',
    tagClass: 'bg-rab-dark text-white',
    numClass: 'text-rab-dark/30',
    textClass: 'text-rab-dark',
    descClass: 'text-rab-dark/80',
    resultClass: 'bg-rab-dark text-rab-yellow',
    decor: (
      <svg className="absolute left-6 bottom-32 w-24 opacity-70" viewBox="0 0 100 60" fill="none">
        <path d="M5 30 C 25 5, 45 55, 65 25 S 95 35, 95 30" stroke="#1F0033" strokeWidth="5" strokeLinecap="round" />
      </svg>
    ),
  },
  'neon': {
    bg: 'bg-gradient-to-br from-rab-pink via-pink-500 to-rab-deep',
    tagClass: 'bg-white/15 backdrop-blur text-white',
    numClass: 'text-white/30',
    textClass: 'text-white',
    descClass: 'text-white/80',
    resultClass: 'bg-rab-yellow text-rab-dark',
    decor: (
      <>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg,#fff 0 1px, transparent 1px 24px),repeating-linear-gradient(90deg,#fff 0 1px, transparent 1px 24px)',
          }}
        />
        <svg className="absolute right-6 top-12 w-28 opacity-90" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="30" stroke="#FFEA00" strokeWidth="4" fill="none" />
          <circle cx="50" cy="50" r="44" stroke="#fff" strokeWidth="3" strokeDasharray="4 6" fill="none" />
        </svg>
      </>
    ),
  },
}

export default async function Portfolio() {
  const projects = await getProjetos()

  return (
    <section id="portfolio" className="relative py-24 md:py-36 bg-rab-snow overflow-hidden">

      <svg className="absolute top-20 left-10 w-32 opacity-50 hidden md:block" viewBox="0 0 200 80" fill="none" aria-hidden="true">
        <path d="M5 40 C 40 5, 90 75, 130 30 S 195 60, 195 40" stroke="#FFEA00" strokeWidth="5" strokeLinecap="round" />
      </svg>

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-rab-pink">
                <span className="w-8 h-px bg-rab-pink" /> Vitrine
              </div>
              <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">
                Portfólio <span className="text-rab-pink">Rabisco</span>
              </h2>
              <p className="mt-4 text-xl md:text-2xl font-hand text-rab-dark/70">trabalhos que estão fazendo barulho 🔊</p>
            </div>
            <a
              href="#contato"
              className="hidden md:inline-flex items-center gap-2 bg-rab-dark text-white font-semibold text-sm px-5 py-3 rounded-full hover:bg-rab-pink transition"
            >
              Quero um igual
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14m-5-6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => {
            const t = THEMES[p.theme]
            const num = String(i + 1).padStart(2, '0')
            return (
              <Reveal key={p._id} delay={0.05 * i}>
                <article
                  className={`project group rounded-3xl overflow-hidden bg-rab-dark relative aspect-[4/5] cursor-pointer ${t.bg}`}
                  style={t.bgStyle}
                >
                  {t.decor}
                  <div className="absolute inset-x-0 top-0 p-6 flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest ${t.tagClass}`}>{p.tag}</span>
                    <span className={`font-display text-xl ${t.numClass}`}>{num}</span>
                  </div>
                  <div className={`absolute inset-x-0 bottom-0 p-6 ${t.textClass}`}>
                    <h3 className="font-display text-3xl leading-tight">{p.title}</h3>
                    <p className={`text-sm mt-1 ${t.descClass}`}>{p.desc}</p>
                    <div className={`reveal-result mt-4 inline-flex items-center gap-2 font-bold px-4 py-2 rounded-full text-sm ${t.resultClass}`}>
                      {p.result}
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>

        <div className="mt-10 text-center md:hidden">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-rab-dark text-white font-semibold text-sm px-5 py-3 rounded-full"
          >
            Quero um igual
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14m-5-6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
