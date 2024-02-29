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
  return (
    <div
      data-scroll
      data-scroll-speed="-4"
      className="h-[100vh] overflow-hidden"
    >
      <img
        className="landingpageimg lg:w-full h-full object-cover"
        src="/Slider11.jpg"
        alt="N/A"
      />
      <div className=" absolute top-[35vh] w-full lg:text-[5vw] text-[7vw] text-white flex items-center justify-center font-medium">
      Your pocket friendly stylist
      </div>
    </div>
  );
};

export default Landing;
