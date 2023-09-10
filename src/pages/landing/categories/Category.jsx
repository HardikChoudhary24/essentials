import React from "react";
import { categories } from "../../../utils/data";
import pant from "../../../assets/denim.jpeg";
import shoes from "../../../assets/sneaker.jpeg";
import Accesories from "../../../assets/cap.jpeg";
import shirt from "../../../assets/newshirt.jpeg";

const Category = () => {
  return (
    <section className="bg-primary py-14 md:py-28 px-5  h-fit flex flex-col items-start justify-start lg:px-32">
      <h2 className="text-black text-2xl md:text-3xl lg:text-4xl font-clashdisplay font-normal mb-7">
        Categories
      </h2>
      <div className="flex flex-col w-full gap-y-4 sm:flex-row sm:flex-wrap sm:justify-start sm:items-center gap-x-[5px] md:grid md:grid-rows-3 md:grid-cols-3 md:gap-y-[5px]">
        {categories.map((item) => {
          return (
            <div
              className={
                item.title === "Shirts"
                  ? "shirt relative categoryImg md:row-span-3 md:w-full md:h-full md:border-r-2"
                  : item.title === "Pants"
                  ? "denim relative categoryImg md:col-span-2 md:w-full "
                  : item.title === "Shoes"
                  ? "sneakers relative categoryImg md:w-full md:row-span-2 md:h-full"
                  : "cap relative categoryImg md:w-full md:row-span-2 md:h-full"
              }
            >
              <p className="absolute text-white font-medium font-clashdisplay top-[20px] left-[20px] text-xl">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Category;
