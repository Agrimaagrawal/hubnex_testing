import React from 'react'
import Hero from '../components/servicepage/Hero'
import Ourservice from '../components/servicepage/Ourservice'
import Partners from '../components/aboutpage/Partners'
import Footer from '../components/footer/Footer'
import Aboutus from '../components/servicepage/Aboutus'

const Services = () => {
  return (
    <div className='overflow-hidden'>
        <Hero/>
        <Ourservice/>
        <Aboutus/>
        <Partners/>
        <Footer/>
    </div>
  )
}

export default Services