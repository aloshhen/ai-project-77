import React from 'react'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6">
            Готовы начать?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 mb-10">
            Оставьте заявку и получите бесплатную консультацию от наших специалистов
          </motion.p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-8 py-4 bg-white text-primary rounded-lg font-medium shadow-lg hover:shadow-white/30 transition-all">
            Заказать услугу
          </motion.a>
        </div>
      </div>
    </section>
  )
}