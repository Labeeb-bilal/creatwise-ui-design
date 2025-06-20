import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import BrandShowcase from './components/ShowCase/BrandShowcase'
import Expertise from './components/Expertise/Expertise'
import Works from './components/Works/Works'
import Experience from './components/Experience/Experience'
import Blog from './components/Blog/Blog'
import Testimonials from './components/Testimonials/Testimonials'
import FAQ from "./components/FAQ's/FAQ"
import Footer from './components//Footer/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <BrandShowcase />
      <Expertise />
      <Works />
      <Experience />
      <Blog />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App