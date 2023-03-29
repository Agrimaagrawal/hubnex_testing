import React from 'react'
import Hero from '../components/industrypage/Hero'

import Testimonial from '../components/industrypage/Testimonial'

import Work from '../components/industrypage/Work'

import Footer from '../components/footer/Footer'

import Card from '../components/industrypage/Card'

const Industries = ()=>{
  
  return (
    <div className=' overflow-hidden'>
        <Hero/>
        <Card/>
        <Work/>
        <Testimonial/>
        <Footer />
    </div>
  )
}

export default Industries