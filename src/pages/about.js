import React from 'react'
import { ContactComponents, Footer, Navbar, Services } from '../components'

export const About = () => {
  return (
    <section>
      <div className='w-full h-[120vh] md:h-[100vh]'>
       <Navbar/>
      <div className="w-[80%] mx-auto mt-[50px]">
      <h3 className="font-[500] text-[24px] text-[#B8B8C4] mb-7">About us</h3>

      <p className="text-[40px] sm:text-[50px] lg:text-[70px] font-[400] font-serif mb-4 text-black">
        We are Shakuro. A digital design and development agency
      </p>

      <p className="text-[20px] sm:text-[20px] lg:text-[30px mb-8">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium deleniti sequi officia quam ipsum sint impedit maxime voluptas, nihil debitis at ratione blanditiis a aspernatur.
      </p>

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
      </div>

      <ContactComponents/>
      <div className="w-[80%] mx-auto mt-[40px]">
      <h3 className="text-[24px] text-[#B8B8C4] mb-7">Showcase</h3>
      <p className="text-[40px] sm:text-[30px] lg:text-[40px]  font-serif text-black">
        Proudly presenting a few of our recent works
      </p>
      </div>
      <Services/>
       <Footer/>
    </section>
  )
}
