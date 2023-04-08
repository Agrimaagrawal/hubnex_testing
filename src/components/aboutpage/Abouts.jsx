import React from 'react'

const Abouts = () => {
  return (
    <div className=' bg-abouts bg-center bg-cover bg-no-repeat h-screen w-full'>
        <div className=' h-full w-full flex items-center justify-center'> 
          <div className=' flex items-center h-full w-[80%]'>
            <div className=' flex flex-col text-black gap-10 w-[650px] '>
              <span className=' text-5xl font-gilroy-bold'>Digital guidance <br/>expertise</span>
              <p className=' text-lg'>We are a leading IT consultancy with expertise in innovative solutions for modern challenges. Our client-centric approach enables us to design tailored solutions that keep businesses ahead in the ever-evolving digital landscape.</p>
              <button className=' bg-transparent w-max rounded-full py-2 px-5 border-black border-[2px] shadow-sm shadow-black'>Read more</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Abouts