import React from 'react'
import { PiCopyrightThin } from "react-icons/pi";

const Footer = () => {
  return (
    <div className='bg-neutral-900 text-white'>
    <div className='lg:w-[78%] mx-5 lg:mx-auto pt-[60px] lg:pt-[120px] pb-[60px] lg:flex justify-between '>
        <div className=''>
            <h1 className='mb-3 lg:mb-5 text-[17px] text-[#656a6d]'>Services</h1>
            <div className='flex gap-4 mb-4 text-[15px]'>
                <p>Web Development</p>
                <p>UI Design</p>
                <p>UX Design</p>
                <p>Identity & Branding</p>
            </div>
            <div className='flex gap-4 mb-4 text-[15px]'>
                <p>Mobile App Development</p>
                <p>IOS Development</p>
            </div>
            <div className='flex gap-4 mb-4 text-[15px]'>
                <p>Frontend Development</p>
                <p>Android Apps</p>
                <p>C#.NET</p>
                <p>Python</p>
            </div>
            <div className='flex gap-4 mb-4 text-[15px]'>
                <p>ROR</p>
                <p>WordPress</p>
                <p>Support & Maintenance</p>
            </div>

            <div className='flex gap-4 mb-4 text-[15px]'>Low Code Development</div>

            <div className='flex items-center mb-5 text-[14px] text-[#656a6d]'><PiCopyrightThin />2024 Shakuro. All rights reserved.</div>
        </div>

        <div>
            <h1 className='mb-3 lg:mb-5 text-[17px] text-[#656a6d]'>Industries</h1>
            <div className='flex gap-4 mb-4 text-[15px]'>
                <p>E-learning</p>
                <p>Healthcare</p>
                <p>Web3</p>
                <p>Social Platforms</p>
                <p>SaaS</p>
            </div>
            <div className='flex gap-4 mb-4 text-[15px]'>
                <p>Fintech</p>
                <p>E-commerce</p>
                <p>Real Estate</p>
                <p>Gaming</p>
            </div>

            <div className='mt-10'>
                <h1 className='mb-3 lg:mb-5 text-[17px] text-[#656a6d]'>Company</h1>
                <div className='flex gap-4 mb-4 text-[15px]'>
                <p>About us</p>
                <p>Conceptzilla</p>
                <p>Project Calculator</p>
                <p>Blog</p>
                <p>Testimonials</p>
                </div>
                <div className='flex gap-4 mb-4 text-[15px]'>
                <p>Extended Team Model</p>
                <p>FAQ</p>
                <p>Privacy Policy</p>
                </div>
                
            </div>
        </div>
            
    </div>
    </div>
  )
}

export default Footer