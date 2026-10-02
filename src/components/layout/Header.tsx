import { useState, useEffect } from 'react'
import { siteConfig } from '../../siteConfig'
import MagneticButton from '../ui/MagneticButton'

function wa(message = '') {
  return `https://wa.me/${siteConfig.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ''}`
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleNav(href: string) {
    setMenuOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy-950/95 backdrop-blur-md shadow-glow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#hero" onClick={e => { e.preventDefault(); handleNav('#hero') }} className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-glow rounded-lg">
          <img src="logo.png" alt={siteConfig.name + ' logo'} className="h-10 w-10 object-contain" loading="eager" />
          <div className="hidden sm:block">
            <p className="font-display font-bold text-white text-sm leading-tight tracking-wide">{siteConfig.name}</p>
            <p className="text-silver-500 text-[10px] tracking-widest uppercase">{siteConfig.tagline}</p>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-1">
          {siteConfig.nav.map(item => (
            <button key={item.href} onClick={() => handleNav(item.href)} className="px-4 py-2 text-sm text-silver-400 hover:text-white rounded-lg transition-colors duration-200 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-glow">
              {item.label}
            </button>
          ))}
        </nav>
        <div className="hidden lg:block">
          <MagneticButton href={wa('Hi Axiom, I would like to get a quote.')} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
            Get a Quote
          </MagneticButton>
        </div>
      </div>
    </header>
  )
}
