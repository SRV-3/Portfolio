import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Service from './sections/Service'
import Journey from './sections/Journey'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import { Outlet } from 'react-router'

function App() {
  return (
    <div className="bg-[#111111]">
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Service/>
      <Journey/>
      <Contact/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App