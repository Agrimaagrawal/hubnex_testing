import React from 'react'
import { Link } from 'react-router-dom'
import menu from '@assets/menuUp.png'
import close from '@assets/Xmark.png'
import { useState } from 'react'
import search from '@assets/search_icon.png'
import Search from '../searchbar/Search'

const MobileNavbar = () => {

    const [open, setOpen] = useState(false);
    const [searchToggle, setSearchToggle] = useState(false);

    const handleOpen = ()=>{
        setOpen((prev)=>!prev)
    }
    
    const handleSearch = () =>{
      setSearchToggle((prev)=> !prev)
    }

  return (
    
    <div className=' absolute top-0 right-0 overflow-hidden  h-screen w-full z-40 xl:hidden inline'>
        {searchToggle && <Search toggler={searchToggle}/>}
        {!open ?
            <img onClick={handleOpen} src={menu} width={30} className=" cursor-pointer right-8 top-6 absolute"/>
            :
            <img onClick={handleOpen} src={close} width={25} className=" z-[100] cursor-pointer right-8 top-6 absolute"/>
        }
        <img onClick={handleSearch} src={search} className=' z-50 absolute top-[30px] right-24 w-6' />
        <div className={`xl:hidden ${!open ? 'translate-x-full' : 'translate-x-0 fixed'} h-full w-full gap-10 transition-all duration-500 ease-in text-white font-semibold bg-gradient-to-br z-50 from-gray-600 to-gray-800 flex flex-col items-center justify-center`}>
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