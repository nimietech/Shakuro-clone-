import React from 'react'
import app from "./images/app.svg"
import design from "./images/design.svg"
import software from "./images/software.svg"
import web from "./images/web.svg"
import { TfiCommentsSmiley } from "react-icons/tfi";
import { FaStar } from "react-icons/fa6";

const ContactComponents = () => {
  return (
    <div className='bg-black text-white'>    
      {/* Help Section Start */}
      <div className="lg:flex sm:justify-between lg:w-[78%] mx-5 lg:mx-auto pt-[100px] lg:pt-[200px] pb-[120px] ">
        <div className="sm:w-[45%] mb-10 lg:mb-0">
          <h1 className="text-[45px] lg:text-[54px] font-medium font-serif mb-[30px]">
            Have an idea? <br /> WE can help.
          </h1>

          <div className=''>
          <button className='mb-3 sm:mb-0 relative bg-[#fff] rounded-full border-[1px] border-[#fff] py-4 px-8 font-semibold text-black group before:absolute before:content-[""] before:bg-black before:w-[100%] before:h-[0%] before:left-0 before:top-0 before:origin-top-left before:rounded-full before:duration-300 hover:before:h-[100%]'>
            <span className="relative z-20 group-hover:text-white">
              Start you project
            </span>
          </button>
          <span className=' text-white ml-11 font-medium cursor-pointer relative before:content-[""] before:bg-white before:w-[0%] before:h-[1px] before:absolute before:bottom-0 before:duration-300 before:hover:w-[100%]'>
            hello@shakuro.com
          </span>
          </div>

          <ul className='flex gap-4 lg:gap-6 mt-[50px] lg:mt-[100px] cursor-pointer text-sm'>
            <li className='relative before:content-[""] before:bg-white before:w-[0%] before:h-[1px] before:absolute before:bottom-0 before:duration-300 before:hover:w-[100%]'>X(Twitter)</li>
            <li className='relative before:content-[""] before:bg-white before:w-[0%] before:h-[1px] before:absolute before:bottom-0 before:duration-300 before:hover:w-[100%]'>Dribble</li>
            <li className='relative before:content-[""] before:bg-white before:w-[0%] before:h-[1px] before:absolute before:bottom-0 before:duration-300 before:hover:w-[100%]'>Instagram</li>
            <li className='relative before:content-[""] before:bg-white before:w-[0%] before:h-[1px] before:absolute before:bottom-0 before:duration-300 before:hover:w-[100%]'>Youtube</li>
            <li className='relative before:content-[""] before:bg-white before:w-[0%] before:h-[1px] before:absolute before:bottom-0 before:duration-300 before:hover:w-[100%]'>LinkedIn</li>
          </ul>
        </div>

        <div>
            <div className='flex gap-6 sm:gap-12'>
                <div>
                    <h3 className='text-[16px] font-light'>United States</h3>
                    <p className='text-[18px] mt-2 font-light text-[#A2A2A2]'>16192 Coastal Highway, <br /> Lewes, DE 19958</p>
                </div>

                <div>
                    <h3 className='text-[16px] font-light'>United Arab Emirates</h3>
                    <p className='text-[18px] mt-2 font-light text-[#A2A2A2]'>DSO-IFZA, Dubai Digital <br /> Park building, Dubai Silicon <br />Oasis</p>
                </div>
            </div>

            <div className='grid grid-cols-2 sm:flex mt-5 lg:mt-10 w-[80%]'>
                <img src={app} alt="" className='size-[120px]'/>
                <img src={design} alt=""  className='size-[120px]'/>
                <img src={software} alt=""  className='size-[120px]'/>
                <img src={web} alt=""  className='size-[120px]'/>
            </div>

            <div className='flex items-center border-[1px] rounded-full border-solid w-[220px] px-3 py-1 cursor-pointer mt-14'>
                <TfiCommentsSmiley className='size-10 pr-2' />
                <span>
                    <p className='flex gap-1 items-center font-medium'>5,0 <span><FaStar className='text-yellow-300' /></span></p>
                    <p className='text-xs'>Based on <span className='font-bold'>57 Clutch reviews</span></p>
                </span>
            </div>
        </div>
      </div>
      {/* Help Section Stop */}
    </div>
  )
}

export default ContactComponents