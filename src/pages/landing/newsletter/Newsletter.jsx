import React from "react";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { IconContext } from "react-icons/lib";
const Newsletter = () => {
  return (
    <section className="bg-newsletter py-14 md:py-28 px-5  h-fit flex flex-col items-center justify-center lg:px-32">
      <h4 className="text-black font-clashdisplay font-medium text-4xl md:text-6xl mb-5">
        Newsletter
      </h4>
      <p className="text-black font-clashdisplay font-light text-2xl md:text-3xl mb-3 text-center">
        Get timely updates for your favourite products.
      </p>
      <div className="flex w-fit justify-start items-start mt-5">
        <input
          type="text"
          placeholder="Email"
          className="h-10 font-clashdisplay md:w-80 lg:w-96 px-3 text-xl outline-none border-none"
        />
        <button className="bg-green-700 h-10 w-12 flex justify-center items-center hover:bg-green-800">
          <IconContext.Provider
            value={{
              color: "white",
              className: "global-class-name searchIcon",
              size: "25px",
            }}
          >
            <PiPaperPlaneRightFill />
          </IconContext.Provider>
        </button>
      </div>
    </section>
  );
};

export default Newsletter;