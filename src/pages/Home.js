import React from "react";
import logo1 from "./images/logo1.1.jpg_large";
import homeVideo from "./images/Shakuro-Home.webm";
import logo2 from "./images/logo-video.webm";
import { TbMenu } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import brand1 from "./images/brand1.svg";
import brand2 from "./images/brand2.svg";
import brand3 from "./images/brand3.svg";
import brand4 from "./images/brand4.svg";
import brand5 from "./images/brand5.svg";
import brand6 from "./images/brand6.svg";
import brand7 from "./images/brand7.svg";
import brand8 from "./images/brand8.svg";
import brand10 from "./images/brand101.svg";
import brand11 from "./images/brand11.svg";
import brand12 from "./images/brand12.svg";
import brand13 from "./images/brand13.svg";
import brand14 from "./images/brand14.svg";
import brand15 from "./images/brand15.svg";
import brand16 from "./images/brand16.svg";
import brand17 from "./images/brand17.svg";
import brand18 from "./images/brand18.svg";
import brand19 from "./images/brand19.svg";
import { ContactComponents, Footer, Services } from "../components";
import { Link } from "react-router-dom";

const Project = () => {
  const [Open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!Open);
  };

  return (
    <div className="">
      <div>
        <nav
          className={`h-[16vh] flex justify-between items-center w-[92vw] mx-auto pt-8 sticky top-0 bg-white overflow-x-hidden z-50 mt-4 overflow-hidden`}
        >
          <img src={logo1} alt="" className="size-[105px] lg:ml-6" />
          <button
            onClick={handleClick}
            className=" flex justify-center items-center mr-3 transform-scale-100 hover:bg-[#151927] hover:text-[#fff] hover:rounded-[50%] hover:size-[45px] hover:px-2 hover:scale-100 transition-transform duration-1000 ease-in-out"
          >
            {Open ? <IoClose size={30} /> : <TbMenu size={30} />}
          </button>
        </nav>

        <div
          className={`absolute top-0 right-0 lg:w-[670px] bg-white max-h-[100vh] overflow-y-auto transition-transform duration-500 z-[2] ${
            Open ? "transform translate-x-0" : "transform translate-x-full"
          }`}
        >
          <div className="pl-14">
            <p className="text-base text-[#B8B8C4] mb-7 mt-36 lg:mt-32">Menu</p>
            <ul className="text-4xl font-[300] flex flex-col gap-6 mb-12">
              <li className='relative before:content-[""] before:w-0 before:h-[1px] before:bg-black before:absolute before:top-[45px] before:left-0 before:duration-700 hover:before:w-[7%] cursor-pointer'>
                <Link to="/works">Works</Link>
              </li>

              <li className='relative before:content-[""] before:w-0 before:h-[1px] before:bg-black before:absolute before:top-[45px] before:left-0 before:duration-700 hover:before:w-[5%] cursor-pointer'>
                <Link to="/blog">Blog</Link>
              </li>

              <li className='relative before:content-[""] before:w-0 before:h-[1px] before:bg-black before:absolute before:top-[45px] before:left-0 before:duration-700 hover:before:w-[11%] cursor-pointer'>
                <Link to="/about"> About Us</Link>
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
              <ul className="cursor-pointer text-sm">
                <li className="flex gap-3">
                  <span>Identity & Branding</span>
                  <span>Web Development</span>
                </li>
                <li className="flex gap-3">
                  <span>UI Design</span>
                  <span>UX Design</span>
                </li>

                <li className="flex gap-3">
                  <span>Mobile App Development</span>
                  <span>iOS Development</span>
                </li>

                <li className="flex gap-3">
                  <span>Android apps</span>
                  <span>C# .NET</span>
                  <span>ROR</span>
                </li>

                <li className="flex gap-3">
                  <span>WordPress</span>
                  <span>Support & Maintenance</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-base text-[#B8B8C4] mb-3 mt-20">Industries</p>
              <ul className="text-sm">
                <li className="flex gap-3">
                  <span>E-learning</span>
                  <span>Fintech</span>
                  <span>Healthcare</span>
                  <span>Web3</span>
                </li>
                <li className="flex gap-3">
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
              <div className="text-sm flex gap-3">
                <span>X(Twitter)</span>
                <span>Dribble</span>
                <span>Instagram</span>
                <span>Youtube</span>
                <span>LinkedIN</span>
              </div>
            </div>
          </div>
        </div>

        <div className=" mt-[90px] lg:mt-[100px] mx-auto w-[80%] mb-[100px] lg:mb-[120px]">
          <h1 className="mb-3 text-[40px] sm:text-[50px] lg:text-[85px] font-[400] font-serif">
            Defying the creative odds. <br /> For client sucess
          </h1>
          <p className=" lg:text-[22px] font-[300] mb-8 lg:mb-16">
            shakuro is a multidisciplinary design and development agency <br />{" "}
            working with individual startups and enterprises worldwide.
          </p>

          <div className="items-center">
            <button className='relative bg-[#131623] rounded-full border-[1px] border-[#131623] py-4 px-8 font-semibold text-white group before:absolute before:content-[""] before:bg-white before:w-[100%] before:h-[0%] before:left-0 before:top-0 before:origin-top-left before:rounded-full before:duration-300 hover:before:h-[100%]'>
              <span className="relative z-20 group-hover:text-black">
                Get In Touch
              </span>
            </button>

            <span className='ml-11 font-medium cursor-pointer relative before:content-[""] before:bg-black before:w-[0%] before:h-[1px] before:absolute before:bottom-0 before:duration-300 before:hover:w-[100%]'>
              <Link to="/works">Works</Link>
            </span>
          </div>
        </div>
      </div>

      <div className="">
        <video autoPlay loop muted className="">
          <source src={homeVideo} type="video/mp4" />
        </video>
      </div>

      <div className="mx-5 lg:w-[83%] lg:mx-auto">
        <div className="sm:flex flex-row-reverse mt-[100px] lg:mt-[130px] mb-11">
          <div className="">
            <video
              autoPlay
              loop
              muted
              className="mt-5 lg:mt-0 lg:ml-12 size-[300px] lg:size-[450px]"
            >
              <source src={logo2} type="video/mp4" />
            </video>
          </div>

          <div className="sm:w-[50%]">
            <p className="text-[30px] lg:text-[38px] font-serif font-light mt-12">
              We are committed to <br /> finding innovative and <br />
              unconventional solutions. <br />
              Pushing boundaries to <br />
              exceed client goals.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-5 gap-4 lg:gap-2 mb-14 lg:mb-24">
          <button className="col-span-2 lg:col-span-1 border-[1px] border-black rounded-full py-1 lg:px-3 lg:text-lg transition duration-300 hover:bg-[#F3F4F5]">
            Gaming
          </button>
          <button className="col-span-2 lg:col-span-1 border-[1px] border-black rounded-full py-1 lg:px-3 lg:text-lg transition duration-300 hover:bg-[#F3F4F5]">
            E-learning
          </button>
          <button className="col-span-1 border-[1px] border-black rounded-full py-1 lg:text-lg transition duration-300 hover:bg-[#F3F4F5]">
            Social Platforms
          </button>
          <button className="border-[1px] col-span-1 border-black rounded-full py-1 lg:text-[19px] transition duration-300 hover:bg-[#F3F4F5]">
            Fintech
          </button>
          <button className="col-span-2 lg:col-span-1 border-[1px] border-black rounded-full py-1 lg:text-[19px] transition duration-300 hover:bg-[#F3F4F5]">
            Web-3
          </button>
          <button className=" col-span-2 lg:col-span-1 border-[1px] border-black rounded-full py-1 lg:text-[19px] transition duration-300 hover:bg-[#F3F4F5]">
            Healthcare
          </button>
          <button className="col-span-2 lg:col-span-1 border-[1px] border-black rounded-full py-1 lg:text-[19px] transition duration-300 hover:bg-[#F3F4F5]">
            Real-Estate
          </button>
          <button className=" col-span-2 lg:col-span-1 border-[1px] border-black rounded-full py-1  lg:text-[19px] transition duration-300 hover:bg-[#F3F4F5]">
            SaaS
          </button>
          <button className="col-span-2 lg:col-span-1 border-[1px] border-black rounded-full py-1 lg:text-[19px] transition duration-300 hover:bg-[#F3F4F5]">
            E-commerce
          </button>
        </div>

        <div className="lg:flex gap-6 lg:mt-[100px]">
          <div>
            <p className="text-3xl lg:text-5xl font-medium mb-2">150+</p>
            <span className="text-sm">team members</span>
          </div>

          <div>
            <p className="text-3xl lg:text-5xl font-medium mb-2">500+</p>
            <span className="text-sm">completed projects</span>
          </div>

          <div>
            <p className="text-3xl lg:text-5xl font-medium mb-2">17years</p>
            <span className="text-sm">in the business</span>
          </div>
        </div>
      </div>

      <Services />

      <div className=" lg:flex lg:justify-between mt-[100px] lg:w-[80%] mx-5 lg:mx-auto">
        <h3 className="lg:w-[42%] font-bold mb-7 lg:mb-0">
          If you are ready for a change or have an idea you believe in, let's
          talk about it. Contact us and stand by for a quick reply.
        </h3>

        <div className="lg:mr-24">
          <button className='relative bg-[#131623] rounded-full border-[1px] border-[#131623] py-4 px-8 font-semibold text-white group before:absolute before:content-[""] before:bg-white before:w-[100%] before:h-[0%] before:left-0 before:top-0 before:origin-top-left before:rounded-full before:duration-300 hover:before:h-[100%]'>
            <span className="relative z-20 group-hover:text-black">
              Get In Touch
            </span>
          </button>

          <span className='ml-8 lg:ml-11 font-medium cursor-pointer relative before:content-[""] before:bg-black before:w-[0%] before:h-[1px] before:absolute before:bottom-0 before:duration-300 before:hover:w-[100%]'>
            See more work
          </span>
        </div>
      </div>

      {/* STRATEGY SECTION START */}

      <div className="bg-black mt-[80px] lg:mt-[150px] text-white lg:h-[150vh]">
        <div className="lg:flex lg:justify-between lg:w-[78%] mx-5 lg:mx-auto">
          <div className="lg:w-[45%]">
            <h1 className="text-[45px] lg:text-[54px] font-medium font-serif pt-20 lg:pt-40">
              Helping clients embrace the change
            </h1>

            <div className="text-[20px] mt-4 font-light mb-8">
              <p>
                We rely on imagination and technical prowess to help brands
                transform, shine and reinvent themselves commercially and
                culturally.
              </p>{" "}
              <br />
              <p>Our biggest value is the client's trust.</p>
              <p>Our only achievement is their success.</p>
            </div>

            <button className='relative bg-[#fff] rounded-full border-[1px] border-[#fff] py-4 px-8 font-semibold text-black group before:absolute before:content-[""] before:bg-black before:w-[100%] before:h-[0%] before:left-0 before:top-0 before:origin-top-left before:rounded-full before:duration-300 hover:before:h-[100%]'>
              <span className="relative z-20 group-hover:text-white">
                Get In Touch
              </span>
            </button>
          </div>

          <div className="lg:w-[45%] pt-20 lg:pt-48 pb-20 lg:pb-0">
            <div className="flex justify-between text-[22px] font-serif">
              <h3>Brand Strategy</h3>
              <p className="cursor-pointer">-</p>
            </div>

            <div className="text-[17px] mt-3 font-light">
              <p>
                An operation aimed at building a brand that will capture a
                strategically valuable market
              </p>

              <div className="mt-6">
                <h2>Discovery</h2>
                <div className="text-[#989A9D] mt-2 text-[16px]">
                  <li>Identify the need for change</li>
                  <li>Define key brand attributes</li>
                  <li>Get to know user personas</li>
                  <li>Formulate strategic goals</li>
                </div>
              </div>

              <div className="mt-4">
                <h2>Identify system design</h2>
                <div className="text-[#989A9D] mt-2 mb-6 text-[16px]">
                  <li>Design key visual elements of the brand</li>
                  <li>Build a brand collateral system</li>
                  <li>Create messaging architecture</li>
                  <li>Write a Brand style Guide</li>
                </div>
              </div>

              <hr className="h-[1px] bg-[#989A9D] border-0" />
              <div className="flex justify-between text-[22px] font-serif mt-6 mb-6">
                <span>Design</span>
                <span className="cursor-pointer">+</span>
              </div>

              <hr className="h-[1px] bg-[#989A9D] border-0" />
              <div className=" flex justify-between text-[22px] font-serif mt-6 mb-6">
                <span>Development</span>
                <span className="cursor-pointer">+</span>
              </div>

              <hr className="h-[1px] bg-[#989A9D] border-0" />
              <div className=" flex justify-between text-[22px] font-serif mt-6 mb-6">
                <span>Maintenance</span>
                <span className="cursor-pointer">+</span>
              </div>

              <hr className="h-[1px] bg-[#989A9D] border-0" />
            </div>
          </div>
        </div>
      </div>

      {/* STRATEGY SECTION STOP */}

      {/* COMPANY SECTION START */}
      <div className="lg:flex justify-between lg:w-[78%] lg:h-[100vh] mx-5 lg:mx-auto mb-20 lg:mb-48">
        <div className="lg:w-[45%]">
          <h1 className="text-[54px] font-medium font-serif pt-16 lg:pt-40">
            Trust is earned, <br />
            not given
          </h1>

          <div className="text-[20px] mt-4 font-light mb-8">
            <p>
              Every project is a chance to change someone’s life. Courtesy of
              our clients, we impact millions of lives and create a better
              future for everyone.
            </p>
          </div>

          <button className='relative bg-[#131623] rounded-full border-[1px] border-[#131623] py-4 px-8 font-semibold text-white group before:absolute before:content-[""] before:bg-white before:w-[100%] before:h-[0%] before:left-0 before:top-0 before:origin-top-left before:rounded-full before:duration-300 hover:before:h-[100%]'>
            <span className="relative z-20 group-hover:text-black">
              Read All Testimonies
            </span>
          </button>
        </div>

        <div className="lg:w-[45%] pt-10 lg:pt-40">
          <div className=" grid grid-cols-3 border-[1px] rounded-xl  border-gray-100">
            <img
              src={brand2}
              alt=""
              className="size-[90px] border border-gray-100 rounded-tl-xl p-6 transition-transform duration-300 ease-in-out w-full h-full hover:bg-gray-50"
            />
            <img
              src={brand3}
              alt=""
              className=" size-[90px] border border-gray-100 p-6 transition-transform duration-300 ease-in-out w-full h-full hover:bg-gray-50"
            />
            <img
              src={brand4}
              alt=""
              className=" size-[90px] border border-gray-100 rounded-tr-xl p-6 transition-transform duration-300 ease-in-out w-full h-full hover:bg-gray-50"
            />
            <img
              src={brand5}
              alt=""
              className=" size-[90px] border border-gray-100 p-6 transition-transform duration-300 ease-in-out w-full h-full hover:bg-gray-50"
            />
            <img
              src={brand6}
              alt=""
              className=" size-[90px] border border-gray-100 p-6 transition-transform duration-300 ease-in-out w-full h-full hover:bg-gray-50"
            />
            <img
              src={brand7}
              alt=""
              className=" size-[90px] border border-gray-100 p-6 transition-transform duration-300 ease-in-out w-full h-full hover:bg-gray-50"
            />
            <img
              src={brand8}
              alt=""
              className=" size-[90px] border border-gray-100 p-6 transition-transform duration-300 ease-in-out w-full h-full hover:bg-gray-50"
            />
            <img
              src={brand12}
              alt=""
              className=" size-[90px] border border-gray-100 p-6 transition-transform duration-300 ease-in-out w-full h-full hover:bg-gray-50"
            />
            <img
              src={brand10}
              alt=""
              className="size-[90px] border border-gray-100 p-6 transition-transform duration-300 ease-in-out w-full h-full hover:bg-gray-50"
            />
            <img
              src={brand11}
              alt=""
              className=" size-[90px] border border-gray-100 p-6 transition-transform duration-300 ease-in-out h-full w-full hover:bg-gray-50"
            />
            <img
              src={brand1}
              alt=""
              className=" size-[90px] border border-gray-100 p-6 transition-transform duration-300 ease-in-out h-full w-full hover:bg-gray-50"
            />
            <img
              src={brand13}
              alt=""
              className=" size-[90px] border border-gray-100  p-6 transition-transform duration-300 ease-in-out h-full w-full hover:bg-gray-50"
            />
            <img
              src={brand14}
              alt=""
              className="size-[90px] border border-gray-100  p-6 transition-transform duration-300 ease-in-out w-full h-full hover:bg-gray-50"
            />
            <img
              src={brand15}
              alt=""
              className="size-[90px] border border-gray-100  p-6 transition-transform duration-300 ease-in-out w-full h-full hover:bg-gray-50"
            />
            <img
              src={brand16}
              alt=""
              className="size-[90px] border border-gray-100  p-6 transition-transform duration-300 ease-in-out w-full h-full hover:bg-gray-50"
            />
            <img
              src={brand17}
              alt=""
              className="size-[90px] border border-gray-100 rounded-bl-xl p-6 transition-transform duration-300 ease-in-out w-full h-full hover:bg-gray-50"
            />
            <img
              src={brand18}
              alt=""
              className="size-[90px] border border-gray-100 p-6 transition-transform duration-300 ease-in-out w-full h-full hover:bg-gray-50"
            />
            <img
              src={brand19}
              alt=""
              className="size-[90px] border border-gray-100  p-6 transition-transform duration-300 ease-in-out w-full h-full hover:bg-gray-50"
            />
          </div>
        </div>
      </div>
      {/* COMPANY SECTION STOP */}

      <ContactComponents />
      <Footer />
    </div>
  );
};

export default Project;
