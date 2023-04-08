import React from 'react'
import line from '../../assets/line.png'

const Choose = () => {
  return (
    <div className=" h-auto md:py-0 py-24 md:h-screen w-full bg-black bg-cover">
        <div className=' h-full w-full flex justify-center '>
            <div className='w-[80%] flex justify-center '>
                <div className=' w-full flex flex-col gap-20 text-white '>

                   <div className=' w-90 flex flex-col gap-5 text-center md:mt-40 '>
                    <span className=' text-4xl lg:text-5xl font-bold '>why choose us?</span>
                    <p className='text-center '>Hubnex Lab employs industry best practices to help businesses globally scale, transform, and gain competitive advantage through <br /> innovative software solutions. <br></br> of how we work and what we do. We are:</p>
                   </div>

                   <div className=' w-full flex flex-col gap-8 lg:gap-0 lg:flex-row justify-between items-center  '>
                        <div className=' w-80 text-center mb-4 lg:mr-9 '>
                            <span className=' text-xl font-semibold'>Your Next-Gen Technology <br/> Partner</span>
                            <p className='text-base font-sans font-thin'><br />Adherence to agile and CI/CD <br />principles throughout the product <br />development lifecycle gain <br />competitive advantage through <br />innovative software solutions.</p>    
                        </div>
                        <hr className=' w-[50%] md:w-0 h-[50%] border-[1px]'/>
                       
                        <div className='w-80 text-center mb-4 lg:mr-9 '>
                            <span className=' text-xl font-semibold '>Team-Oriented</span>
                            <p className='text-base font-sans font-thin'><br />Efficient & transparent <br />development, communication, and<br /> reporting Our domain knowledge,<br /> expertise, and proven<br /> methodologies enable us to create.</p>
                        </div>
                        <hr className=' w-[50%] md:w-0 h-[50%] border-[1px]'/>

                        <div className='w-80 text-center  mb-4 lg:mr-9 max-[360px]:w-60'>
                            <span className=' text-xl font-semibold'>Client-Focused</span>
                            <p className=' text-base font-sans font-thin'><br />Guaranteed maintenance and <br />after-sales support smart digital<br /> experiences that add value to <br />diverse businesses.</p>
                        </div>
                   </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Choose