import React from 'react'
import serviceMan from '../../assets/serviceMan.png'
import plus from '@assets/Plus.png'

const Ourservice = () => {
  return (
    <div className=' py-10 md:py-0 md:h-screen w-full bg-white flex justify-center items-center h-auto'>
        <div className=' h-full w-full flex justify-center items-center'>
            <div className=' w-[80%] flex flex-col justify-evenly gap-5 md:gap-0 md:justify-around h-full items-center text-black'>
                <div className='w-full gap-5 flex flex-col items-center justify-center'>
                    <span className=' text-5xl font-bold'>Our Services</span>
                    <div className=' md:w-[500px] flex items-center justify-center'>
                        <p className=' text-center'>Our goal is to provide a comprehensive platform that empowers individuals and businesses to achieve their full potential. Whether you're looking to advance your career, improve your health and wellness, or grow your business, our service has something for everyone.</p>
                    </div>
                </div>
                <div className=' flex flex-col md:flex-row justify- gap-10 md:gap-0 w-full'>
                    <div className=''>
                        <img src={serviceMan} width={600}/>
                    </div>
                    <div className=' w-full flex items-center justify-center'>
                        <div className=' flex flex-col gap-5 text-lg font-bold'>
                            <div className=' flex w-full gap-5'>
                            <img src={plus}/>
                            <span>Web Design</span>
                            </div>
                            <hr/>

                            <div className=' flex w-full gap-5'>
                            <img src={plus}/>
                            <span>Digital Marketing</span>
                            </div>
                            <hr/>
                            
                            <div className=' flex w-full gap-5'>
                            <img src={plus}/>
                            <span>UI/UX Design</span>
                            </div>
                            <hr/>

                            <div className=' flex w-full gap-5'>
                            <img src={plus}/>
                            <span>App Development</span>
                            </div>
                            <hr/>

                            <div className=' flex w-full gap-5'>
                            <img src={plus}/>
                            <span>Cloud Computing</span>
                            </div>
                            <hr/>

                            <div className=' flex w-full gap-5'>
                            <img src={plus}/>
                            <span>Custom Software Development</span>
                            </div>
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ourservice