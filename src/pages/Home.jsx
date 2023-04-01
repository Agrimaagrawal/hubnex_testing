import React from 'react'

import  Footer from '../components/footer/Footer'
import  About from '../components/homepage/About'
import  Brand from '../components/homepage/Brand'
import  Hero from '../components/homepage/Hero'
import  Services from '../components/homepage/Services'
import  Testimonial from '../components/homepage/Testimonial'
import  LeftNavbar from '../components/navbar/LeftNavbar'
import MobileNavbar from '../components/navbar/MobileNavbar'





const Home = () => {


  return (

    <>
    <div className=' h-screen w-full relative'>

        <div className=' hidden lg:inline-block absolute left-10 z-50'>
              <LeftNavbar/>
          </div>

          <div className=' h-full w-full '>

              <section id='section-1' className='h-full w-full '>
                  <Hero />
              </section>
              
              <section id='section-2' className='h-full w-full '>
                <Brand/>
              </section>
              
              <section  id='section-3' className='h-full w-full '>
                <Services/>
              </section>
              
              <section id='section-4' className='h-full w-full '>
                <Testimonial/>
              </section>
              
              <section id='section-5' className='h-full w-full '>
                <About/>
              </section>
              
              <section id='section-6' className='h-full w-full ' >
                <Footer/>
              </section>
          </div>
    </div>
    </>
  )
}

export default Home


