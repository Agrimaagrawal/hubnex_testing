import React from 'react'

const Loader = () => {
  return (
    <div className=' h-screen w-full flex justify-center items-center bg-gray-900'>
        <div className=' text-xl md:text-3xl text-white'>
            <span>Loading...</span>
        </div>  
    </div>
  )
}

export default Loader