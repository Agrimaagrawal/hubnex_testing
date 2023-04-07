import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search_icon.png'
import Search from '../searchbar/Search'
import MobileNavbar from './MobileNavbar'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


const Navbar = () => {

  const [searchToggle, setSearchToggle] = useState(false);
  const [dropIndustries,setDropIndustries]=useState(false);

  const handleSearch = () =>{
    setSearchToggle((prev)=> !prev)
  }
  const handleIndustries=()=>{
    setDropIndustries((prev)=>!prev)
  }

  return (

    <div className=' w-full h-20 fixed bg-black bg-opacity-50 lg:bg-none lg:bg-opacity-0 lg:absolute top-0 lg:top-0 z-40'>
      {searchToggle && <Search toggler={searchToggle}/>}
      <div className=' h-full md:w-4/5 w-[90%] m-auto items-center flex justify-between'>
        <div className='cursor-pointer z-50'>
          <Link to='/' className=' flex gap-2 items-center'>
            <img src={logo} alt='Logo' width={20} height={20}/>
            <span className=' text-white font-bold text-xl'>hubnex Labs</span>
          </Link>
        </div>
        <div className=' hidden xl:flex gap-16 items-center text-white'>
          <NavLink to='/about' className={({ isActive }) => isActive ? 'bg-white px-5 py-2 text-black rounded-full' : ''}>About Us</NavLink>
          <NavLink to='/service' className={({ isActive }) => isActive ? 'bg-white px-5 py-2 text-black rounded-full' : ''}>Services</NavLink>
          <NavLink to='/industries' className={({ isActive }) => isActive ? 'bg-white px-5 py-2 text-black rounded-full' : ''}>Industries <span className='' onClick={handleIndustries}>{dropIndustries ?<KeyboardArrowUpIcon/>:<KeyboardArrowDown/>}</span></NavLink>
          {
            dropIndustries && 
            <div className="flex flex-col  bg-white/40 backdrop-blur-2xl w-[150px] absolute top-20 right-[34rem] rounded-lg">
             <Link to='/Healthcare'><div className='text-white p-4 text-center'>Healthcare</div></Link> 

            </div>
          }
          <NavLink to='/contact' className={({ isActive }) => isActive ? 'bg-white px-5 py-2 text-black rounded-full' : ''}>Contact</NavLink>
          <img onClick={handleSearch} src={searchIcon} alt="search icon" width={20} height={20} className='cursor-pointer z-50'/>
          <Link to='/startup-program'><button className=' border-white bg-transparent border-2 py-[2px] px-3 rounded-full text-sm text-white'>Startup Program</button></Link>
        </div>
        <MobileNavbar />
      </div>
      
    </div>
  )
}

export default Navbar