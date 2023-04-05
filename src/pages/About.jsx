import React, { Suspense,useState } from 'react'
import Hero from '../components/aboutpage/Hero'
import Abouts from '../components/aboutpage/Abouts' 
import Ourself from '../components/aboutpage/Ourself' 
import Partners from '../components/aboutpage/Partners' 
import Footer from '../components/footer/Footer' 
import AboutCards from '../components/aboutpage/AboutCards' 
import Swiperpartners from '../components/aboutpage/Swiperpartners'



const About = () => {

  const isMobile=()=> {
    const match=window.matchMedia('(pointer:coarse)');
    return(match && match.matches);
    
    
  }


  
  return (
    <div className='overflow-hidden'>
        <Hero/>
        <Abouts/>
        <AboutCards/>
        <Ourself/>
        {isMobile()?<Swiperpartners/> :<Partners/>}
        <Footer />
        
    </div>
  )
}

export default About