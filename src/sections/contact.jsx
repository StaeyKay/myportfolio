import React from "react";
import Subtitles from "../components/subtitles";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="bg-[#222222] text-white p-10 md:p-20">
      {/* Title */}
      <div className="flex justify-center mb-10">
        <Subtitles text1="Get" text2="In Touch" />
      </div>

      {/* Form and Contact Info */}
      <div className="md:flex md:justify-between md:gap-10">
        {/* Contact Form */}
        <div className="w-full md:w-2/3 mb-10 md:mb-0">
          <Subtitles text1="Get In Touch" />
          <form className="flex flex-col gap-5">
            <input
              className="bg-[#333333] h-12 p-4 rounded-md text-white w-full"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="bg-[#333333] h-12 p-4 rounded-md text-white w-full"
              type="text"
              placeholder="Your Email"
            />
            <input
              className="bg-[#333333] h-12 p-4 rounded-md text-white w-full"
              type="text"
              placeholder="Your Phone"
            />
            <textarea
              className="bg-[#333333] p-4 rounded-md text-white w-full h-40"
              placeholder="Write a message"
            ></textarea>
            <button className="rounded-full w-[160px] bg-[#BAC964] px-5 py-3 self-center md:self-start">
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="w-full md:w-1/3">
          <Subtitles text1="My Contact Details" />
          <div className="space-y-4 mt-5">
            <div>
              <p className="text-[#2C3E50]">EMAIL</p>
              <p className="text-[#6C6C6C]">estherkwashie77@gmail.com</p>
            </div>
            <div>
              <p className="text-[#2C3E50]">PHONE</p>
              <p className="text-[#6C6C6C]">+233 202 509 735</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-10 justify-center md:justify-start">
            <a
              target="_blank"
              href="https://www.facebook.com/esther.kwashie.7?mibextid=LQQJ4d"
            >
              <FaFacebookF
                size={40}
                className="bg-[#333333] text-[#BAC964] rounded-full p-2"
              />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/estherkwashie_?igsh=MTE4ZDFqdWZ4MWJndA%3D%3D&utm_source=qr"
            >
              <FaInstagram
                size={40}
                className="bg-[#333333] text-[#BAC964] rounded-full p-2"
              />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/estherkwashie/">
              <FaLinkedin
                size={40}
                className="bg-[#333333] text-[#BAC964] rounded-full p-2"
              />
            </a>
            <a target="_blank" href="www.linkedin.com/in/estherkwashie">
              <BsTwitterX
                size={40}
                className="bg-[#333333] text-[#BAC964] rounded-full p-2"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <p className="text-[#6C6C6C] pt-12 text-center">
        Copyright © 2024 All rights reserved | This template is made with ❤️ by
        Esther Kwashie
      </p>
    </div>
  );
};

export default Contact;
