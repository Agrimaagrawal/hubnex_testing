import React from 'react'
import SideNav from '../components/adminpage/SideNav'
import Header from '../components/adminpage/Header'



const Admin = () => {

  return (
    <div className=' flex w-full h-screen bg-black'>
        <SideNav/>
        <Header/>
        
    </div>
  )
}

export default Admin