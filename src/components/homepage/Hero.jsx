import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'
import MobileNavbar from '../navbar/MobileNavbar'
import React from 'react'
 
const Hero = () => {

  return (
  
    <div className=' bg-landerImg bg-cover bg-no-repeat bg-center h-full w-full relative'>
        <Navbar/>
      <div className=' flex h-full md:w-[75%] w-[90%] m-auto flex-col justify-center text-white'>
        <div className=' text-5xl md:text-6xl font-semibold'>
          <h1>scale your business</h1>
          <h1>lead the market.</h1>
        </div>
        <div className=''>
          <p className=' py-5 font-semibold'>let our team, help you reach your dream</p>
          <Link to='/service'><button className=' border-none bg-white text-black rounded-full py-1 font-semibold px-5'>get started</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Hero