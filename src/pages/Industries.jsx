import React from 'react'
import Hero from '../components/industrypage/Hero'
import Testimonial from '../components/industrypage/Testimonial'
import Work from '../components/industrypage/Work'
import Footer from '../components/footer/Footer'
import Cards from '../components/industrypage/Cards'
import Swiperpartners from '../components/aboutpage/Swiperpartners'

import Card from '../components/industrypage/Card'

const Industries = ()=>{
  const isMobile=()=> {
    const match=window.matchMedia('(pointer:coarse)');
    return(match && match.matches);
    
    
  }
  
  return (
    <div className=' overflow-hidden'>
        <Hero/>
        <Cards/>
        <Work/>
        <Testimonial/>
        {isMobile()? <Swiperpartners/>:<Partners/>}
        <Footer />
    </div>
  )
}

export default Industries