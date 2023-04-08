import React from 'react'
import line from '../../assets/lineDesign.png'
import  './style.css'
import i1 from '../../assets/i1.png'
import i2 from '../../assets/i2.png'
import i3 from '../../assets/i3.png'
import i4 from '../../assets/i4.png'
import card from '../../assets/Rectangle.png'

const Field = () => {
  return (
    <div className=' min-h-screen py-10 bg-black w-full text-white flex justify-center items-center'>
       <div className=' w-[80%] flex flex-col justify-between items-center'>
          <span>Why Choose Us</span>
          <div className=' flex flex-col w-full items-center  justify-center gap-10'>
            <span className=' text-4xl font-bold m-7'>Meet Our Team</span>
            <div className=' flex ""flex-wrap w-full lg:justify-between item-center justify-center'>
             
                <div className='  bg-card w-60  flex flex-col justify-center items-center bg-contain bg-no-repeat' >
                
                    <img src={i1} alt="icon1" />
                    <span className='m-3  '>Design Team</span>
                    <p className='ml-7 mr-7 text-center'>Our design team turns imagination into reality. What you think, you will have!</p>
                    
                </div>
                <div className='  w-60 bg-card2 bg-contain bg-no-repeat flex flex-col justify-center items-center '>
                    <img src={i2} alt="icon2" />
                    <span className='m-3'>Cloud Team</span>
                    <p className='m-3 text-center'>ready to take your offline business online and use the cloud skills to connect to your business from anywhere.</p>
                </div>
                <div className=' w-60 bg-card3 bg-contain bg-no-repeat flex flex-col justify-center items-center '>
                    <img src={i3} alt="icon3" className='m-4' />
                    <span className='m-3'>AI ML Team</span>
                    <p className='m-5 text-center'>Want to use the power of AI? With the help of our ML experts, we can build your product with the latest capabilities.</p>
                </div>
                <div className='  w-60 bg-card4 bg-contain bg-no-repeat flex flex-col justify-center items-center'>
                    <img src={i4} alt="icon4" className='mr-10' />
                    <span className='mb-3 mt-3 mr-7'>Developer Team</span>
                    <p className='ml-5 mr-10 mt-3 text-center'> Get your things done with the help of the best developers on our team. Bring your ideas into reality.</p>
                </div>
            </div>
          </div>
          <div className=' w-full flex justify-center items-center m-8'>
            <img src={line} alt="" />
          </div>
          
       </div>
    </div>
  )
}

export default Field