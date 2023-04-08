import React from 'react'
import Navbar from '../navbar/Navbar'

const Hero = () => {
  return (
    <div className=' h-screen bg-indusLander bg-cover bg-[90%] md:bg-center w-full relative '>
        <Navbar />
      <div className=' h-[calc(100vh-80px)] w-full flex items-center justify-center'>
        <div className=' w-full md:w-[80%] flex h-full items-center'>

            <div className=' text-white flex flex-col gap-10 md:h-auto h-full  w-[90%] m-auto md:m-0 md:w-[600px] max-[820px]:text-center'>
              <div className=' flex flex-2 lg:flex-initial justify-center flex-col gap-10 w-full h-full'>
                <span className=' text-3xl md:text-6xl font-gilroy-bold leading-[50px]'>empowering healthcare with AI</span>
                <p className=' text-lg md:w-[450px]'>We help you realize intelligent, connected, and patient-centric healthcare.</p>
              </div>
              <div className=' flex-1 lg:flex-initial md:items-start md:justify-start items-end justify-end flex w-full h-full'>
                <button className=' w-max py-2 px-5 bg-white font-gilroy-bold text-black rounded-full max-[820px]:mx-auto shadow-md shadow-violet-500'>Let's talk</button>
              </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Hero