import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import testImg from '@assets/balloonMob.png'
import { Outlet } from 'react-router-dom';


const Header = () => {
  return (
    <div className=' w-full flex flex-col gap-5 px-10'>
    <div className=' w-full h-20 flex flex-col py-5 gap-5'>
      <div className=' w-full flex justify-between'>
        <div className=' w-full h-full justify-start flex gap-2 items-center'>
          <label className=' w-[50%] h-10 px-2 bg-gray-100 flex items-center gap-3 rounded-md'>
            <SearchIcon/>
            <input className=' w-full outline-none border-none bg-transparent h-full'/>
          </label>
          <button className=' bg-gray-100 h-10 w-10 rounded-md'><FilterAltIcon/></button>
        </div>
        <div className=' flex items-center gap-2 w-full justify-end text-white'>
          <div className=' cursor-pointer relative bg-gray-400 w-10 h-10 rounded-full flex justify-center items-center'>
            <NotificationsNoneIcon/>
            <span className=' absolute w-2 h-2 rounded-full bg-red-500 top-3 right-[10px]'></span>
          </div>
          <div className=' flex gap-2'>
            <div className='w-12 h-12 rounded-full p-1 bg-gray-100'>
              <img src={testImg} alt="" className=' w-full h-full rounded-full object-cover'/>
            </div>
            <div className='flex flex-col items-start justify-center'>
              <span className=' text-sm font-semibold'>Joseph N</span>
              <span className=' text-xs flex items-center justify-center cursor-pointer'>Super Admin <KeyboardArrowDownIcon/></span>
            </div>
          </div>
        </div>
      </div>
      <hr className=' border-[1px] border-white w-full'/>
    </div>
    <Outlet/>
    </div>
  )
}

export default Header