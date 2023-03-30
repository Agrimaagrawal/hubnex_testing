import React from 'react'
import Navbar from '../navbar/Navbar'
import aboutLander from '../../assets/aboutLander.png'
import MobileNavbar from '../navbar/MobileNavbar'

const Hero = () => {
  return (
    <div className=' h-screen w-full relative  bg-black'>
        <img src={aboutLander} alt='aboutLanderPage' className=' absolute bottom-0 right-0 w-[100%] object-cover h-[60%] md:h-full md:w-[75%]'/>
        <Navbar />
        <MobileNavbar/>
        <div className=' w-full md:w-[75%} h-full md:m-auto flex items-center'>
            <div className=' flex flex-col text-white gap-5 absolute left-10 md:left-36'>
              <div className=' text-5xl md:text-6xl '>
                <span>About Us</span>
              </div>
              <div className=' w-44  text-sm md:w-[450px]  md:text-lg'>
                <p>Passionate about exceptional IT services, delivering innovative solutions to meet unique needs.</p>
              </div>
              <div>
                <button className=' bg-transparent border-white border-[2px] py-1 px-4 md:py-2 md:px-5 rounded-full '>Read more</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Hero