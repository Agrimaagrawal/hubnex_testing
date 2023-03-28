import React, { Suspense } from 'react'
import Hero from '../components/aboutpage/Hero'
import Abouts from '../components/aboutpage/Abouts' 
import Ourself from '../components/aboutpage/Ourself' 
import Partners from '../components/aboutpage/Partners' 
import Footer from '../components/footer/Footer' 
import AboutCards from '../components/aboutpage/AboutCards' 

const About = () => {
  return (
    <div className='overflow-hidden'>
        <Hero/>
        <Abouts/>
        <AboutCards/>
        <Ourself/>
        <Partners/>
        <Footer />
    </div>
  )
}

export default About