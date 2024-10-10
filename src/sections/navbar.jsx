import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-5 md:p-10">
      <div className="flex gap-10 justify-end md:justify-center">
        <nav className="hidden md:block">
          <ul className="text-white flex gap-10 justify-center relative">
            <li>
              <Link to="home" smooth={true}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="portfolio" smooth={true}>
                PORTFOLIO
              </Link>
            </li>
            <li>
              <Link to="resume" smooth={true}>
                RESUME
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true}>
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
        <div className="z-10">
          <button onClick={() => setIsOpen(!isOpen)}>
            <RxHamburgerMenu
              size={45}
              className="bg-gray-100 text-gray-600 rounded md:hidden p-2 block"
            />
          </button>
        </div>
      </div>

      {/* Mobile view */}
      {isOpen && (
        <div className="z-10 md:hidden bg-[#222222] text-white fixed top-0 left-0 w-2/3">
          <ul className="p-5">
            <li className="pb-5">
              <Link to="home" smooth={true} onClick={() => setIsOpen(false)} >
                HOME
              </Link><hr />
            </li>
            <li className="pb-5">
              <Link to="about" smooth={true} onClick={() => setIsOpen(false)}>
                ABOUT
              </Link><hr />
            </li>
            <li className="pb-5">
              <Link to="portfolio" smooth={true} onClick={() => setIsOpen(false)}>
                PORTFOLIO
              </Link><hr />
            </li>
            <li className="pb-5">
              <Link to="resume" smooth={true} onClick={() => setIsOpen(false)}>
                RESUME
              </Link><hr />
            </li>
            <li className="pb-5">
              <Link to="contact" smooth={true} onClick={() => setIsOpen(false)}>
                CONTACT
              </Link><hr />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
