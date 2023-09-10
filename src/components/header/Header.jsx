import React from "react";
import { SlHandbag } from "react-icons/sl";
import { BiUser } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IconContext } from "react-icons/lib";
const Header = () => {
  return (
    <nav className="relative w-full min-h-max py-4 bg-primary flex justify-between items-center ">
      <h1 className="text black font-clashdisplay font-light text-2xl hover:cursor-pointer ml-8 md:ml-18 lg:ml-32 md:text-4xl">
        Essentials
      </h1>
      <ul className="list-none hidden justify-center items-center  md:flex">
        <li className="text-black font-spacegrotesk font-normal hover:cursor-pointer text-lg mx-7 lg:mx-10">
          Men
        </li>
        <li className="text black font-spacegrotesk font-normal hover:cursor-pointer text-lg mx-7 lg:mx-10">
          Women
        </li>
        <li className="text black font-spacegrotesk font-normal hover:cursor-pointer text-lg mx-7 lg:mx-10">
          Accesories
        </li>
      </ul>
      <ul className="list-none flex justify-center items-center mr-8  md:mr-18 lg:mr-24">
        <li className="hover:cursor-pointer hidden mr-8 md:block">
          <IconContext.Provider
            value={{
              color: "black",
              className: "global-class-name searchIcon",
              size: "20px",
            }}
          >
            <SlHandbag />
          </IconContext.Provider>
        </li>
        <li className="hover:cursor-pointer  hidden ml-8 md:block">
          <IconContext.Provider
            value={{
              color: "black",
              className: "global-class-name searchIcon",
              size: "25px",
            }}
          >
            <BiUser />
          </IconContext.Provider>
        </li>
        <li className="hover:cursor-pointer mx-[10px] sm:mx-14 md:hidden">
          <IconContext.Provider
            value={{
              color: "black",
              className: "global-class-name searchIcon",
              size: "25px",
            }}
          >
            <RxHamburgerMenu />
          </IconContext.Provider>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
