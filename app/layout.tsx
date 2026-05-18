import type { Metadata } from 'next'
import { Inter, Caveat } from 'next/font/google'
import localFont from 'next/font/local'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const caveat = Caveat({ subsets: ['latin'], variable: '--font-caveat', display: 'swap' })
const gulfsDisplay = localFont({
  src: './fonts/gulfs-display-normal.woff2',
  variable: '--font-gulfs-display',
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${caveat.variable} ${gulfsDisplay.variable}`}>
      <body>
        {children}
        <Toaster position="bottom-center" richColors />
      </body>
    </html>
  )
}
