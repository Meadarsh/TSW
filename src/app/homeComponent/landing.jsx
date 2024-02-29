"use client";
import React, { useEffect } from "react";
import ImgSlider from "../Components/ImgSlider";
import { FirstPpara, FirstPtxt } from "../Data/Homepage";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

const Landing = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      gsap.from(".landingpageimg", {
        filter: "brightness(1)",
        duration: 1,
        scrollTrigger: {
          trigger: ".landingpageimg",
          start: "120% bottom",
          end: "170% center",
          scrub: true,
          pin:true
        
        },
      });
    });
    return () => ctx.revert();
  });
 useEffect(()=>{
  gsap.to('.landingpageheading h1 ', {
    y:'-1vw',
    duration: 1,
 })
 },[])

  return (
    <div
      data-scroll
      data-scroll-speed="-4"
      className="h-[100vh] overflow-hidden"
    >
      <img
        className="landingpageimg lg:w-full h-full "
        src="/Image/14.png"
        alt="N/A"
      />
      <div className="landingpageheading  h-[7vw] overflow-hidden font-primary absolute top-[40vh] lg:top-[56vh] w-full lg:text-[6.5vw] text-[7vw] text-white flex items-center justify-center font-medium">
      <h1 className="translate-y-full leading-none">Your pocket friendly stylist</h1>
      </div>
    </div>
  );
};

export default Landing;
