import React from 'react'
import { cn } from '../utils'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-[#1A1F2E]/80 border-b border-[#2D3748]">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary">
          <span className="text-white">Auto</span>Transport
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-300 hover:text-white transition-colors">Услуги</a>
          <a href="#tariffs" className="text-gray-300 hover:text-white transition-colors">Тарифы</a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors">О нас</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Контакты</a>
        </div>
        <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1A1F2E] border-t border-[#2D3748]">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a href="#services" className="block text-gray-300 hover:text-white transition-colors">Услуги</a>
            <a href="#tariffs" className="block text-gray-300 hover:text-white transition-colors">Тарифы</a>
            <a href="#about" className="block text-gray-300 hover:text-white transition-colors">О нас</a>
            <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">Контакты</a>
          </div>
        </div>
      )}
    </nav>
  )
}