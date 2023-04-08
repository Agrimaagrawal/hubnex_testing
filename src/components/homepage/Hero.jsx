import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'
import React from 'react'
 
const Hero = () => {

  return (
  
    <div className='  h-full w-full relative m-auto'>
      <div className=' flex h-[calc(100%-80px)] w-[70%] flex-col md:justify-center items-start m-auto text-white'>
        <div className=' text-3xl md:text-6xl mt-48 md:mt-0 font-semibold'>
          <h1>scale your business</h1>
          <h1>lead the market.</h1>
        </div>
        <div className=' flex flex-col gap-5 sm:gap-2'>
          <p className=' py-5 text-xl'>let our team, help you reach your dream</p>
          <Link to='/service' className=' w-max border-white border-2 md:border-none bg-transparentmd:border-none md:bg-white text-white md:text-black rounded-full py-2 md:py-1 font-bold px-5'><button className=' '>Get Started</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Hero