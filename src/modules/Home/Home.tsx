import React from 'react'
//
import About from './sections/About'
import GetInTouch from './sections/GetInTouch'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Worked from './sections/Worked'
import Footer from '@widgets/Footer'
import Why from './sections/Why/Why'


const Home = () => {
  return (
    <>

      <Hero />
      
      <About />
      <Worked />
      <Projects />
      <GetInTouch />

    </>
  )
}

export default Home