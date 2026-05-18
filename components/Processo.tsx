import Reveal from './Reveal'

const steps = [
  {
    n: '01',
    title: 'Briefing',
    desc: 'Sessão de imersão pra entender sua marca, seu público e o que faz seu coração de empreendedor acelerar.',
    circle: 'bg-rab-pink text-white shadow-glow',
  },
  {
    n: '02',
    title: 'Estratégia',
    desc: 'Montamos um plano com objetivos claros, KPIs reais e zero firula. Você sabe exatamente o que vai acontecer.',
    circle: 'bg-rab-yellow text-rab-dark shadow-lg',
  },
  {
    n: '03',
    title: 'Execução',
    desc: 'Mão na massa: design, vídeo, copy, anúncios, social. Tudo entregue com calendário e revisão semanal.',
    circle: 'bg-rab-dark text-rab-yellow shadow-lg',
  },
  {
    n: '04',
    title: 'Resultado',
    desc: 'Relatórios honestos, otimizações constantes e marca crescendo de verdade. Sem fórmula mágica, só método.',
    circle: 'bg-rab-pink2 text-white shadow-lg',
  },
]

export default function Processo() {
  return (
    <section className="relative py-24 md:py-36 bg-rab-snow">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-rab-pink">
            <span className="w-8 h-px bg-rab-pink" /> Como funciona
          </div>
          <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">
            Do briefing ao <span className="text-rab-pink">"nossa, ficou incrível"</span> em 4 passos.
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-4 gap-6 relative">
          <svg
            className="hidden md:block absolute top-12 left-12 right-12 w-[calc(100%-6rem)] h-12 opacity-50"
            viewBox="0 0 1000 60"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M5 30 C 200 0, 400 60, 600 20 S 950 50, 995 30"
              stroke="#FF007A"
              strokeWidth="4"
              strokeDasharray="2 8"
              strokeLinecap="round"
            />
          </svg>

          {steps.map((s, i) => (
            <Reveal key={s.n} delay={0.08 * i}>
              <div className="relative">
                <div className={`w-20 h-20 rounded-full font-display text-3xl grid place-items-center relative z-10 ${s.circle}`}>
                  {s.n}
                </div>
                <h3 className="mt-5 font-display text-2xl">{s.title}</h3>
                <p className="mt-2 text-rab-dark/70 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
