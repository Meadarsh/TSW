"use client"
import { useEffect,useState } from "react";
import ImgSlider from "./Components/ImgSlider";
import NavBar from "./Components/NavBar";
import SecondPage from "./homeComponent/Second";
import "./Styles/firstpage.css"
import { FirstPpara, FirstPtxt } from "./Data/Homepage";
import ThirdPage from "./homeComponent/Third";
import Feedback from "./homeComponent/feedback";
import Footer from "./Components/Footer";
export default function Home() {


  return (
  <div className="relative dark:bg-zinc-900 dark:text-white bg-gray-200 ">
  <NavBar/>
  <div className="h-[100vh] overflow-hidden"><img className="lg:w-full h-full object-cover" src="/Slider11.jpg" alt="N/A" /></div>
  <div className=" absolute top-[35vh] text-white flex flex-col items-center  font-medium">
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
