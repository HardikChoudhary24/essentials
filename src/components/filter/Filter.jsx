import React, { useState } from "react";
import { IconContext } from "react-icons";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { filter } from "../../utils/data";
import SortBy from "../filterDropdowns/SortBy";
import Price from "../filterDropdowns/Price";
import Color from "../filterDropdowns/Color";

const Filter = () => {
  const [filterValue, setFilterValue] = useState({});
  const [dropdown, setDropdown] = useState("");
  const handleFilter = (e) => {
    const { name, value } = e.target;
    if (name === "sortby") setFilterValue({ ...filterValue, [name]: value });
    if (name === "price") setFilterValue({ ...filterValue, [name]: value });
    if (name === "color") setFilterValue({ ...filterValue, [name]: value });
  };
  return (
    <div className=" hidden pb-5 px-0 lg:flex w-1/4 flex-col sticky top-0 h-fit">
      <div>
        {filter.map((i) => {
          return (
            <>
              <div className="border-t-2 flex justify-between items-center py-4 hover:cursor-pointer">
                <p className="text-black font-clashdisplay font-normal lg:text-lg">
                  {i.name}
                </p>
                {dropdown === i.dropdownName ? (
                  <button onClick={() => setDropdown("")}>
                    <IconContext.Provider
                      value={{
                        color: "black",
                        className: "global-class-name searchIcon",
                        size: "20px",
                      }}
                    >
                      <BiChevronUp />
                    </IconContext.Provider>
                  </button>
                ) : (
                  <button onClick={() => setDropdown(i.dropdownName)}>
                    <IconContext.Provider
                      value={{
                        color: "black",
                        className: "global-class-name searchIcon",
                        size: "20px",
                      }}
                    >
                      <BiChevronDown />
                    </IconContext.Provider>
                  </button>
                )}
              </div>
              {dropdown === i.dropdownName && (
                <form className="flex flex-col items-start justify-start pb-4 gap-1 gap-y-6">
                  {i.dropdownName === "sortby" ? (
                    <SortBy handleFilter={handleFilter} />
                  ) : i.dropdownName === "price" ? (
                    <Price handleFilter={handleFilter} />
                  ) : (
                    <Color handleFilter={handleFilter} />
                  )}
                </form>
              )}
            </>
          );
        })}
        {/* <div
          className="border-t-2 flex justify-between items-center py-4 hover:cursor-pointer"
          onClick={() => setDropdown("sortby")}
        >
          <p className="text-black font-clashdisplay font-normal">Sort By</p>
          <button>
            <IconContext.Provider
              value={{
                color: "black",
                className: "global-class-name searchIcon",
                size: "20px",
              }}
            >
              <BiChevronDown />
            </IconContext.Provider>
          </button>
        </div>
        {dropdown === "sortby" && (
          <form className="flex flex-col items-start justify-start pb-4 gap-1">
            <div>
              <input
                type="radio"
                className="accent-black"
                id="toprated"
                value="toprated"
                name="sortby"
                onChange={(e) => handleFilter(e)}
              />
              <label
                htmlFor="toprated"
                className="text-gray-500 font-normal text-sm font-spacegrotesk ml-6 hover:cursor-pointer"
              >
                Top Rated
              </label>
            </div>
            <div>
              <input
                type="radio"
                className="accent-black"
                id="pricelh"
                value="lowtohigh"
                name="sortby"
                onChange={(e) => handleFilter(e)}
              />
              <label
                htmlFor="pricelh"
                className="text-gray-500 font-normal text-sm font-spacegrotesk ml-6 hover:cursor-pointer"
              >
                Price Low-High
              </label>
            </div>
            <div>
              <input
                type="radio"
                className="accent-black"
                id="pricehl"
                value="hightolow"
                name="sortby"
                onChange={(e) => handleFilter(e)}
              />
              <label
                htmlFor="pricehl"
                className="text-gray-500 font-normal text-sm font-spacegrotesk ml-6 hover:cursor-pointer"
              >
                Price High-Low
              </label>
            </div>
          </form>
        )} */}
      </div>
      {/* <div>
        <div
          className="border-t-2 flex justify-between items-center py-4 hover:cursor-pointer"
          onClick={() => setDropdown("price")}
        >
          <p className="text-black font-clashdisplay font-normal">Price</p>
          <button>
            <IconContext.Provider
              value={{
                color: "black",
                className: "global-class-name searchIcon",
                size: "20px",
              }}
            >
              <BiChevronDown />
            </IconContext.Provider>
          </button>
        </div>
        {dropdown === "price" && (
          <form className="flex flex-col items-start justify-start pb-4 gap-1">
            <div>
              <input
                type="checkbox"
                className="accent-black"
                id="toprated"
                value="toprated"
                name="sortby"
                onChange={(e) => handleFilter(e)}
              />
              <label
                htmlFor="toprated"
                className="text-gray-500 font-normal text-sm font-spacegrotesk ml-6 hover:cursor-pointer"
              >
                $25 - $50
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                className="accent-black"
                id="pricelh"
                value="lowtohigh"
                name="sortby"
                onChange={(e) => handleFilter(e)}
              />
              <label
                htmlFor="pricelh"
                className="text-gray-500 font-normal text-sm font-spacegrotesk ml-6 hover:cursor-pointer"
              >
                $50 - $100
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                className="accent-black"
                id="pricehl"
                value="hightolow"
                name="sortby"
                onChange={(e) => handleFilter(e)}
              />
              <label
                htmlFor="pricehl"
                className="text-gray-500 font-normal text-sm font-spacegrotesk ml-6 hover:cursor-pointer"
              >
                $100 - $150
              </label>
            </div>
          </form>
        )}
      </div>
      <div>
        <div
          className="border-t-2 flex justify-between items-center py-4 hover:cursor-pointer"
          onClick={() => setDropdown("color")}
        >
          <p className="text-black font-clashdisplay font-normal">Color</p>
          <button>
            <IconContext.Provider
              value={{
                color: "black",
                className: "global-class-name searchIcon",
                size: "20px",
              }}
            >
              <BiChevronDown />
            </IconContext.Provider>
          </button>
        </div>
        {dropdown === "color" && (
          <form className="flex flex-col items-start justify-start pb-4 gap-1">
            <div>
              <input
                type="radio"
                className="accent-black"
                id="toprated"
                value="toprated"
                name="sortby"
                onChange={(e) => handleFilter(e)}
              />
              <label
                htmlFor="toprated"
                className="text-gray-500 font-normal text-sm font-spacegrotesk ml-6 hover:cursor-pointer"
              >
                Top Rated
              </label>
            </div>
            <div>
              <input
                type="radio"
                className="accent-black"
                id="pricelh"
                value="lowtohigh"
                name="sortby"
                onChange={(e) => handleFilter(e)}
              />
              <label
                htmlFor="pricelh"
                className="text-gray-500 font-normal text-sm font-spacegrotesk ml-6 hover:cursor-pointer"
              >
                Price Low-High
              </label>
            </div>
            <div>
              <input
                type="radio"
                className="accent-black"
                id="pricehl"
                value="hightolow"
                name="sortby"
                onChange={(e) => handleFilter(e)}
              />
              <label
                htmlFor="pricehl"
                className="text-gray-500 font-normal text-sm font-spacegrotesk ml-6 hover:cursor-pointer"
              >
                Price High-Low
              </label>
            </div>
          </form>
        )}
      </div> */}
    </div>
  );
};

export default Filter;
