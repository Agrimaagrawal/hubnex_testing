import React from 'react'
import thanos from '@assets/thano.png'
import plus from '@assets/Plus.png'
import vector2 from '@assets/vector2.png'

const Work = () => {
  return (
    <div className=' h-screen w-full relative bg-black flex justify-center items-center'>
    <img src={thanos} className=' md:hidden absolute bottom-0 left-0 brightness-[50%] w-full h-[500px] object-cover'/>
    <img src={vector2} className=' absolute h-full w-full brightness-[20%]'/>
        <div className=' w-[80%] h-full flex flex-col justify-evenly md:justify-center md:items-center gap-10 md:gap-0 text-white'>
            <div className=' flex flex-col gap-3 justify-center items-center z-50'>
                <span className=' text-4xl md:text-6xl font-bold'>What We Do</span>
                <p className=' text-lg text-center'>Delivering exponential value throughout the care ecosystem</p>
            </div>
            <div className=' flex justify-center items-center'>
                <div className=' justify-between hidden md:flex  items-center w-full'>
                    <img src={thanos} className=' w-full '/>
                </div>
            
                <div className=' w-full flex items-center justify-center z-50'>
                            <div className=' flex flex-col gap-5 text-lg font-bold'>
                                <div className=' flex w-full gap-8'>
                                    <img src={plus} className= ' bg-white' />
                                    <span>Web Design</span>
                                </div>
                                <hr/>

                                <div className=' flex w-full gap-8'>
                                    <img src={plus} className= ' bg-white'/>
                                    <span>Digital Marketing</span>
                                </div>
                                <hr/>
                                
                                <div className=' flex w-full gap-8'>
                                    <img src={plus} className= ' bg-white'/>
                                    <span>UI/UX Design</span>
                                </div>
                                <hr/>

                                <div className=' flex w-full gap-8'>
                                    <img src={plus} className= ' bg-white'/>
                                    <span>App Development</span>
                                </div>
                                <hr/>

                                <div className=' flex w-full gap-8'>
                                    <img src={plus} className= ' bg-white'/>
                                    <span>Cloud Computing</span>
                                </div>
                                <hr/>

                                <div className=' flex w-full gap-8'>
                                    <img src={plus} className= ' bg-white'/>
                                    <span>Custom Software Development</span>
                                </div>
                                <hr/>
                            </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Work