import { motion } from 'framer-motion'
import SectionReveal from '../ui/SectionReveal'
import { siteConfig } from '../../siteConfig'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-navy-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-navy-600/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-navy-500/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <SectionReveal className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-silver-400 text-lg max-w-2xl mx-auto">
            Four simple steps from concept to delivery
          </p>
        </SectionReveal>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-navy-600 via-navy-500 to-navy-600 -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-24">
            {siteConfig.howItWorks.map((step, i) => (
              <SectionReveal key={step.step} delay={i * 0.15}>
                <motion.div
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <motion.div
                      className="inline-block px-4 py-2 bg-navy-700/50 rounded-full text-navy-300 text-sm font-semibold mb-4"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      Step {step.step}
                    </motion.div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-white">
                      {step.title}
                    </h3>
                    <p className="text-silver-400 text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                      {step.description}
                    </p>
                  </div>

                  {/* Step circle */}
                  <div className="flex-shrink-0 relative">
                    <motion.div
                      className="w-24 h-24 rounded-full bg-gradient-to-br from-navy-600 to-navy-700 flex items-center justify-center shadow-glow relative z-10"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                    >
                      <span className="text-3xl font-bold text-white">{step.step}</span>
                    </motion.div>

                    {/* Pulse effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-navy-500/30"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  </div>

                  {/* Spacer for alternate layout */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>

        <SectionReveal delay={0.6}>
          <div className="mt-16 text-center">
            <motion.a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Hi Axiom, I would like to start a project.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start Your Project</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
