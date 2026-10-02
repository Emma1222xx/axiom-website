import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import HowItWorks from './components/sections/HowItWorks'
import Portfolio from './components/sections/Portfolio'
import WhyAxiom from './components/sections/WhyAxiom'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Portfolio />
        <WhyAxiom />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
