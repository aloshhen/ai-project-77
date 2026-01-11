import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/10 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Автоперевозки
            <span className="block mt-2 text-primary">по всей стране</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-10">
            Быстрая, надежная и экономичная доставка грузов любого типа
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#tariffs"
              className="px-8 py-4 bg-primary text-white rounded-lg font-medium shadow-lg hover:shadow-primary/30 transition-all">
              Рассчитать стоимость
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-4 border border-white/20 text-white rounded-lg font-medium hover:bg-white/10 transition-all">
              Заказать услугу
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}