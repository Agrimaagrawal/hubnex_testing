import React from 'react'
import line from '../../assets/lineDesign.png'

const Testimonial = () => {
  return (
    <div className=' bg-black h-[700px] w-full flex py-10 justify-center text-white'>
      <div className=' w-[80%] flex flex-col justify-between'>
           <span className=' text-2xl'>Testimonial</span>
         <div className=' flex flex-col justify-between w-[80%] m-auto h-[60%] items-center text-textwhite'>
              <h1 className=' text-4xl lg:text-5xl font-semibold text-center'>what people say about us</h1>
              <p className=' text-center m-5 lg:text-lg xl:w-[700px]'>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </p>
              <span className=' text-center flex flex-col items-center gap-1 text-2xl font-semibold'>Rahul Sarkar <span className=' text-lg font-thin'>UI/UX Design</span></span>
            </div>
         <div className=' w-full flex justify-center items-center'>
          <img src={line} alt="" />
         </div>
      </div>
    </div>
  )
}

export default Testimonial