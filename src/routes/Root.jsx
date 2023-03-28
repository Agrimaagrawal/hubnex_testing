import React from 'react'
import { Outlet } from 'react-router-dom'


const Root = () => {
  return (
    <>
      <div className='h-screen w-full'>
          <Outlet />
      </div>
    </>
  )
}

export default Root