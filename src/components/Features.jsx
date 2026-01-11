import React from 'react'
import { motion } from 'framer-motion'
import { Truck, Box, Clock, CheckCircle } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <Truck size={48} className="text-primary"/>,
      title: 'Профессиональные водители',
      description: 'Опытные водители с полным комплектом документов и страхования'
    },
    {
      icon: <Box size={48} className="text-accent"/>,
      title: 'Разные типы грузов',
      description: 'Доставка любых грузов: от документов до крупногабаритных изделий'
    },
    {
      icon: <Clock size={48} className="text-primary"/>,
      title: 'Точные сроки',
      description: 'Строгое соблюдение графика доставки с минимальными задержками'
    },
    {
      icon: <CheckCircle size={48} className="text-accent"/>,
      title: 'Полная отчетность',
      description: 'Постоянное отслеживание груза и детализация маршрута'
    }
  ]

  return (
    <section className="py-24 bg-[#1A1F2E]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16">
          Почему выбирают нас
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-surface p-8 rounded-2xl border border-[#2D3748]">
              <div className="mb-6 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white text-center">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-center">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}