import React from 'react'
import line from '../../assets/lineDesign.png'

const MobileCounter = () => {
  return (
    <div>
        <div className='flex bg-black text-white h-auto '>
            
           <div className=' flex w-full lg:justify-between flex-wrap items-center  justify-center m-32'>
            <div className=' flex lg:gap-10 h-auto '>
              <div className=' flex flex-col lg:gap-5 w-44 items-center'>
                <span className=' text-5xl font-bold'>75,000+</span>
                <p className=' text-center text-xl'>Startups & Service Providers</p>
              </div>
              <div className='w-52 h-40 rounded-full bg-slate-400 absolute left-9 ' id="circle"></div>
            </div>
            
            <hr className=' h-7 border-2 xl:border-2 border-white xl:h-full  '/>

            <div className=' flex lg:gap-10 h-auto  flex-col lg:flex-row '>
              <div className=' flex flex-col lg:gap-5 w-44 items-center '>
                <span className=' text-5xl font-bold'>1,500+</span>
                <p className=' text-center text-xl'>Institutional Investors</p>
              </div>
            </div>
            <hr className=' h-7 border-2 border-white xl:h-full  '/>

            <div className=' flex lg:gap-10 h-auto'>
              <div className=' flex flex-col lg:gap-5 w-44 items-center '>
                <span className=' text-5xl font-bold'>9,000+</span>
                <p className=' text-center text-xl'>Angel <br/>Investors</p>
              </div>
            </div>
           </div>
          
           
        </div>
        
          
    </div>
  )
}

export default MobileCounter
