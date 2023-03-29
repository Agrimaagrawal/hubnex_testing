import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'
import MobileNavbar from '../navbar/MobileNavbar'
import React from 'react'
 
const Hero = () => {

  return (
  
    <div className=' bg-landerImg bg-cover bg-no-repeat bg-[position:80%] md:bg-center h-full w-full relative'>
        <Navbar/>
        <MobileNavbar/>
      <div className=' flex h-full md:w-[75%] w-[90%] mx-auto flex-col justify-center text-white '>
        <div className=' text-2xl md:text-6xl font-semibold ml-4 '>
          <h1>scale your business</h1>
          <h1>lead the market.</h1>
        </div>
        <div className=''>
          <div className='ml-4 w-[250px] md:w-full'>
          <p className='  text-sm  md:text-lg py-5 font-semibold'>let our team, help you reach your dream</p>
          </div>
          <Link to='/service'><button className=' border-none bg-white text-black rounded-full py-1 font-semibold px-5 ml-4'>get started</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Hero