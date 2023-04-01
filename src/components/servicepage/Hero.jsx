import React from 'react'
import serviceLander from '../../assets/manArt.png'
import Navbar from '../navbar/Navbar'

const Hero = () => {
  return (
    <div className=' h-screen w-full relative bg-black bg-manart bg-cover bg-center bg-no-repeat overflow-hidden md:bg-none'>
        <Navbar />
        <div className='w-full h-full flex items-center justify-between'>
            <div className=' text-white w-[80%] m-auto flex justify-between h-full items-center'>
                <div className=' w-90 flex flex-col gap-10'>
                    <span className=' text-5xl'>Services to <br/> help you grow</span>
                    <p className=' text-lg'>"Expert IT Consulting Services to Boost Your Business Growth"</p>
                    <button className=' bg-white text-black py-2 px-5 border-none w-max rounded-full'>get in touch</button>
                </div>
                <div>
                    <img src={serviceLander} alt="manart" width={500} className=" hidden md:inline-block"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero