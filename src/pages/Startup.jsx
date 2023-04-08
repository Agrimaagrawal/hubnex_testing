import React from 'react'
import Hero from '../components/startup/Hero'
import SideLine from '../components/startup/SideLine'
import Partner from '../components/startup/Partner'
import Testimonial from '../components/startup/Testimonial'
import Team from '../components/startup/Team'
import Contact from '../components/startup/Contact'
import Field from '../components/startup/Field'
import Swiperpartners from '../components/aboutpage/Swiperpartners'
import MobileCounter from '../components/startup/MobileCounter'
import SwiperCards from '../components/startup/SwiperCards'

const Startup = () => {
  const isMobile=()=> {
    const match=window.matchMedia('(pointer:coarse)');
    return(match && match.matches);
    
    
  }
  return (
    <div className=' h-screen relative'>
        <Hero/>
        {isMobile()?<Swiperpartners/> :<Partner/>}
        <MobileCounter/>
        <Testimonial/>
        <Team/>
        {isMobile()?<SwiperCards/>:<Field/>}
        <Contact/>
        
        
    </div>
  )
}

export default Startup