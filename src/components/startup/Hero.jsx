import React from 'react'
import Navbar from '../navbar/Navbar'
import SideLine from './SideLine'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import styleArrow from '../../assets/styledArrow.png'
import './style.css'
import line from '../../assets/lineDesign.png'

const Hero = () => {
  return (
    <div className=' h-screen bg-black w-full   '>
    <Navbar/>
    <SideLine/>
    <div className=' h-full w-full flex items-center justify-center '>
    <div className=' rounded-full  absolute top-20 left-32 ' id="circle"></div>
    <div className=' w-[80%] flex flex-col items-center justify-center  '>
        <div className=' text-white relative h-auto py-10 flex flex-col items-center gap-10 xl:w-[600px]  max-[820px]:text-center '>
            <img src={styleArrow} alt="styledArrow" className=' absolute -bottom-5 w-32 left-20' />
            <div className=' flex flex-col w-full items-center gap-5'>
            <span className=' text-4xl  font-bold md:text-5xl text-center'>Helping business</span>
            <p className=' text-4xl font-bold md:text-5xl text-center'>through technology</p>
            </div>
            <p className=' text-2xl text-center'>Revolutionize Your Startup's IT Strategy With Our Consultancy Services</p>
            <button className=' flex gap-2  py-2 px-3 bg-violet-500 rounded-full font-semibold items-center justify-center'>Get Started <ChevronRightIcon/></button>
            
            
        </div>
        <div className='flex justify-center items-center mt-28'>
          <img src={line}></img>
          </div>
        
    </div>
    
    
    
   </div>
    
   
   
</div>
  )
}

export default Hero