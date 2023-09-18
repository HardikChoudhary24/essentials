import React from "react";
import bannerImg from "../../../assets/banner.jpeg";
import { useNavigate } from "react-router-dom";
const HeaderBanner = () => {
  const navigate = useNavigate();
  return (
    <header className="w-full h-fit bg-primary flex flex-col justify-between items-start sm:pl-0 sm:flex-row sm:items-center border-none">
      <div className="flex flex-col justify-center items-start order-last sm:order-first sm:ml-4 lg:ml-32 ">
        <p className="text black font-clashdisplay my-5 mx-5 lg:mx-0 text-[1.5rem] sm:text-[1.7rem] lg:text-[2.2rem] xl:text-[2.8rem] 2xl:text-[3.2rem]">
          Clothing designed for
          <span className="block sm:inline"> adventure.</span>
        </p>
        <button
          className="rounded-none  p-1 font-spacegrotesk mx-5 mb-4 lg:mx-0 text-sm   font-medium w-32 hover:buttonHover md:p-2 lg:p-3 xl:p-4 lg:my-3 transition-all ease-in duration-[0.1s] bg-transparent border border-solid border-secondry text-black"
          onClick={() => navigate("/products/all")}
        >
          Shop Now
        </button>
      </div>
      <img
        src={bannerImg}
        alt="bannerImg"
        className="w-[100%] mt-1 mb-4 sm:w-[55%] sm:mb-0 "
      />
    </header>
  );
};

export default HeaderBanner;
