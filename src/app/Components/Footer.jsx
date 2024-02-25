import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" h-[30vh] bg-black dark:bg-zinc-300 dark:text-black text-white">
      <div className="social h-14 flex items-center justify-center gap-2 px-10 pt-2">
        <div className=" h-[1px] lg:min-w-[80vw] w-[70vw] dark:bg-black bg-white"></div>
        <div className="social flex lg:w-[10vw] w-[30vw] gap-4 text-3xl">
          <FaInstagram className=" cursor-pointer dark:hover:text-white hover:text-zinc-400" />
          <FaFacebook className="cursor-pointer dark:hover:text-white hover:text-zinc-400" />
          <FaXTwitter className="cursor-pointer dark:hover:text-white hover:text-zinc-400" />
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row px-2 gap-1 lg:px-10">
        <div className="logo text-3xl lg:w-[20vw]"><h1>TSW</h1></div>
        <div className="others lg:border-l border-gray-600 pl-2">
            <h1>About Us</h1>
            <p>Our community</p>
            <p>Join us</p>

        </div>
      </div>
    </div>
  );
};

export default Footer;
