import { motion } from 'framer-motion'
import SectionReveal from '../ui/SectionReveal'
import MagneticButton from '../ui/MagneticButton'
import { siteConfig } from '../../siteConfig'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-navy-950 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-navy-600/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-500/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <SectionReveal className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-silver-400 text-lg max-w-2xl mx-auto">
            Ready to start your project? We're here to help bring your ideas to life
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <SectionReveal delay={0.2}>
            <div className="space-y-8">
              <motion.div
                className="group"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-navy-800 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    📍
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                    <p className="text-silver-400">{siteConfig.location}</p>
                    <a
                      href={siteConfig.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy-400 hover:text-navy-300 text-sm mt-2 inline-block"
                    >
                      View on Map →
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="group"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-navy-800 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    💬
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-silver-400 hover:text-white transition-colors"
                    >
                      +{siteConfig.whatsapp}
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="group"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-navy-800 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    ✉️
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-silver-400 hover:text-white transition-colors break-all"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="p-6 rounded-2xl bg-navy-900/50 border border-navy-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                <div className="space-y-2 text-silver-400">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p className="text-silver-500 text-sm">Closed on Sundays</p>
                </div>
              </motion.div>
            </div>
          </SectionReveal>

          {/* CTA Card */}
          <SectionReveal delay={0.4}>
            <motion.div
              className="h-full flex flex-col justify-center p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-navy-800 to-navy-900 border border-navy-700"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-6xl mb-6 text-center"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🚀
              </motion.div>

              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
                Let's Create Something Amazing
              </h3>
              <p className="text-silver-400 mb-8 text-center leading-relaxed">
                Whether you need a custom design, bulk printing, or complete branding — we're ready to help.
                Send us a message on WhatsApp and let's get started!
              </p>

              <div className="space-y-4">
                <MagneticButton
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Hi Axiom, I would like to discuss a project.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-lg justify-center"
                >
                  <span>Start a Conversation</span>
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </MagneticButton>

                <button
                  onClick={() => window.location.href = `mailto:${siteConfig.email}`}
                  className="w-full px-6 py-4 rounded-lg font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 border border-white/20 hover:border-white/40"
                >
                  Or Send an Email
                </button>
              </div>

              <p className="text-center text-silver-500 text-sm mt-6">
                CAC Registered • {siteConfig.cac}
              </p>
            </motion.div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
