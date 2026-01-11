import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0F1419]">
      <Navigation />
      <Hero />
      <Features />
      <About />
      <CTA />
      <Footer />
    </div>
  )
}