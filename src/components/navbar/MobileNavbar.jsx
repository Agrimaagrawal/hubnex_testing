import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


const MobileNavbar = ({ open }) => {

  const [dropIndustries, setDropIndustries] = useState(false);
  const handleIndustries = ()=>{
    setDropIndustries((prev)=> !prev);
  }

  return (
    
    <div className=' absolute top-0 -right-full overflow-hidden  h-screen w-full z-40 xl:hidden inline-block'>
        <div className={`xl:hidden ${!open ? 'translate-x-0 ease-out' : '-translate-x-full fixed'} h-full w-full gap-10 transition-all text-xl duration-500 ease text-white font-semibold bg-gradient-to-br z-50 from-gray-600 to-gray-800 flex flex-col items-center justify-center`}>
          <NavLink to='/about' className={({ isActive }) => isActive ? 'bg-white px-5 py-2 text-black rounded-full' : ''}>About Us</NavLink>
          <NavLink to='/service' className={({ isActive }) => isActive ? ` bg-white px-5 py-2 text-black rounded-full` : ''}>Services</NavLink>
          <div className=' flex items-center'>
          <NavLink to='/industries' className={({ isActive }) => isActive ? ` underline decoration-red-600 decoration-2 underline-offset-8 px-5 py-2 text-white rounded-full` : ' flex items-center gap-2'}>Industries</NavLink>
          <span onClick={handleIndustries}>{dropIndustries ?<KeyboardArrowUpIcon/>:<KeyboardArrowDown/>}</span>
          </div>
          {
            dropIndustries && 
            <div className="flex flex-col  bg-white/40 backdrop-blur-2xl w-[150px] rounded-lg">
             <Link to='/Healthcare'><div className='text-white p-4 text-center'>Healthcare</div></Link> 
            </div>
          }
          <NavLink to='/contact' className={({ isActive }) => isActive ? 'bg-white px-5 py-2 text-black rounded-full' : ''}>Contact</NavLink>
          <Link to='/startup-program'><button className={` bg-black text-white border-none py-2 px-3 rounded-full text-sm font-semibold`}>Startup Program</button></Link>
        </div>
    </div>
  )
}

export default MobileNavbar