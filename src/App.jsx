import React from 'react'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Service from './sections/Service'
import About from './sections/About'
import Journey from './sections/Journey'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#111111]">
      <CustomCursor />
      <Navbar/>
      <Hero/>
      <Projects/>
      <Skills/>
      <Service/>
      <About/>
      <Journey/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App