import React from 'react'
import line from '../../assets/lineDesign.png'
import mission from '@assets/Our-Mission.png.png';
import philosophy from '@assets/Our-Philosophy.png.png';
import strategy from '@assets/Our-Strategy.png.png';
import vision from '@assets/Our-Vision.png.png';

const Team = () => {
  return (
    <div className=' bg-black  w-full flex justify-center text-white'>
      
       <div className='w-[80%] flex justify-center'>
           <div className=' flex flex-col justify-between items-center m-7'>
             <span>Team</span>
             <div className=' flex flex-col items-center w-full gap-10 m-7'>
              <h1 className=' text-5xl font-semibold'>What We Do</h1>
              <span className=' text-2xl'>delivering exponential value throughout the care ecosystem</span>

              <div className=' flex flex-wrap w-full justify-center items-center lg:justify-between'>

                <div className=' h-60 w-60 px-10 rounded-md bg-gray-100 bg-opacity-20 m-7 lg:m-3 border-violet-500 border-2  flex flex-col justify-evenly items-center'>
                  <div className='  h-12 rounded-full flex justify-center items-center bg-violet-500'>
                  <img src={mission} alt="mission" className=' w-full h-full p-2'/>
                  </div>
                  <div className='w-52 h-40 rounded-full bg-slate-400 absolute left-11' id="circle"></div>
                  <div className=' w-full flex flex-col items-center justify-center'>
                    <span className=' text-lg font-semibold'>Our Mission</span>
                    <p className=' text-center text-xs'>Use the power of technology and our deep understanding of the industry to solve engineering challenges of any nature, scale, or complexity</p>
                  </div>
                </div>
                

                <div className=' h-60 w-60 px-10 rounded-md bg-gray-100 bg-opacity-20 m-7 lg:m-3 border-violet-500 border-2  flex flex-col justify-evenly items-center'>
                  <div className='  h-12 rounded-full flex justify-center items-center bg-violet-500   '>
                  <img src={philosophy} alt="philosophy" className=' w-full h-full p-2   '/>
                  </div>
                  <div className=' w-full flex flex-col items-center justify-center'>
                    <span className=' text-lg font-semibold'>Our Philosophy</span>
                    <p className=' text-center text-xs'>Go above and beyond to bring in new perspectives, relentless energy, and utmost dedication to driving client success</p>
                  </div>
                </div>

                <div className=' h-60 w-60 px-10 rounded-md bg-gray-100 bg-opacity-20 m-7 lg:m-3 border-violet-500 border-2  flex flex-col justify-evenly items-center'>
                  <div className='  h-12 rounded-full flex justify-center items-center bg-violet-500 '>
                  <img src={strategy} alt="strategy" className=' w-full h-full  p-2'/>
                  </div>
                  <div className=' w-full flex flex-col items-center justify-center'>
                    <span className=' text-lg font-semibold'>Our Vision</span>
                    <p className=' text-center text-xs'>Harness innovation to accelerate digital transformation and drive change & client success</p>
                  </div>
                </div>
                <div className='w-52 h-40 rounded-full bg-slate-400 absolute right-4' id="circle"></div>


                <div className=' h-60 w-60 px-10 rounded-md bg-gray-100 bg-opacity-20 m-7 lg:m-3 border-violet-500 border-2  flex flex-col justify-evenly items-center'>
                  <div className='  h-12 rounded-full flex justify-center items-center bg-violet-500'>
                  <img src={vision} alt="vision" className=' w-full h-full p-2'/>
                  </div>
                  <div className=' w-full flex flex-col items-center justify-center'>
                    <span className=' text-lg font-semibold'>Our Strategy</span>
                    <p className=' text-center text-xs'>Leverage next-gen technologies, robust internal frameworks, and defined processes to provide best-in-class services within timelines</p>
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