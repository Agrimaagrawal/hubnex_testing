import React from 'react'
// import Hero from '../components/servicepage/Hero'
import Hero from '../components/serviceUpdated/Hero'
// import Ourservice from '../components/servicepage/Ourservice'
import Ourservice from '../components/serviceUpdated/Ourservice'
import Choose from '../components/serviceUpdated/Choose'
import Partners from '../components/aboutpage/Partners'
import Footer from '../components/footer/Footer'
// import Aboutus from '../components/servicepage/Aboutus'
import Aboutus from '../components/serviceUpdated/Aboutus'
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
        <Choose/>
        <Aboutus/> 
        {isMobile()? <Swiperpartners/> :<Partners/>}
        <Footer/>
    </div>
  )
}

export default Services