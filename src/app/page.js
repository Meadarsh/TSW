"use client"
import { useEffect,useState } from "react";
import ImgSlider from "./Components/ImgSlider";
import NavBar from "./Components/NavBar";
import SecondPage from "./homeComponent/Second";
import "./Styles/firstpage.css"
import gsap from "gsap";
import { Timeline } from "gsap/gsap-core";
import { FirstPpara, FirstPtxt } from "./Data/Homepage";
import ThirdPage from "./homeComponent/Third";
import Feedback from "./homeComponent/feedback";
import Footer from "./Components/Footer";
export default function Home() {
 useEffect(()=>{
  let tl = new Timeline()
   tl.to('.maintext',{
    color:'#1a237e',
    x:200,
    duration:2
   })
   tl.to('.maintext',{
    delay:2,
   })
 },[])

  return (
  <div className="relative dark:bg-zinc-900 dark:text-white bg-gray-200 ">
  <NavBar/>
  <div className="lg:h-[75vh] h-[35vh]"><ImgSlider/></div>
  <div className=" flex flex-col items-center  font-medium">
  <div className="maintext flex  lg:text-[5vw] text-[6vw]"> 
  {FirstPtxt}
  </div>
    <p className="lg:font-medium lg:text-md text-md text-center w-[93%]">{FirstPpara}</p>
  </div>
  <SecondPage/>
  <ThirdPage/>
  <Feedback/>
  <Footer/>
  </div>
  );
}
