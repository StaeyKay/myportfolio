import React from "react";
import { heroImage } from "../assets";
import Subtitles from "../components/subtitles";

const About = () => {
  return (
    <div className="bg-[#222222] text-white pt-14 px-10 md:px-20 md:flex gap-16">
      <div className="md:w-1/2">
        <img src={heroImage} alt="" className="object-cover w-[100%]" />
      </div>
      <div className="md:w-1/2 flex flex-col items-left justify-center space-y-6">
        <div className="flex text-[30px] gap-2 md:pt-0 pt-5 text-white">
          <span>About</span>
          <span className="font-bold">Me</span>
        </div>
        <h4 className="text-[#858585] text-justify">
          A female developer with experience in front-end (React.js) and
          back-end development(Nodejs, Express, MongoDB), leveraging expertise
          in the above-mentioned technologies to create scalable, user-friendly
          web applications.
        </h4>
        <p className="text-[#858585] text-justify">
          Experienced in team work and delivering solutions that enhance user
          experience. With a background in Computer Science and Physics, I excel
          at turning complex problems into innovative, efficient web solutions
          that drive business success.
        </p>
        <div className="flex gap-3">
          <a href="mailto:estherkwashie77@gmail.com">
            <button className="rounded-full bg-[#BAC964] px-5 py-2">
              HIRE ME
            </button>
          </a>
          <button className="bg-[#858585] rounded-full px-5 py-2">
            DOWNLOAD CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
