import React from 'react'
import { ContactComponents, Footer, Navbar, Services } from '../components'
import { IoSearchOutline } from "react-icons/io5";

const Concept = () => {
  return (
    <div>
      <Navbar/>
      <div className="w-[80%] mx-auto mt-[50px]">
      <h3 className="font-[500] text-[24px] text-[#B8B8C4] mb-7">Conceptzilla</h3>

      <p className="text-[40px] sm:text-[50px] lg:text-[70px] font-[400] font-serif mb-4">
        Presentation-ready concepts  
        for $3000 within one week
      </p>

      <p className="text-[20px] sm:text-[20px] lg:text-[30px]">
        Having launched our own startups and with 500+ successful projects on our resume, we know exactly how to make ideas shine.
      </p>

      <button className='relative bg-[#131623] rounded-full border-[1px] border-[#131623] py-4 px-8 font-semibold text-white group before:absolute before:content-[""] before:bg-white before:w-[100%] before:h-[0%] before:left-0 before:top-0 before:origin-top-left before:rounded-full before:duration-300 hover:before:h-[100%] mt-14'>
        <span className="relative z-20 group-hover:text-black text-lg">
          Order a concept
        </span>
      </button>
      </div>

      <Services/>
      <ContactComponents/>
      <Footer/>



    </div>
  )
}

export default Concept