"use client";
import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import {
  FeaturePageImg,
  FeaturePageHeading,
  FeaturePageTxt,
} from "../Data/Homepage";


const SecondPage = () => {

  const [activeIndex, setActiveIndex] = React.useState(0);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".fandb", {
        scrollTrigger: {
          trigger: ".fandb",
          start: "top top",
          end: "600% bottom",
          scrub: true,
          pin: true,
          onUpdate: function (self) {
            if (self.progress && self.progress < 0.16&& self.progress > 0.07) {
              setActiveIndex(0);
            }
            if (self.progress && self.progress > 0.16) {
              setActiveIndex(1);
            }
            if (self.progress && self.progress > 0.32) {
              setActiveIndex(2);
            }
            if (self.progress && self.progress > 0.48) {
              setActiveIndex(3);
            }
            if (self.progress && self.progress > 0.64) {
              setActiveIndex(4);
            }
            if (self.progress && self.progress > 0.8) {
              setActiveIndex(5);
            }
          },
        },
      });
    });
    return () => ctx.revert();
  });

  useEffect(()=>{
     gsap.to('.imagecontainer',{
       xPercent:(-100*(activeIndex))
     })
  })

  return (
    <>
      <div className="secondpage h-[100vh] w-full">
        <div className="thirdpinner2 relative overflow-hidden w-full h-full">
          <img
            className="lg:w-full brightness-90  h-full object-cover"
            src="/Image/20.png"
            alt="N/A"
          />
          <div className="darkfront text-white h-full w-full absolute lg:pl-3 p-1 top-0 flex flex-col justify-center">
            <h1 className=" font-primary lg:w-[60%] text-4xl w-[80%] lg:text-5xl font-bold">
              Style your outfits or match your mood-swings in a go
            </h1>
          </div>
        </div>
      </div>
      <div className="fandb h-[100vh] relative mt-32 flex lg:flex-row flex-col items-center">
        <div className="slider flex items-center overflow-hidden w-[100%] h-full">
          <div
            className="text-white h-full w-full"   
          >
           <div className="imagecontainer h-full flex  flex-nowrap">

            {FeaturePageImg.map((url) => (
               <div key={url} className="w-[calc(100vw-10px)] shrink-0 h-full"> <img
                  
                  src={url}
                  alt="N/A"
                  className="h-full w-full object-cover"
                />
                </div>
             
            ))}
            </div>
          </div>
        </div>
        <div className="title z-10 text-white absolute w-full h-full text-center">
          <h1 className=" font-primary lg:text-[4vw] lg:mt-14 mt-20 text-[5vw] font-medium tracking-tighter leading-none">
            Features & Benefits
          </h1>
          <div className=" font-primary w-[70%] text-white m-auto mt-[30vh] h-[60vh]">
            <h1 className=" text-center lg:text-5xl text-3xl font-light lg:font-medium lg:text-start">
              {FeaturePageHeading.at(activeIndex)}
            </h1>
            <p className=" font-secondary text-center lg:text-xl text-sm font-light lg:font-medium lg:text-start">
              {FeaturePageTxt.at(activeIndex)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondPage;
