import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-[#1A1F2E] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">AutoTransport</h3>
            <p className="text-gray-400">
              Профессиональные автоперевозки по всей стране
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Контакты</h4>
            <p className="text-gray-400 mb-2">+7 (495) 123-45-67</p>
            <p className="text-gray-400">info@autotransport.ru</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Адрес</h4>
            <p className="text-gray-400">г. Москва, ул. Транспортная, д. 12</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Соцсети</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <line x1="2" y1="8" x2="22" y2="8"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <circle cx="10" cy="4" r="2"/>
                  <line x1="22" y1="22" x2="2" y2="2"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-[#2D3748] text-center text-gray-500">
          © 2024 AutoTransport. Все права защищены
        </div>
      </div>
    </footer>
  )
}