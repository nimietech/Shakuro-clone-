import React from "react";
import { ContactComponents, Footer, Services, Navbar } from "../components";
import { IoSearchOutline } from "react-icons/io5";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <div className="w-[80%] mx-auto mt-[50px]">
        <h3 className="font-[500] text-[24px] text-[#B8B8C4] mb-7">Our blog</h3>
        <p className="text-[40px] sm:text-[50px] lg:text-[70px] font-[400] font-serif">
          This is where we tell stories. <br />
          Most of them are about design
        </p>
        <div className="flex items-center gap-10 list-none mt-10 cursor-pointer">
          <li className="text-[22px] text-[#000]">Recents</li>
          <li className="text-[22px] text-[#B8B8C4] hover:text-[#000]">
            Design
          </li>
          <li className="text-[22px] text-[#B8B8C4] hover:text-[#000]">
            Development
          </li>
          <li className="text-[22px] text-[#B8B8C4] hover:text-[#000]">
            Management
          </li>
          <li className="text-[22px] text-[#B8B8C4] hover:text-[#000]">
            Marketing
          </li>

          <div className="ml-32 flex items-centerborder-solid border-[#e5e5e9] hover:border-black border-[1px] duration-300 rounded-full py-3 px-5">
            <IoSearchOutline size={23} />
            <input
              type="text"
              className="ml-1 placeholder:text-[22px] outline-none"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>

      <Services />
      <ContactComponents />
      <Footer />
    </div>
  );
};

export default Blog;
