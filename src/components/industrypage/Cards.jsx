import React from 'react';
import mission from '@assets/Our-Mission.png.png';
import philosophy from '@assets/Our-Philosophy.png.png';
import strategy from '@assets/Our-Strategy.png.png';
import vision from '@assets/Our-Vision.png.png';

const Section2 = () => {
  return (
    <>
    <div className='bg-black flex flex-col items-center  min-h-full'>
      <div className="rounded-br-full rounded-bl-full  h-[400px]  w-full absolute bg-gradient-to-b from-blue-800 to-black blur-sm "></div>
    
   
        
        <div className='text-white font-gilroy-bold text-[3rem] text-center pt-20 max-w-[600px] backdrop-blur-sm font-bold'>
          <h1 className='text-twhite '>What We Do</h1>
        </div>
      
        <div className='text-white font-gilroy-light text-[1.3rem] text-center p-5 max-w-[1090px] mt-2 backdrop-blur-sm '>
          <p>Delivering exponential value throughout the care ecosystem</p>
       </div>
       <div className='flex flex-wrap justify-center mt-6'>
          <div className="card flex flex-col w-[250px]  rounded-lg m-6 p-4 bg-white/10 backdrop-blur-2xl border items-center sm:w-60 overflow-hidden">
            <div className='m-4 bg-orange p-2 rounded-full shadow-md shadow-orange'><img src={mission} alt="mission" className='w-[31px] h-[31px]'></img></div>
            <h1 className='text-center mt-2 text-white text-[24px] font-semibold'>Our Mission</h1>
            <div className='text-center m-2 text-white text-[14px]'>Use the power of technology and our deep understanding of the industry to solve engineering challenges of any nature, scale, or complexity</div>

          </div>
          <div className="card flex flex-col w-[250px] rounded-lg m-6 p-4 bg-white/10 backdrop-blur-2xl border items-center sm:w-60 overflow-hidden">
            <div className='m-4 bg-orange p-2 rounded-full shadow-md shadow-orange'><img src={philosophy} alt="mission" className='w-[31px] h-[31px]'/></div>
            <h1 className='text-center m-2 text-white text-[24px] font-semibold '>Our Philosophy</h1>
            <div className='text-center m-2 text-white text-[14px]'>Go above and beyond to bring in new perspectives, relentless energy, and utmost dedication to driving client success</div>

          </div>
          <div className="card flex flex-col w-[250px] rounded-lg m-6 p-4 bg-white/10 backdrop-blur-2xl border items-center sm:w-60 overflow-hidden">
            <div className='m-4 bg-orange p-2 rounded-full shadow-md shadow-orange'><img src={vision} alt="mission" className='w-[31px] h-[31px]'></img></div>
            <h1 className='text-center mt-2 text-white text-[24px] font-semibold'>Our Vision</h1>
            <div className='text-center m-2 text-white text-[14px]'>Harness innovation to accelerate digital transformation and drive change & client success</div>

          </div>
          <div className="card flex flex-col w-[250px] rounded-lg m-6 p-4 bg-white/10 backdrop-blur-2xl border items-center sm:w-60 overflow-hidden">
            <div className='m-4 bg-orange p-2 rounded-full shadow-md shadow-orange'><img src={strategy} alt="mission" className='w-[31px] h-[31px]'></img></div>
            <h1 className='text-center mt-2 text-white text-[24px] font-semibold'>Our Strategy</h1>
            <div className='text-center m-2 text-white text-[14px]'>Leverage next-gen technologies, robust internal frameworks, and defined processes to provide best-in-class services within timelines</div>

          </div>
          

        </div>


    </div>
    </>
  )
}

export default Section2
