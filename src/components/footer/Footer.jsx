import React, { useEffect, useReducer, useState } from 'react'
import arrow from '../../assets/arrowR.png'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyrightIcon from '@mui/icons-material/Copyright';
import axios from 'axios';

const Footer = () => {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNo, setPhoneNo] = useState(null);
  const [message, setMessage] = useState("")

  const userData = {
    method : 'POST',
    headers : { 'Content-Type': 'application/json' },
    body : JSON.stringify({
      firstname: firstName,
      lastname: lastName,
      email: email,
      phoneNo: phoneNo,
      message: message
    })
  };

  const updateUser = {
    method : 'PUT',
    headers : { 'Content-Type': 'application/json' },
    body : JSON.stringify({
        status: true
    })
  };

  
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      const data = await (await fetch("http://localhost:3000/api/user", userData)).json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className=' flex flex-col justify-center items-center h-screen w-full bg-footerImg bg-center z-50 bg-no-repeat bg-cover'>
      <div className=' md:w-[70%] h-full md:flex justify-between items-center text-white py-5 lg:py-0 md:mt-28'>
        <div className=' flex flex-col gap-5 md:gap-10'>
          <div className=' text-4xl md:text-6xl font-semibold text-white'>
            <h1 className=' text-center md:text-start'>let's talk</h1>
          </div>
          <div className=' w-full md:w-48 text-1xl md:text-3xl font-sans font-extralight'>
            <p className=' text-center md:text-start'>have some great idea or brand to develop? let's build it together</p>
          </div>
          <div className=' text-xs md:text-base'>
            <p className=' text-center md:text-start'>our team will reach out to you as soon as <br/>possible</p>
          </div>
        </div>
          <form className='flex flex-col gap-4 m-auto w-80 md:w-auto md:m-0 mt-10  md:mt-0' onSubmit={handleSubmit}>
            <label className=' text-gray-200' htmlFor='first_name'>FIRST NAME</label>
            <input className='  outline-none bg-transparent border-b-[1px] border-b-gray-300 w-80 md:w-96' type='text' id='first_name' required maxLength={25} onChange={(e)=>setFirstName(e.target.value)}/>
            <label className=' text-gray-200' htmlFor='last_name'>LAST NAME</label>
            <input className='  outline-none bg-transparent border-b-[1px] border-b-gray-300 w-80 md:w-96' type='text' id='last_name' required maxLength={25} onChange={(e)=>setLastName(e.target.value)}/>
            <label className=' text-gray-200' htmlFor='email'>EMAIL</label>
            <input className='  outline-none bg-transparent border-b-[1px] border-b-gray-300 w-80 md:w-96' type='email' id='email' required onChange={(e)=>setEmail(e.target.value)}/>
            <label className=' text-gray-200' htmlFor='mobile_no'>PHONE NUMBER</label>
            <input className='  outline-none bg-transparent border-b-[1px] border-b-gray-300 w-80 md:w-96' type='tel' id='mobile_no' required maxLength={12} onChange={(e)=>setPhoneNo(e.target.value)}/>
            <label className=' text-gray-200' htmlFor='message'>MESSAGE</label>
            <input className=' pt-5 outline-none bg-transparent border-b-[1px] border-b-gray-300 w-80 md:w-96' type='text' id='message' required onChange={(e)=>setMessage(e.target.value)}/>
            <label htmlFor='submit' className='flex gap-3 bg-transparent cursor-pointer border-white border-[1px] mt-5 shadow-md shadow-violet-500 py-2 px-5 w-max rounded-full'>
              <input type='submit' className='  cursor-pointer' id='submit'/>
              <img src={arrow} alt="arrow" width={15} height={15} className='object-contain'/>
            </label>
          </form>
      </div>
      <div className=' flex flex-col w-full justify-center items-center gap-5 text-white h-80 text-lg'>
        <span className=' text-lg'>connect with us</span>
        <div className=' flex flex-wrap gap-5 items-center'>
          <Link to='/about'><TwitterIcon/></Link>
          <Link to='/about'><LinkedInIcon/></Link>
          <Link to='/about'><InstagramIcon/></Link>
          <Link to='/about'><FacebookIcon/></Link>
          {/* <img src={fb} alt='facebook' width={20}/> */}
        </div>
      </div>
      <hr className=' w-full border-white border-[1px]'/>
      <div className=' h-10 md:h-28 w-[80%] m-auto flex justify-center md:justify-between text-white items-center'>
        <div>
          <span className=' text-xs'>Copyright <CopyrightIcon fontSize='small'/> 2023 Hubnex. All Rights Reserved</span>
        </div>
        <div className='hidden  md:flex gap-2 text-xs '>
          <Link to='/about'>About Us</Link>
          <hr className=' border-[1px] h-4'/>
          <Link to='service'>Data Protection</Link>
          <hr className=' border-[1px] h-4'/>
          <Link to='/admin'>Terms and Conditions</Link>
          <hr className=' border-[1px] h-4'/>
          <Link to='/about'>Privacy Policy</Link>
          <hr className=' border-[1px] h-4'/>
          <Link to='/contact'>Contact Us</Link>
          <hr className=' border-[1px] h-4'/>
          <Link to='/'>Invest in Us</Link>
          <hr className=' border-[1px] h-4'/>
        </div>
      </div>
    </div>
  )
}

export default Footer