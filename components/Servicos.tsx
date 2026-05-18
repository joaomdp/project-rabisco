import Reveal from './Reveal'

type Service = {
  num: string
  title: string
  desc: string
  bullets: string[]
  variant: 'pink' | 'yellow' | 'dark'
}

const services: Service[] = [
  {
    num: '01',
    title: 'Marketing Digital',
    desc: 'Tráfego pago, social media, estratégia de conteúdo e funis que de fato convertem. Performance com cara de gente.',
    bullets: ['Meta Ads & Google Ads', 'Gestão de redes sociais', 'Copywriting estratégico'],
    variant: 'pink',
  },
  {
    num: '02',
    title: 'Produção Audiovisual',
    desc: 'Vídeo institucional, comercial, reels, podcast, motion. A história da sua marca contada do jeito certo.',
    bullets: ['Produção & roteiro', 'Vídeos para redes sociais', 'Motion e edição'],
    variant: 'yellow',
  },
  {
    num: '03',
    title: 'Identidade Visual',
    desc: 'Branding, logo, paleta, tipografia e todo um sistema visual coerente. Sua marca reconhecível em qualquer lugar.',
    bullets: ['Naming & posicionamento', 'Logo e manual da marca', 'Design de embalagem'],
    variant: 'dark',
  },
]

const styles = {
  pink: {
    card: 'bg-gradient-to-br from-rab-pink to-rab-pink2 text-white',
    numColor: 'text-white/15',
    iconBg: 'bg-white text-rab-pink',
    bullet: 'text-rab-yellow',
    btn: 'bg-white hover:bg-rab-yellow text-rab-pink hover:text-rab-dark',
    textMute: 'text-white/90',
  },
  yellow: {
    card: 'bg-rab-yellow text-rab-dark',
    numColor: 'text-rab-dark/10',
    iconBg: 'bg-rab-dark text-rab-yellow',
    bullet: 'text-rab-pink',
    btn: 'bg-rab-dark hover:bg-rab-pink text-white',
    textMute: 'text-rab-dark/75',
  },
  dark: {
    card: 'bg-rab-dark text-white',
    numColor: 'text-white/10',
    iconBg: 'bg-rab-yellow text-rab-dark',
    bullet: 'text-rab-yellow',
    btn: 'bg-rab-pink hover:bg-rab-pink2 text-white',
    textMute: 'text-white/75',
  },
} as const

function ServiceIcon({ which }: { which: Service['variant'] }) {
  if (which === 'pink')
    return (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Zm9-9v18M3 12h18M5.6 5.6c2.6 3.2 2.6 9.6 0 12.8m12.8-12.8c-2.6 3.2-2.6 9.6 0 12.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  if (which === 'yellow')
    return (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <path d="M15 10v4l4-2-4-2ZM3 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    )
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
      <path d="M12 19V5m0 0-5 5m5-5 5 5M5 19h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Servicos() {
  return (
    <section id="servicos" className="relative py-24 md:py-36 bg-rab-cream overflow-hidden">

      <svg className="absolute top-24 right-8 w-32 opacity-50 hidden md:block" viewBox="0 0 200 100" fill="none" aria-hidden="true">
        <path d="M10 50 C 40 10, 80 90, 110 40 S 190 60, 190 50" stroke="#FFEA00" strokeWidth="6" strokeLinecap="round" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-rab-pink">
            <span className="w-8 h-px bg-rab-pink" /> Serviços
          </div>
          <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">
            O que a gente <span className="text-rab-pink">rabisca</span> pra sua marca.
          </h2>
          <p className="mt-5 text-rab-dark/70 max-w-xl text-lg">
            Três frentes que se completam. Você pode contratar separado ou — o que recomendamos — junto, pra resultado virar coisa séria.
          </p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const st = styles[s.variant]
            return (
              <Reveal key={s.num} delay={0.08 * i}>
                <article className={`svc group rounded-3xl p-8 relative overflow-hidden h-full ${st.card}`}>
                  {s.variant === 'pink' && (
                    <>
                      <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full border-4 border-white/20" />
                      <div className="absolute bottom-6 right-6 w-16 h-16 rounded-2xl bg-white/10 rotate-12" />
                    </>
                  )}
                  {s.variant === 'yellow' && (
                    <svg className="absolute top-8 right-8 w-20 opacity-50" viewBox="0 0 100 60" fill="none">
                      <path d="M5 30 C 25 5, 45 55, 65 25 S 95 35, 95 30" stroke="#FF007A" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                  )}
                  {s.variant === 'dark' && (
                    <svg className="absolute bottom-4 right-4 w-24 opacity-40" viewBox="0 0 100 100" fill="none">
                      <circle cx="50" cy="50" r="40" stroke="#FFEA00" strokeWidth="3" strokeDasharray="5 7" fill="none" />
                    </svg>
                  )}

                  <div className="relative">
                    <div className={`font-display text-7xl ${st.numColor}`}>{s.num}</div>
                    <div className={`w-14 h-14 -mt-8 rounded-2xl grid place-items-center shadow-lg ${st.iconBg}`}>
                      <ServiceIcon which={s.variant} />
                    </div>
                    <h3 className="mt-5 font-display text-3xl">{s.title}</h3>
                    <p className={`mt-3 text-sm leading-relaxed ${st.textMute}`}>{s.desc}</p>

                    <ul className="mt-5 space-y-2 text-sm">
                      {s.bullets.map(b => (
                        <li key={b} className="flex items-center gap-2">
                          <span className={st.bullet}>✓</span> {b}
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#portfolio"
                      className={`mt-7 inline-flex items-center gap-2 font-semibold text-sm px-5 py-3 rounded-full transition ${st.btn}`}
                    >
                      Ver exemplos
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14m-5-6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
