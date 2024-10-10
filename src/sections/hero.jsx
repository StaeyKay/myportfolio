import React from "react";
import { heroImage } from "../assets";
import Navbar from "./navbar";

const Hero = () => {
  return <div style={{ backgroundImage: `url(${heroImage})` }} className="text-white w-full h-screen bg-cover bg-center">
    <div className="bg-black bg-opacity-30 absolute inset-0"></div>
    <Navbar/>
    <div className="relative flex flex-col items-center justify-center h-full">
      <span className="md:text-[85px] text-[50px]">Hello, I'm</span>
      <span className="font-bold md:text-[85px] text-[50px]">Esther Kwashie</span>
      <span className="text-[18px] text-gray-300">AND THIS IS MY RESUME</span>
    </div>
  </div>;
};

export default Hero;
