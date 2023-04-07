import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const MobileNavbar = ({ open }) => {

  return (
    
    <div className=' absolute top-0 -right-full overflow-hidden  h-screen w-full z-40 xl:hidden inline-block'>
        <div className={`xl:hidden ${!open ? 'translate-x-0' : '-translate-x-full fixed'} h-full w-full gap-10 transition-all duration-500 ease text-white font-semibold bg-gradient-to-br z-50 from-gray-600 to-gray-800 flex flex-col items-center justify-center`}>
            <Link to='/about' className=' text-xl'>About Us</Link>
            <Link to='/service' className=' text-xl'>Services</Link>
            <Link to='/industries' className=' text-xl'>Industries</Link>
            <Link to='/contact' className=' text-xl'>Contact</Link>
            <Link to='/contact' className=' text-xl'><button className=' bg-black rounded-full py-2 px-5 text-base font-light'>start program</button></Link>
        </div>
    </div>
  )
}

export default MobileNavbar