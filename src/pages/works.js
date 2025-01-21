import React from "react";
import { ContactComponents, Footer, Services, Navbar } from "../components";

const Works = () => {
  return (
    <div>
      <Navbar />
      <div className="w-[80%] mx-auto mt-[50px]">
        <h3 className="font-[500] text-[24px] text-[#B8B8C4] mb-7">
          Our works
        </h3>
        <p className="text-[40px] sm:text-[50px] lg:text-[70px] font-[400] font-serif">
          {" "}
          Helping businesses achieve <br />
          goals.Solving people's <br /> problems.
        </p>
        <div className="flex gap-10 list-none mt-5 cursor-pointer">
          <li className="text-[25px] text-[#000]">Featured</li>
          <li className="text-[25px] text-[#B8B8C4] hover:text-[#000]">Web</li>
          <li className="text-[25px] text-[#B8B8C4] hover:text-[#000]">
            Mobile
          </li>
          <li className="text-[25px] text-[#B8B8C4] hover:text-[#000]">
            Branding
          </li>
        </div>
      </div>
      <Services />
      <ContactComponents />
      <Footer />
    </div>
  );
};

export default Works;
