import React from "react";
import Img from "../image/Img";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-start w-[45%] sm:w-[33%]">
      <div
        className="relative overflow-hidden w-full"
        onClick={() => navigate("/details/22")}
      >
        <img
          src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F17%2Fb7%2F17b7c63c4a87ee574fb3e37fbf5e2dc6de707029.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
          className=" relative hover:opacity-0 transition-all cursor-pointer"
        />
        <img
          src="https://lp2.hm.com/hmgoepprod?set=source[/30/3b/303b85d60eb5e0836e0f2756ff207fc0b59c0c41.jpg],origin[dam],category[men_hoodiessweatshirts_sweatshirts],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]"
          className="absolute top-0 left-0 z-[-1] cursor-pointer"
        />
      </div>
      <p
        className="text-xs font-clashdisplay font-normal text-black mt-2 hover:underline hover:cursor-pointer sm:text-base"
        onClick={() => navigate("/details/22")}
      >
        Smooth Cotton Sweater
      </p>
      <p className="font-spacegrotesk font-medium text-black mt-[1px] text-xs  sm:text-base">
        $89.50
      </p>
    </div>
  );
};

export default Card;
