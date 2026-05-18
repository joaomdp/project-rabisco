import RabiscoLogo from './RabiscoLogo'

const navLinks = [
  { href: '#sobre',       label: 'Sobre'       },
  { href: '#servicos',    label: 'Serviços'    },
  { href: '#portfolio',   label: 'Portfólio'   },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato',     label: 'Contato'     },
]

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/rabisco.agencia',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/5500000000000',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.7 6L0 24l6.2-1.6c1.7.9 3.6 1.4 5.6 1.4h.1c6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.4-8.3Zm-8.5 18.4a9.9 9.9 0 0 1-5.1-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 0 1 2 12c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10Zm5.5-7.5c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.2s-.8 1-1 1.1c-.2.2-.4.2-.7 0-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.5c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.5 0-.1-.6-1.5-.8-2.1-.2-.6-.4-.5-.6-.5h-.5c-.2 0-.5 0-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .2.3 2 3 4.7 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4 0-.2-.2-.3-.5-.4Z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-rab-snow border-t border-rab-dark/8">

      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-16 grid md:grid-cols-3 gap-10 md:gap-6">

        {/* Brand column */}
        <div className="md:col-span-1 flex flex-col gap-4">
          <RabiscoLogo size="normal" />
          <p className="text-sm text-rab-dark/55 max-w-[240px] leading-relaxed">
            Criatividade com estratégia. Sua marca no próximo nível.
          </p>
          <div className="flex items-center gap-3 mt-1">
            {socialLinks.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-full bg-rab-dark/5 hover:bg-rab-pink hover:text-white text-rab-dark/60 grid place-items-center transition"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Nav links column */}
        <div className="md:col-span-1">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-rab-pink mb-5">Navegação</div>
          <nav className="grid gap-3">
            {navLinks.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-rab-dark/65 hover:text-rab-pink transition-colors font-medium"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact column */}
        <div className="md:col-span-1">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-rab-pink mb-5">Fale com a gente</div>
          <div className="grid gap-4">
            <div>
              <div className="text-xs text-rab-dark/45 font-medium uppercase tracking-wider mb-1">E-mail</div>
              <a href="mailto:oi@rabisco.ag" className="text-sm font-semibold text-rab-dark hover:text-rab-pink transition-colors">
                oi@rabisco.ag
              </a>
            </div>
            <div>
              <div className="text-xs text-rab-dark/45 font-medium uppercase tracking-wider mb-1">Instagram</div>
              <a href="https://instagram.com/rabisco.agencia" target="_blank" rel="noreferrer" className="text-sm font-semibold text-rab-dark hover:text-rab-pink transition-colors">
                @rabisco.agencia
              </a>
            </div>
            <div>
              <div className="text-xs text-rab-dark/45 font-medium uppercase tracking-wider mb-1">Localização</div>
              <span className="text-sm font-semibold text-rab-dark/75">Brasil · Atendimento remoto</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-rab-dark/8">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-rab-dark/45">
          <span>© {new Date().getFullYear()} Rabisco Agência. Feito com 💗 no Brasil.</span>
          <span className="hidden sm:block">CNPJ 00.000.000/0001-00</span>
        </div>
      </div>
    </footer>
  )
}
