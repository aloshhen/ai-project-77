import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16">
          Как мы работаем
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-surface p-8 rounded-2xl border border-[#2D3748]">
            <div className="text-4xl text-primary mb-6">1</div>
            <h3 className="text-xl font-bold mb-3 text-white">Заявка</h3>
            <p className="text-gray-400">
              Оставьте заявку через форму или по телефону. Мы бесплатно рассчитаем стоимость перевозки
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-surface p-8 rounded-2xl border border-[#2D3748]">
            <div className="text-4xl text-accent mb-6">2</div>
            <h3 className="text-xl font-bold mb-3 text-white">Подготовка</h3>
            <p className="text-gray-400">
              Организуем транспорт, проверяем документы и готовим маршрут
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-surface p-8 rounded-2xl border border-[#2D3748]">
            <div className="text-4xl text-primary mb-6">3</div>
            <h3 className="text-xl font-bold mb-3 text-white">Доставка</h3>
            <p className="text-gray-400">
              Отправляем груз и предоставляем отчетность по каждому этапу маршрута
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}