import React from 'react'
import land from '@assets/testimo.png'
import Partners from '../aboutpage/Partners'
import user1 from '@assets/user1.png'
import quote from '@assets/quote.png'
import Swiperpartners from '../aboutpage/Swiperpartners'

const Testimonial = () => {
    const isMobile=()=> {
        const match=window.matchMedia('(pointer:coarse)');
        return(match && match.matches); 
      }


  return (
    <div className=' h-screen w-full flex flex-col justify-between items-center'>
        <div className=' bg-land bg-cover bg-center h-full flex-2 flex justify-center items-center w-full'>
            <div className=' flex flex-col justify-center w[80%] items-center gap-14'>
                <div className=' text-3xl md:text-5xl text-white'>
                    <span className=' text-center font-gilroy-bold'>what people say about us</span>
                </div>
                <div className=' w-[450px] h-[380px] relative flex justify-center items-center'>
                    <div className=' w-[80%] h-[75%]  bg-gray-700 rounded-lg'></div>
                    <div className=' z-[2] flex flex-col absolute top-5 text-white justify-start items-center gap-5 w-[85%] md:w-full'>
                        <img src={user1} alt="" className=' '/>
                        <img src={quote} width={20}/>
                        <p className=' text-center text-sm'>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt  exercitation incididunt aliquip deserunt reprehenderit elit laborum. </p>
                        <hr className=' w-[70%] border-gray-500'/>
                        <div className=' flex flex-col gap-2 justify-center items-center'>
                            <span className=' font-gilroy-bold text-lg'>Rahul Sarkar</span>
                            <p className=' text-xs'>UI/UX Designer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className=' flex-1 w-full'>
            <Partners />
        </div>
    </div>
  )
}

export default Testimonial