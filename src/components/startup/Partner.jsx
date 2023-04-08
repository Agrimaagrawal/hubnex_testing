import React from 'react'
import SideLine from './SideLine'
import pantera from '../../assets/pantera.png'
import chorus from '../../assets/chorus.png'
import tcs from '../../assets/Tata Consultancy Services - png 0.png'
import reddit from '../../assets/reddit.png'
import line from '../../assets/lineDesign.png'


const Partner = () => {
  return (
    <div className=' bg-black h-auto text-white w-full justify-center py-10 flex'>
       <div className='w-64 h-40 rounded-full bg-slate-400 absolute right-1 ' id="circle"></div>
       <div className=' w-[80%] flex flex-col justify-between'>
      
          <div className=' flex flex-col gap-10 w-full'>
           <span className='text-textwhite'>our partners</span>
            <div className=' flex justify-between flex-wrap'>
              <img src={pantera} alt="" />
              <img src={reddit} alt="" />
              <img src={tcs} alt="" />
              <img src={chorus} alt="" />
              <img src={pantera} alt="" />
            </div>
           </div>  
       </div>
      
    </div>
  )
}

export default Partner