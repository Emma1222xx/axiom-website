import { motion } from 'framer-motion'
import SectionReveal from '../ui/SectionReveal'
import { siteConfig } from '../../siteConfig'

const iconMap: Record<string, string> = {
  'pen-tool': '✏️',
  'printer': '🖨️',
  'shirt': '👕',
  'award': '🎖️',
  'layout': '🎨',
  'tag': '🏷️',
  'mail': '✉️',
  'scroll': '📜',
  'graduation-cap': '🎓',
  'shield-check': '🛡️',
  'paint-roller': '🖌️',
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-navy-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-navy-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <SectionReveal className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-silver-400 text-lg max-w-2xl mx-auto">
            From design to delivery, we handle everything under one roof
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.map((service, i) => (
            <SectionReveal key={service.id} delay={i * 0.05}>
              <motion.div
                className="group relative p-6 border border-white/10 rounded-2xl bg-navy-800/30 backdrop-blur-sm hover:bg-navy-800/50 transition-all duration-300 hover:border-navy-500/50 hover:shadow-glow cursor-pointer"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-navy-700/50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {iconMap[service.icon] || '⚡'}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 text-white group-hover:text-silver-100 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-silver-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-navy-600/0 to-navy-500/0 group-hover:from-navy-600/10 group-hover:to-navy-500/5 transition-all duration-300 pointer-events-none" />
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
