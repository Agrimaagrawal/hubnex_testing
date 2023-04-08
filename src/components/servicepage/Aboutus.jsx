import React from 'react'
import hands from '../../assets/hands.png'
import '../startup/style.css'

const Aboutus = () => {
  return (
    <>
    <div className='w-full  flex justify-center items-center h-[617px]  flex-col relative '>
        <div className='flex  flex-col text-white h-full text-center justify-center items-center font-gilroy gap-10 ' id="display">
            <div className='font-gilroy lg:text-5xl font-bold text-2xl'><h1>what people say about us</h1></div>
            <div className='lg:w-[60%] w-[80%] '><p>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </p></div>
            <div><h1 className='font-bold' >Rahul Sarkar</h1>
            <h2>UI/UX Designer</h2></div>

        </div>
        


    </div>
    </>
  )
}

export default Aboutus
