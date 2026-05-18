import Reveal from './Reveal'

type Card = {
  emoji: string
  title: string
  desc: string
  variant: 'pink' | 'yellow' | 'white'
}

const cards: Card[] = [
  {
    emoji: '✦',
    title: 'Identidade que cola',
    desc: 'Construímos marcas com personalidade real — não a versão genérica que todo mundo copia.',
    variant: 'white',
  },
  {
    emoji: '✓',
    title: 'Conteúdo que converte',
    desc: 'Bonito é bom, mas vender é melhor. Estratégia + criativo no mesmo combo, sempre.',
    variant: 'pink',
  },
  {
    emoji: '↗',
    title: 'Ideias que vendem',
    desc: 'A gente pensa em campanha, copy e funil. Não em "post bonitinho" sem objetivo.',
    variant: 'yellow',
  },
]

const styles = {
  white:  { card: 'bg-white text-rab-dark border border-rab-dark/5', icon: 'bg-rab-pink/10 text-rab-pink', mute: 'text-rab-dark/70' },
  pink:   { card: 'bg-rab-pink text-white',                          icon: 'bg-white text-rab-pink',     mute: 'text-white/90'    },
  yellow: { card: 'bg-rab-yellow text-rab-dark',                     icon: 'bg-rab-dark text-rab-yellow', mute: 'text-rab-dark/80' },
} as const

export default function Sobre() {
  return (
    <section id="sobre" className="relative py-24 md:py-36 bg-rab-snow">

      <svg className="absolute top-10 right-6 w-40 opacity-60 hidden md:block" viewBox="0 0 200 100" fill="none" aria-hidden="true">
        <path d="M10 50 C 40 10, 80 90, 110 40 S 190 60, 190 50" stroke="#FF007A" strokeWidth="5" strokeLinecap="round" />
      </svg>

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-rab-pink">
            <span className="w-8 h-px bg-rab-pink" /> Sobre a Rabisco
          </div>
          <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">
            Não somos <span className="line-through decoration-rab-pink decoration-4 text-rab-dark/40">só mais uma</span> agência.
          </h2>
          <p className="mt-5 font-hand text-2xl md:text-3xl text-rab-dark/70">— a gente prefere chamar de oficina criativa.</p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => {
            const st = styles[c.variant]
            return (
              <Reveal key={c.title} delay={0.08 * i}>
                <div className={`rounded-3xl p-8 h-full shadow-soft ${st.card}`}>
                  <div className={`w-14 h-14 rounded-2xl grid place-items-center text-2xl font-display mb-5 ${st.icon}`}>
                    {c.emoji}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl leading-tight">{c.title}</h3>
                  <p className={`mt-3 text-base leading-relaxed ${st.mute}`}>{c.desc}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
