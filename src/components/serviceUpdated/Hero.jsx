import React from 'react'
// import serviceLander from '../../assets/servicepage1.png'
import Navbar from '../navbar/Navbar'

const Hero = () => {
  return (
    
    <div className=' h-screen bg-serviceLander bg-cover bg-center w-full relative '>
        <Navbar />
        <div className='w-full h-full flex items-center justify-between'>
            <div className=' text-white w-[80%] m-auto flex justify-between h-full items-center'>
                <div className=' w-90 flex flex-col gap-10'>
                    <span className=' text-6xl font-gilroy-bold leading-tight'>Services to <br/> help you grow</span>
                    <p className=' text-lg'>"Expert IT Consulting Services to Boost Your Business Growth"</p>
                    <button className=' bg-white text-black py-2 px-5 border-none w-max rounded-full font-bold'>Get in touch</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Hero