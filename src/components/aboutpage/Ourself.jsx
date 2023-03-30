import React from 'react'
import line from '../../assets/line.png'

const Ourself = () => {
  return (
    <div className=" h-auto md:py-0 py-24 md:h-screen w-full bg-earth bg-cover">
        <div className=' h-full w-full flex justify-center '>
            <div className=' w-[80%] flex  justify-between '>
                <div className=' flex flex-col gap-20 text-white   '>
                   <div className=' w-90 flex flex-col gap-5 text-center md:mt-40 md:ml-24 '>
                    <span className=' text-4xl lg:text-5xl font-bold '>Who We Are</span>
                    <p className='text-center'>Our values shape the culture of our organization and define who we are. These are at the core<br></br> of how we work and what we do. We are:</p>
                   </div>
                   <div className=' flex flex-col md:flex-row  md:ml-10 md:gap-10'>
                        <div className=' w-80 text-center mb-4 lg:mr-9'>
                            <span className=' text-xl font-semibold'>Your Next-Gen Technology <br/> Partner</span>
                            <p className='text-base font-sans font-thin'>We provide industry expertise and solution IPs to help customers achieve successful business outcomes.</p>
                            
                        </div>
                        
                        <div className='w-80 text-center mb-4 lg:mr-9'>
                            <span className=' text-xl font-semibold'>Team-Oriented</span>
                            <p className='text-base font-sans font-thin'>We work together to drive change by setting the bar for future technologies and our way of working.</p>
                        </div>
                      
                        <div className='w-80 text-center'>
                            <span className=' text-xl font-semibold'>Client-Focused</span>
                            <p className='text-base font-sans font-thin'>We are, above all else, customer-centric. We are in it for the long run and have an unwavering passion for client success, reflected in every aspect of our relationship with them.</p>
                        </div>
                   </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Ourself