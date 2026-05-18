import type { Metadata } from 'next'
import { Inter, Archivo_Black, Caveat, Geist } from 'next/font/google'
import './globals.css'
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const archivoBlack = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-archivo-black',
  display: 'swap',
})

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rabisco — Agência de Marketing Digital',
  description: 'Marketing digital, audiovisual e identidade visual para negócios que querem crescer.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Rabisco — Agência de Marketing Digital',
    description: 'Marketing digital, audiovisual e identidade visual.',
    url: 'https://rabisco.ag',
    siteName: 'Rabisco',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={cn(inter.variable, archivoBlack.variable, caveat.variable, "font-sans", geist.variable)}
    >
      <body>{children}</body>
    </html>
  )
}
