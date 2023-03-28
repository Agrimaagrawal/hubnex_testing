import React from 'react'
import Hero from '../components/servicepage/Hero'
import Ourservice from '../components/servicepage/Ourservice'
import Partners from '../components/aboutpage/Partners'
import Footer from '../components/footer/Footer'

const Services = () => {
  return (
    <div className='overflow-hidden'>
        <Hero/>
        <Ourservice/>
        <Partners/>
        <Footer/>
    </div>
  )
}

export default Services