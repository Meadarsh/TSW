"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ImgSlider = () => {
  return (
    
        <Swiper
        className='text-white h-full w-full'
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000, // Set the delay in milliseconds (e.g., 3000 for 3 seconds)
            disableOnInteraction: false, // Autoplay will not be disabled after user interactions
          }}
         // navigation={true}
          modules={[Pagination, Navigation,Autoplay]}
        >
          <SwiperSlide><img src="/Slider11.jpg" alt="N/A" /></SwiperSlide>
          <SwiperSlide><img src="/Slider12.jpg" alt="N/A" /></SwiperSlide>
          <SwiperSlide><img src="/Slider13.jpg" alt="N/A" /></SwiperSlide>
          <SwiperSlide><img src="/Slider14.jpg" alt="N/A" /></SwiperSlide>
           </Swiper>
  )
}

export default ImgSlider