import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search_icon.png'
import Search from '../searchbar/Search'
import MobileNavbar from './MobileNavbar'
import menu from '@assets/menuUp.png'
import close from '@assets/Xmark.png'
import search from '@assets/search_icon.png'


const Navbar = () => {

  const [searchToggle, setSearchToggle] = useState(false);
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSearch = () =>{
    setSearchToggle((prev)=> !prev)
  }
  const handleOpen = ()=>{
    setOpen((prev)=>!prev)
}


  return (

    <div className=' w-full h-20 fixed bg-black bg-opacity-50 lg:bg-none lg:bg-opacity-0 lg:static top-0 lg:top-0 z-40'>
      {searchToggle && <Search toggler={searchToggle}/>}
      <div className=' h-full md:w-4/5 w-[90%] m-auto items-center flex justify-between'>
        <div className='cursor-pointer z-50'>
          <Link to='/' className=' flex gap-2 items-center'>
            <img src={logo} alt='Logo' width={20} height={20}/>
            <span className=' text-white font-bold text-xl'>hubnex Labs</span>
          </Link>
        </div>
        <div className=' hidden xl:flex gap-20 items-center font-semibold text-white'>
          <NavLink to='/about' className={({ isActive }) => isActive ? 'bg-white px-5 py-2 text-black rounded-full' : ''}>About Us</NavLink>
          <NavLink to='/service' className={({ isActive }) => isActive ? `${setActive(true)} bg-white px-5 py-2 text-black rounded-full` : ''}>Services</NavLink>
          <NavLink to='/industries' className={({ isActive }) => isActive ? `${setActive(true)} bg-white px-5 py-2 text-black rounded-full` : ''}>Industries</NavLink>
          <NavLink to='/contact' className={({ isActive }) => isActive ? 'bg-white px-5 py-2 text-black rounded-full' : ''}>Contact</NavLink>
          <img onClick={handleSearch} src={searchIcon} alt="search icon" width={20} height={20} className='cursor-pointer z-50'/>
          <Link to='/startup-program'><button className={` border-white ${active ? 'bg-white text-black' : 'bg-transparent text-white'} border-2 py-1 px-3 rounded-full text-sm font-semibold`}>Startup Program</button></Link>
        </div>
        <div className=' flex xl:hidden z-50'>
          <img onClick={handleSearch} src={search} className=' z-50 absolute top-[30px] right-24 w-6' />
          {!open ?
              <img onClick={handleOpen} src={menu} width={30} className=" cursor-pointer right-8 top-6 absolute"/>
              :
              <img onClick={handleOpen} src={close} width={25} className=" z-[100] cursor-pointer right-8 top-6 absolute"/>
          }
        </div>
        <MobileNavbar open={open}/>
      </div>
    </div>
  )
}

export default Navbar