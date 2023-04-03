import React from 'react'
import line from '../../assets/lineDesign.png'

const Field = () => {
  return (
    <div className=' h-screen py-10 bg-black w-full text-white flex justify-center'>
       <div className=' w-[80%] flex flex-col justify-between items-center'>
          <span>Why Choose Us</span>
          <div className=' flex flex-col w-full items-center gap-10'>
            <span className=' text-4xl font=bold'>Meet Our Team</span>
            <div className=' flex flex-wrap w-full justify-between'>
                <div className=' h-96 bg-red-400 w-60  flex flex-col justify-center items-center'>
                    <img src="" alt="" />
                    <span>Design Team</span>
                    <p></p>
                </div>
                <div className=' h-96 w-60 bg-red-400 flex flex-col justify-center items-center'>
                    <img src="" alt="" />
                    <span>Cloud Team</span>
                    <p></p>
                </div>
                <div className=' h-96 w-60 bg-red-400 flex flex-col justify-center items-center'>
                    <img src="" alt="" />
                    <span>AI ML Team</span>
                    <p></p>
                </div>
                <div className=' h-96 w-60 bg-red-400 flex flex-col justify-center items-center'>
                    <img src="" alt="" />
                    <span>Developer Team</span>
                    <p></p>
                </div>
            </div>
          </div>
          <div className=' w-full flex justify-center items-center'>
            <img src={line} alt="" />
          </div>
       </div>
    </div>
  )
}

export default Field