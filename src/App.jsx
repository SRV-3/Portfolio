import React, { useState } from 'react'
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'
import Loader from './components/Loader'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Service from './sections/Service'
import About from './sections/About'
import Journey from './sections/Journey'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Scroll Progress Bar Setup
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#FF4500] origin-left z-[99998]"
        style={{ scaleX }}
      />

      <div className={`bg-[#111111] transition-opacity duration-700 ${isLoading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
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
    </>
  )
}

export default App