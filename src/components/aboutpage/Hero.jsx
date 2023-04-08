import React from 'react'
import aboutLander from '../../assets/aboutLander.png'

const Hero = () => {
  return (
    <div className=' h-full w-full relative'>
        <img src={aboutLander} alt='aboutLanderPage' className=' absolute bottom-0 right-0 w-[100%] object-cover h-[60%] md:h-full md:w-[75%]'/>
        <div className=' w-full md:w-[70%} h-[calc(100vh-80px)] md:m-auto flex items-center'>
            <div className=' flex flex-col text-white gap-5 absolute left-10 md:left-36'>
              <div className=' text-5xl font-gilroy-bold md:text-6xl '>
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