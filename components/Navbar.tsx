'use client'

import { useEffect, useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import RabiscoLogo from './RabiscoLogo'

const links = [
  { href: '#sobre',       label: 'Sobre'       },
  { href: '#servicos',    label: 'Serviços'    },
  { href: '#portfolio',   label: 'Portfólio'   },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato',     label: 'Contato'     },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    document.addEventListener('scroll', onScroll, { passive: true })
    return () => document.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-solid' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between gap-6">

        <a href="#top" aria-label="Início">
          <RabiscoLogo size="normal" hideSubtitle />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8 text-rab-dark/75 text-sm font-medium">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="relative hover:text-rab-pink transition-colors after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-rab-pink after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contato"
            className="btn-shine hidden sm:inline-flex items-center gap-2 bg-rab-pink hover:bg-rab-pink2 text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-glow transition"
          >
            Falar com a gente
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14m-5-6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          {/* Mobile drawer via shadcn Sheet */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="lg:hidden w-10 h-10 grid place-items-center rounded-full bg-rab-dark/5 hover:bg-rab-pink/10 text-rab-dark transition"
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            >
              {open ? (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              ) : (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              )}
            </SheetTrigger>

            <SheetContent side="top" className="bg-white border-b border-rab-dark/8 shadow-soft px-6 py-5">
              <nav className="grid gap-1">
                {links.map((l, i) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between py-3 text-rab-dark font-medium text-base hover:text-rab-pink transition ${
                      i < links.length - 1 ? 'border-b border-rab-dark/8' : ''
                    }`}
                  >
                    {l.label}
                    <svg className="w-4 h-4 opacity-40" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14m-5-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                ))}
                <a
                  href="#contato"
                  onClick={() => setOpen(false)}
                  className="mt-3 btn-shine flex justify-center items-center gap-2 bg-rab-pink text-white font-bold py-3.5 rounded-full shadow-glow"
                >
                  Falar com a gente
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
