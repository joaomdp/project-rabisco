import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Sobre from '@/components/Sobre'
import Servicos from '@/components/Servicos'
import Portfolio from '@/components/Portfolio'
import Depoimentos from '@/components/Depoimentos'
import Processo from '@/components/Processo'
import CTAFinal from '@/components/CTAFinal'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Portfolio />
        <Depoimentos />
        <Processo />
        <CTAFinal />
      </main>
      <Footer />
    </>
  )
}
