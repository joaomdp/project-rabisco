import type { ReactNode } from 'react'
import Reveal from './Reveal'

type Testimonial = {
  initials: string
  name: string
  role: string
  quote: ReactNode
  card: 'light' | 'pink'
  avatarBg: string
  raised?: boolean
}

const testimonials: Testimonial[] = [
  {
    initials: 'CM',
    name: 'Camila Mendes',
    role: 'Fundadora · Maré Alta Açaí',
    quote: <>A Rabisco entendeu a alma da nossa marca em <strong>uma reunião</strong>. Em 3 meses dobramos as vendas pelo Instagram. Surreal.</>,
    card: 'light',
    avatarBg: 'bg-gradient-to-br from-rab-pink to-rab-pink2 text-white',
  },
  {
    initials: 'RT',
    name: 'Rafael Toledo',
    role: 'CEO · Studio Brasa',
    quote: <>Cansei de agência que entrega "post bonitinho". Aqui é estratégia, número, copy e arte — tudo certo. Recomendo demais.</>,
    card: 'pink',
    avatarBg: 'bg-rab-yellow text-rab-dark',
    raised: true,
  },
  {
    initials: 'JS',
    name: 'Juliana Saldanha',
    role: 'CMO · Curso Decola',
    quote: <>Eles fizeram a identidade visual e o vídeo de lançamento. Recebi proposta de investimento na semana seguinte. <strong>Mudou o jogo.</strong></>,
    card: 'light',
    avatarBg: 'bg-gradient-to-br from-rab-yellow to-yellow-500 text-rab-dark',
  },
]

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="relative py-24 md:py-36 bg-rab-cream overflow-hidden">

      <svg className="absolute right-6 top-10 w-40 opacity-60 hidden md:block" viewBox="0 0 200 100" fill="none" aria-hidden="true">
        <path d="M10 50 C 40 10, 80 90, 110 40 S 190 60, 190 50" stroke="#FF007A" strokeWidth="5" strokeLinecap="round" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-rab-pink">
            <span className="w-8 h-px bg-rab-pink" /> Depoimentos
          </div>
          <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">
            Quem rabiscou<br />com a gente <span className="text-rab-pink">conta.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6 items-start">
          {testimonials.map((t, i) => {
            const isPink = t.card === 'pink'
            return (
              <Reveal key={t.name} delay={0.08 * i} className="h-full">
                <figure
                  className={`flex flex-col h-full rounded-3xl p-7 shadow-soft ${
                    isPink ? 'bg-rab-pink text-white' : 'bg-white text-rab-dark border border-rab-dark/5'
                  } ${t.raised ? 'md:translate-y-6' : ''}`}
                >
                  {/* Quote icon — in flow so it never bleeds outside the card */}
                  <svg
                    className={`w-10 h-10 mb-4 flex-shrink-0 ${isPink ? 'text-rab-yellow' : 'text-rab-pink'}`}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M7 7h4v4H7c0 4 2 5 4 5v3c-5 0-8-3-8-8V7Zm10 0h4v4h-4c0 4 2 5 4 5v3c-5 0-8-3-8-8V7Z" />
                  </svg>

                  {/* Quote text grows to fill available space */}
                  <blockquote className="flex-1 text-base leading-relaxed">{t.quote}</blockquote>

                  {/* Author always pinned to the bottom */}
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className={`w-11 h-11 rounded-full grid place-items-center font-bold flex-shrink-0 ${t.avatarBg}`}>
                      {t.initials}
                    </span>
                    <span>
                      <div className="font-bold text-sm">{t.name}</div>
                      <div className={`text-xs ${isPink ? 'text-white/70' : 'text-rab-dark/55'}`}>{t.role}</div>
                    </span>
                  </figcaption>

                  <div className={`mt-4 text-sm tracking-wide ${isPink ? 'text-rab-yellow' : 'text-rab-pink'}`}>
                    ★★★★★
                  </div>
                </figure>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
