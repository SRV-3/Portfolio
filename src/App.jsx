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

      <div className={`bg-[#0a0a0a] min-h-screen relative transition-opacity duration-700 ${isLoading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        
        {/* Premium Film Grain Overlay */}
        <div 
          className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        ></div>

        {/* Main Content Wrapper */}
        <div className="relative z-10">
          <CustomCursor />
          <Navbar/>
          <Hero/>
          <About/>
          <Projects/>
          <Skills/>
          <Service/>
          <Journey/>
          <Contact/>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App