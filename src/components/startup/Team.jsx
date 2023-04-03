import React from 'react'
import line from '../../assets/lineDesign.png'
import testImg from '../../assets/balloon.png'

const Team = () => {
  return (
    <div className=' bg-black h-[700px] w-full flex justify-center text-white'>
       <div className='w-[80%] flex justify-center'>
           <div className=' flex flex-col justify-between items-center'>
             <span>Team</span>
             <div className=' flex flex-col items-center w-full gap-10'>
              <h1 className=' text-5xl font-semibold'>What We Do</h1>
              <span className=' text-2xl'>delivering exponential value throughout the care ecosystem</span>

              <div className=' flex flex-wrap w-full justify-between'>

                <div className=' h-60 w-60 px-10 rounded-md bg-gray-100 bg-opacity-20  border-violet-500 border-2  flex flex-col justify-evenly items-center'>
                  <div className=' w-10 h-10 rounded-full flex justify-center items-center bg-violet-500'>
                  <img src={testImg} alt="" className=' w-full h-full rounded-full'/>
                  </div>
                  <div className=' w-full flex flex-col items-center justify-center'>
                    <span className=' text-lg font-semibold'>Our Mission</span>
                    <p className=' text-center text-xs'>Use the power of technology and our deep understanding of the industry to solve engineering challenges of any nature, scale, or complexity</p>
                  </div>
                </div>

                <div className=' h-60 w-60 px-10 rounded-md bg-gray-100 bg-opacity-20  border-violet-500 border-2  flex flex-col justify-evenly items-center'>
                  <div className=' w-10 h-10 rounded-full flex justify-center items-center bg-violet-500'>
                  <img src={testImg} alt="" className=' w-full h-full rounded-full'/>
                  </div>
                  <div className=' w-full flex flex-col items-center justify-center'>
                    <span className=' text-lg font-semibold'>Our Mission</span>
                    <p className=' text-center text-xs'>Use the power of technology and our deep understanding of the industry to solve engineering challenges of any nature, scale, or complexity</p>
                  </div>
                </div>

                <div className=' h-60 w-60 px-10 rounded-md bg-gray-100 bg-opacity-20  border-violet-500 border-2  flex flex-col justify-evenly items-center'>
                  <div className=' w-10 h-10 rounded-full flex justify-center items-center bg-violet-500'>
                  <img src={testImg} alt="" className=' w-full h-full rounded-full'/>
                  </div>
                  <div className=' w-full flex flex-col items-center justify-center'>
                    <span className=' text-lg font-semibold'>Our Mission</span>
                    <p className=' text-center text-xs'>Use the power of technology and our deep understanding of the industry to solve engineering challenges of any nature, scale, or complexity</p>
                  </div>
                </div>

                <div className=' h-60 w-60 px-10 rounded-md bg-gray-100 bg-opacity-20  border-violet-500 border-2  flex flex-col justify-evenly items-center'>
                  <div className=' w-10 h-10 rounded-full flex justify-center items-center bg-violet-500'>
                  <img src={testImg} alt="" className=' w-full h-full rounded-full'/>
                  </div>
                  <div className=' w-full flex flex-col items-center justify-center'>
                    <span className=' text-lg font-semibold'>Our Mission</span>
                    <p className=' text-center text-xs'>Use the power of technology and our deep understanding of the industry to solve engineering challenges of any nature, scale, or complexity</p>
                  </div>
                </div>

              </div>
             </div>
             <div className=' w-full flex justify-center items-center'>
              <img src={line} alt="" />
             </div>
           </div>
       </div>
    </div>
  )
}

export default Team