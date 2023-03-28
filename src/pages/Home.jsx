import React from 'react'
import { Suspense } from 'react'
import { useActiveMenu } from 'react-active-menu'

import  Footer from '../components/footer/Footer'
import  About from '../components/homepage/About'
import  Brand from '../components/homepage/Brand'
import  Hero from '../components/homepage/Hero'
import  Services from '../components/homepage/Services'
import  Testimonial from '../components/homepage/Testimonial'
import  LeftNavbar from '../components/navbar/LeftNavbar'
import Partners from '../components/aboutpage/Partners'
import MobileNavbar from '../components/navbar/MobileNavbar'
import Navbar from '../components/navbar/Navbar'




const Home = () => {

  const { registerTrigger, registerContainer, registerSection} = useActiveMenu({ smooth: true})

  return (
    <>
    <div className=' h-screen w-full relative'>
        <div className=' absolute left-10 z-50'>
              <LeftNavbar register={registerTrigger}/>
          </div>
          <div ref={registerContainer} className=' h-full snap-y snap-mandatory overflow-auto'>
            <section ref={registerSection("section-1")} className='h-full w-full snap-center overflow-hidden'>
                <Hero />
            </section>
              
              <section ref={registerSection("section-2")} className='h-full w-full snap-center overflow-hidden'>
                <Brand/>
              </section>
              
              <section ref={registerSection("section-3")} className='h-full w-full snap-center overflow-hidden'>
                <Services/>
              </section>
              
              <section ref={registerSection("section-4")} className='h-full w-full snap-center overflow-hidden'>
                <Testimonial/>
              </section>
              
              <section ref={registerSection("section-5")} className='h-full w-full snap-center overflow-hidden'>
                <About/>
              </section>
              
              <section ref={registerSection("section-6")} className='h-full w-full snap-center overflow-hidden' >
                <Footer/>
              </section>
          </div>
    </div>
    </>
  )
}

export default Home


