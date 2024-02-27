"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Txt } from '../Data/Homepage';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SecondPage = () => {
  
  const[activeIndex, setActiveIndex] = React.useState(0);
  function ChangeFun(){
    if(activeIndex> 2){
      setActiveIndex(0)
    }else setActiveIndex(activeIndex+1)
  }


  return (
    <>
    <div className='thirdpinner h-[100vh] w-full'>
    <div className="thirdpinner2 relative overflow-hidden w-full h-full">
        <img className='lg:w-full h-full object-cover' src="/Slider14.jpg" alt="N/A" />
       <div className="darkfront text-white h-full w-full absolute lg:pl-3 p-1 top-0 flex flex-col justify-center">
        <h1 className=' text-6xl font-bold'>
          Lorem ipsum dolor sit amet.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure totam est dolore aperiam possimus, molestiae ipsum magnam iusto amet cum.
        </p>
       </div>
      </div>
    </div>
    <div className='lg:h-[50vh] mt-32 flex lg:flex-row flex-col items-center'>
     <div className="title lg:w-1/3 h-full text-center">
      <h1 className='lg:text-[4vw] text-[5vw] font-medium tracking-tighter leading-none'>Features & Benefits</h1>
     </div>
     <div className="slider flex items-center mt-4 lg:w-1/3 w-[80%] lg:h-full">
     <Swiper
        className=' w-full rounded-lg shadow-md'
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
          modules={[Pagination, Navigation,Autoplay]}
          onSlideChange={() => ChangeFun() }
        >
          <SwiperSlide><img src="/Slider11.jpg" alt="N/A" /></SwiperSlide>
          <SwiperSlide><img src="/Slider12.jpg" alt="N/A" /></SwiperSlide>
          <SwiperSlide><img src="/Slider13.jpg" alt="N/A" /></SwiperSlide>
          <SwiperSlide><img src="/Slider14.jpg" alt="N/A" /></SwiperSlide>
           </Swiper>
     </div>
     <div className="text lg:w-1/3 h-[15vh] flex items-center w-[80%] lg:text-2xl text-md p-6 lg:p-5">
      <p className='text-center lg:text-xl text-sm font-light lg:font-medium lg:text-start'>{Txt.at(activeIndex)}</p>
     </div>
    </div>
    </>
  )
}

export default SecondPage;