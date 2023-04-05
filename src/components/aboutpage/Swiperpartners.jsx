import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import reddit from '../../assets/reddit.png'
import chorus from '../../assets/chorus.png'
import tcs from '../../assets/Tata Consultancy Services - png 0.png'
import pantera from '../../assets/pantera.png'


// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper";

const Swiperpartners = () => {
  return (
    <div className='bg-ablack text-white h-[200px] '>
        <div className="text-white font-bold text-4xl p-5 text-center"><h1>Our Partners</h1></div>
     <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination,Autoplay]}
        autoplay={true}
        className="mySwiper"
      >
        <SwiperSlide ><img src={reddit} alt="reddit"></img></SwiperSlide>
        <SwiperSlide ><img src={chorus} alt="chorus"></img></SwiperSlide>
        <SwiperSlide className='mb-6' ><img src={tcs} alt="tcs"></img></SwiperSlide>
        <SwiperSlide><img src={pantera} alt="pantera"></img></SwiperSlide>
       
      </Swiper>
      
    </div>
  )
}

export default Swiperpartners
