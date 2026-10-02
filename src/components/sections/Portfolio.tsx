import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionReveal from '../ui/SectionReveal'
import { siteConfig } from '../../siteConfig'

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredItems = activeCategory === 'all'
    ? siteConfig.portfolio
    : siteConfig.portfolio.filter(item => item.category === activeCategory)

  return (
    <section id="portfolio" className="py-24 bg-navy-950 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-navy-500/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <SectionReveal className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-silver-400 text-lg max-w-2xl mx-auto">
            See the quality and creativity we deliver to our clients
          </p>
        </SectionReveal>

        {/* Category filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {siteConfig.portfolioCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-navy-600 text-white shadow-lg scale-105'
                  : 'bg-navy-800/50 text-silver-400 hover:bg-navy-800 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Portfolio grid with animations */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
              >
                <motion.img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <motion.p
                      className="text-white font-semibold text-lg"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      {item.alt}
                    </motion.p>
                    <motion.span
                      className="inline-block mt-2 px-3 py-1 bg-navy-600/80 backdrop-blur-sm rounded-full text-xs text-silver-200"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.15 }}
                    >
                      {siteConfig.portfolioCategories.find(c => c.id === item.category)?.label}
                    </motion.span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
