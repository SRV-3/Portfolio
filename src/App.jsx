import React from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Service from './sections/Service'
import { Outlet } from 'react-router'

function App() {
  return (
    <div className="bg-[#111111]">
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Service/>
      <Outlet/>
    </div>
  )
}

export default App