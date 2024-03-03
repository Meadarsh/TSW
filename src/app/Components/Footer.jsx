import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa";


const Footer = () => {

  return (
    <div className=" footer lg:h-[8vh] h-[5vh] bg-black dark:bg-zinc-300 dark:text-black text-white">
       <div className="messagesend absolute w-full flex flex-col items-center justify-center">
       <div className="p-4 bg-black bg-opacity-45 rounded-md shadow-md ">
       <h1 className="text-center text-4xl"> Early access available</h1>
        <div className="flex justify-center items-center gap-4 mt-10">
         <input type="text" name="" id="" placeholder="Enter your email" className="text-white bg-transparent border-b-2 border-black text-xl focus:outline-none" />
          <button className="p-3 rounded-full bg-black text-white">Subscribe</button> 
        </div>
       </div>
      </div>
      <div className="social h-14 flex items-center justify-center gap-2 px-10 pt-2">
        <div className=" h-[1px] lg:min-w-[80vw] w-[70vw] dark:bg-black bg-white"></div>
        <div className="social flex lg:w-[10vw] w-[30vw] gap-4 text-3xl">
          <FaInstagram className=" cursor-pointer dark:hover:text-white hover:text-zinc-400" />
          <FaFacebook className="cursor-pointer dark:hover:text-white hover:text-zinc-400" />
          <FaXTwitter className="cursor-pointer dark:hover:text-white hover:text-zinc-400" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
