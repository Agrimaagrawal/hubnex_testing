import React from 'react'
import Hero from '../components/industrypage/Hero'

import Testimonial from '../components/industrypage/Testimonial'

import Work from '../components/industrypage/Work'

import Footer from '../components/footer/Footer'

const Industries = ()=>{
  
  return (
    <div className=' overflow-hidden'>
        <Hero/>
        <Work/>
        <Testimonial/>
        <Footer />
    </div>
  )
}

export default Industries