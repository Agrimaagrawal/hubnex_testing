import React from 'react'
import Hero from '../components/servicepage/Hero'
import Ourservice from '../components/servicepage/Ourservice'
import Partners from '../components/aboutpage/Partners'
import Footer from '../components/footer/Footer'
import Aboutus from '../components/servicepage/Aboutus'
import Swiperpartners from '../components/aboutpage/Swiperpartners'

const Services = () => {
  const isMobile=()=> {
    const match=window.matchMedia('(pointer:coarse)');
    return(match && match.matches);
    
    
  }
  return (
    <div className='overflow-hidden'>
        <Hero/>
        <Ourservice/>
        <Aboutus/>
        {isMobile()?<Swiperpartners/> :<Partners/>}
        <Footer/>
    </div>
  )
}

export default Services