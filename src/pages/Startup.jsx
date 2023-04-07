import React from 'react'
import Hero from '../components/startup/Hero'
import SideLine from '../components/startup/SideLine'
import Partner from '../components/startup/Partner'
import Testimonial from '../components/startup/Testimonial'
import Team from '../components/startup/Team'
import Contact from '../components/startup/Contact'
import Field from '../components/startup/Field'

const Startup = () => {
  return (
    <div className=' h-screen relative'>
        <Hero/>
        <Partner/>
        <Testimonial/>
        <Team/>
        <Field/>
        <Contact/>
        
        
    </div>
  )
}

export default Startup