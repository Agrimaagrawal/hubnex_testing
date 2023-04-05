import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import testImg from '@assets/balloonMob.png'
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';


const Header = () => {

  const [notifs, setNotifs]= useState(false);
  const [profile, setProfile] = useState(false);

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
          <div  className=' cursor-pointer relative bg-gray-400 w-10 h-10 rounded-full'>
            <div onClick={()=>{
            setNotifs((prev)=>!prev)
          }} className=' w-full h-full flex flex-col items-center justify-center'>
            <NotificationsNoneIcon/>
            <span className=' absolute w-2 h-2 rounded-full bg-red-500 top-3 right-[10px]'></span>
            </div>
           {notifs && 
            <button className=' w-max px-5 py-2 bg-gray-200 text-center absolute -bottom-12 text-black right-5 rounded-md rounded-tr-none font-bold'>Notifications</button>}
          </div>

          <div className=' flex gap-2'>
            <div className='w-12 h-12 rounded-full p-1 bg-gray-100'>
              <img src={testImg} alt="" className=' w-full h-full rounded-full object-cover'/>
            </div>
            <div className='flex flex-col items-start relative justify-center'>
              <span className=' text-sm font-semibold'>Joseph N</span>
              <span className=' text-xs flex items-center justify-center cursor-pointer'>Super Admin <span onClick={()=>{
                setProfile((prev)=>!prev)
              }}>{profile ? <KeyboardArrowUp/> : <KeyboardArrowDownIcon/>}</span></span>

              {profile &&  <div className=' absolute -bottom-28 right-2 rounded-md rounded-tr-none py-5 px-5 flex flex-col gap-3 bg-gray-200 text-black'>
                  <Link>Profile</Link>
                  <Link>Logout</Link>
                </div>
                }
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