'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import Reveal from './Reveal'
import { contactSchema, type ContactFormData } from '@/lib/contact-schema'
import { submitContact } from '@/lib/web3forms'

const contacts = [
  { label: 'E-mail',       value: 'oi@rabisco.ag',    accent: '#FFEA00' },
  { label: 'Instagram',    value: '@rabisco.agencia', accent: '#FF007A' },
  { label: 'Onde estamos', value: 'Brasil · Remoto',  accent: '#FFEA00' },
]

export default function CTAFinal() {
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) })

  async function onSubmit(data: ContactFormData) {
    setLoading(true)
    try {
      const result = await submitContact(data)
      if (result.success) {
        toast.success('Mensagem enviada! Em breve entramos em contato. 🎉')
        reset()
      } else {
        toast.error('Ops, algo deu errado. Tente novamente.')
      }
    } catch {
      toast.error('Erro de conexão. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contato" className="relative py-28 md:py-44 cta-deep text-white overflow-hidden">

      {/* Background glows */}
      <div className="absolute -top-48 -left-48 w-[40rem] h-[40rem] rounded-full bg-rab-pink/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-48 -right-48 w-[36rem] h-[36rem] rounded-full bg-rab-yellow/12 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] rounded-full bg-rab-pink/8 blur-3xl pointer-events-none" />

      <svg className="absolute top-10 right-10 w-52 opacity-25 hidden md:block pointer-events-none" viewBox="0 0 300 80" fill="none" aria-hidden="true">
        <path d="M4 50 C 55 14, 130 68, 200 32 S 278 52, 296 44" stroke="#FFEA00" strokeWidth="5" strokeLinecap="round" />
      </svg>
      <svg className="absolute bottom-14 left-10 w-40 opacity-20 hidden md:block pointer-events-none" viewBox="0 0 220 60" fill="none" aria-hidden="true">
        <path d="M4 38 C 38 10, 95 54, 148 24 S 200 42, 216 32" stroke="#FFEA00" strokeWidth="4" strokeLinecap="round" />
      </svg>

      <div className="relative max-w-5xl mx-auto px-5 md:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <Reveal>
            <div className="inline-flex items-center gap-2.5" style={{ borderLeft: '1.5px solid #FFEA00', paddingLeft: '10px' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-rab-yellow animate-pulse flex-shrink-0" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/50">
                Vagas abertas · Junho 2026
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="mt-8 font-display text-5xl sm:text-6xl md:text-8xl leading-[0.92] tracking-tight">
              Pronto pra sua marca<br />
              <span className="text-rab-pink hand-underline">rabiscar</span> o mercado?
            </h2>
          </Reveal>

          <Reveal delay={0.11}>
            <p className="mt-7 text-base md:text-lg text-white/55 max-w-xl mx-auto leading-relaxed">
              Bora conversar — sem proposta de 40 páginas, sem reunião que podia ser e-mail.
              Só estratégia real e gente que entende de marca.
            </p>
          </Reveal>
        </div>

        {/* Links + Formulário */}
        <Reveal delay={0.15}>
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Coluna esquerda: links externos */}
            <div className="space-y-8">
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:oi@rabisco.ag"
                  className="btn-shine inline-flex items-center gap-2 bg-rab-pink hover:bg-rab-pink2 text-white font-bold text-base px-8 py-4 rounded-full shadow-glow transition"
                >
                  Iniciar meu projeto
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14m-5-6 6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-white/65 hover:text-white font-semibold text-sm transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-white/50"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.7 6L0 24l6.2-1.6c1.7.9 3.6 1.4 5.6 1.4h.1c6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.4-8.3ZM12 22a10 10 0 0 1-5.1-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 0 1 2 12c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10Zm5.5-7.5c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.2s-.8 1-1 1.1c-.2.2-.4.2-.7 0-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.5c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.5 0-.1-.6-1.5-.8-2.1-.2-.6-.4-.5-.6-.5h-.5c-.2 0-.5 0-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .2.3 2 3 4.7 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4 0-.2-.2-.3-.5-.4Z" />
                  </svg>
                  WhatsApp
                </a>
              </div>

              <div className="flex items-center gap-5 max-w-sm">
                <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />
                <svg viewBox="0 0 60 10" fill="none" aria-hidden="true" style={{ width: '60px', opacity: 0.55 }}>
                  <path d="M0 6 C 12 2, 26 9, 40 4 S 54 8, 60 5" stroke="#FFEA00" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />
              </div>

              <div className="grid gap-6">
                {contacts.map(({ label, value, accent }) => (
                  <div key={label} style={{ borderTop: `1.5px solid ${accent}33`, paddingTop: '14px' }}>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>
                      {label}
                    </div>
                    <div className="mt-1.5 font-semibold text-sm text-white/85">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coluna direita: formulário */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
            >
              <div>
                <Input
                  {...register('name')}
                  placeholder="Seu nome"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-rab-pink"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-rab-yellow">{errors.name.message}</p>
                )}
              </div>

              <div>
                <Input
                  {...register('email')}
                  type="email"
                  placeholder="seu@email.com"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-rab-pink"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-rab-yellow">{errors.email.message}</p>
                )}
              </div>

              <div>
                <Textarea
                  {...register('message')}
                  placeholder="Conta um pouco sobre seu projeto..."
                  rows={5}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-rab-pink resize-none"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-rab-yellow">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full btn-shine bg-rab-pink hover:bg-rab-pink2 text-white font-bold py-4 rounded-full shadow-glow transition"
              >
                {loading ? 'Enviando...' : 'Enviar mensagem'}
              </Button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
