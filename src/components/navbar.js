import React from 'react'
import logo1 from "./images/logo1.1.jpg_large";
import { TbMenu } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Navbar = () => {

    const [Open, setOpen] = useState(false);

    const handleClick = () => {
    setOpen(!Open);
  };

  return (
    <div>
        <nav
          className={`h-[16vh] flex justify-between items-center w-[92vw] mx-auto pt-8 sticky top-0 overflow-x-hidden z-50 mt-4 overflow-hidden `}
        >
          <img src={logo1} alt="" className="size-[105px] lg:ml-6" />
          <button
            onClick={handleClick}
            className={`flex justify-center items-center mr-3 transform-scale-100 hover:bg-[#151927] hover:text-[#fff] hover:rounded-[50%] hover:size-[45px] hover:px-2 hover:scale-100 transition-transform duration-1000 ease-in-out`}
          >
            {Open ? <IoClose size={30} /> : <TbMenu size={30} />}
          </button>
        </nav>

        <div
          className={`absolute top-0 right-0 lg:w-[670px] bg-white max-h-[100vh] overflow-y-auto transition-transform duration-500 z-[2] ${
            Open ? "transform translate-x-0" : "transform translate-x-full"
          }`}
        >
          <div className={` pl-14 `}>
            <p className="text-base text-[#B8B8C4] mb-7 mt-36 lg:mt-32">Menu</p>
            <ul className="text-4xl font-[300] flex flex-col gap-6 mb-12">
              <li className='relative before:content-[""] before:w-0 before:h-[1px] before:bg-black before:absolute before:top-[45px] before:left-0 before:duration-700 hover:before:w-[7%] cursor-pointer'>
                <Link to="/works">Works</Link>
              </li>

              <li className='relative before:content-[""] before:w-0 before:h-[1px] before:bg-black before:absolute before:top-[45px] before:left-0 before:duration-700 hover:before:w-[5%] cursor-pointer'>
                <Link to="/blog">Blog</Link>
              </li>

              <li className='relative before:content-[""] before:w-0 before:h-[1px] before:bg-black before:absolute before:top-[45px] before:left-0 before:duration-700 hover:before:w-[11%] cursor-pointer'>
              <Link to="/about">  About Us</Link>
              </li>

              <li className='relative before:content-[""] before:w-0 before:h-[1px] before:bg-black before:absolute before:top-[45px] before:left-0 before:duration-700 hover:before:w-[14%] cursor-pointer'>
              <Link to="/concept">Conceptzilla</Link>
              </li>
            </ul>

            <button className='relative bg-[#131623] rounded-full border-[1px] border-[#131623] py-4 px-8 font-semibold text-white group before:absolute before:content-[""] before:bg-white before:w-[100%] before:h-[0%] before:left-0 before:top-0 before:origin-top-left before:rounded-full before:duration-300 hover:before:h-[100%]'>
              <span className="relative z-20 group-hover:text-black">
                Get In Touch
              </span>
            </button>

            <div className="">
              <p className="text-base text-[#B8B8C4] mb-3 mt-20">Services</p>
              <ul className="text-sm">
                <li className="flex gap-3 cursor-pointer">
                  <span>Identity & Branding</span>
                  <span>Web Development</span>
                </li>
                <li className="flex gap-3 cursor-pointer">
                  <span>UI Design</span>
                  <span>UX Design</span>
                </li>

                <li className="flex gap-3 cursor-pointer">
                  <span>Mobile App Development</span>
                  <span>iOS Development</span>
                </li>

                <li className="flex gap-3 cursor-pointer">
                  <span>Android apps</span>
                  <span>C# .NET</span>
                  <span>ROR</span>
                </li>

                <li className="flex gap-3 cursor-pointer">
                  <span>WordPress</span>
                  <span>Support & Maintenance</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-base text-[#B8B8C4] mb-3 mt-20">Industries</p>
              <ul className="text-sm">
                <li className="flex gap-3 cursor-pointer">
                  <span>E-learning</span>
                  <span>Fintech</span>
                  <span>Healthcare</span>
                  <span>Web3</span>
                </li>
                <li className="flex gap-3 cursor-pointer">
                  <span>Social Platforms</span>
                  <span>Saas</span>
                  <span>Real Estate</span>
                  <span>Gaming</span>
                  <span>E-commerce</span>
                </li>
              </ul>
            </div>

            <div className="pb-11">
              <p className="text-base text-[#B8B8C4] mb-3 mt-20">Social</p>
              <div className="text-sm flex gap-3 cursor-pointer">
                <span>X(Twitter)</span>
                <span>Dribble</span>
                <span>Instagram</span>
                <span>Youtube</span>
                <span>LinkedIN</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar