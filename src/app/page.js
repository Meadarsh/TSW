"use client"
import { useEffect,useState } from "react";
import NavBar from "./Components/NavBar";
import SecondPage from "./homeComponent/Second";
import "./Styles/firstpage.css"
import ThirdPage from "./homeComponent/Third";
import Feedback from "./homeComponent/feedback";
import Footer from "./Components/Footer";
import Landing from "./homeComponent/landing";
import Lenis from "@studio-freight/lenis";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import gsap from "gsap";
export default function Home() {
useEffect(()=>{
  const lenis = new Lenis()


  lenis.on('scroll', ScrollTrigger.update)
  
  gsap.ticker.add((time)=>{
    lenis.raf(time * 1000)
  })
  
  gsap.ticker.lagSmoothing(0)
  
})
  return (
  <div id="js-target" data-scroll-container  className="relative dark:bg-zinc-900 dark:text-white bg-gray-200 ">
  <NavBar/>
  <Landing/>
  <SecondPage/>
  {/* <ThirdPage/>
  <Feedback/> */}
  <Footer/>
  </div>
  );
}
