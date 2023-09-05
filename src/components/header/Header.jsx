import React from "react";
import { SlHandbag } from "react-icons/sl";
import { BiUser } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IconContext } from "react-icons/lib";
const Header = () => {
  return (
    <nav className="relative w-full min-h-max py-4 bg-primary flex justify-between items-center pr-4">
      <h1 className="text-white font-clashdisplay font-light text-2xl hover:cursor-pointer ml-8 sm:ml-16 sm:text-3xl">
        Essentials
      </h1>
      <ul className="list-none hidden justify-center items-center  md:flex">
        <li className="text-white font-spacegrotesk font-normal hover:cursor-pointer text-lg mx-7 lg:mx-10">
          Men
        </li>
        <li className="text-white font-spacegrotesk font-normal hover:cursor-pointer text-lg mx-7 lg:mx-10">
          Women
        </li>
        <li className="text-white font-spacegrotesk font-normal hover:cursor-pointer text-lg mx-7 lg:mx-10">
          Accesories
        </li>
      </ul>
      <ul className="list-none flex justify-center items-center">
        <li className="hover:cursor-pointer mx-[10px] sm:mx-0.5 hidden md:block">
          <IconContext.Provider
            value={{
              color: "white",
              className: "global-class-name searchIcon",
              size: "20px",
            }}
          >
            <SlHandbag />
          </IconContext.Provider>
        </li>
        <li className="hover:cursor-pointer mx-14 hidden md:block">
          <IconContext.Provider
            value={{
              color: "white",
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
              color: "white",
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
