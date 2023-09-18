import React from 'react'
import { filter } from "../../utils/data";

const Color = ({ handleFilter }) => {
  return filter[2].dropdownList.map((list) => {
    return (
      <div>
        <input
          type="radio"
          className={
            list.name === "white" || list.name === "black"
              ? `accent-${list.name}`
              : `accent-${list.name}-500`
          }
          id={list.name}
          value={list.name}
          name="color"
          onChange={(e) => handleFilter(e)}
        />
        <label
          htmlFor={list.name}
          className="text-gray-500 font-normal text-sm font-spacegrotesk ml-6 hover:cursor-pointer lg:text-base"
        >
          {list.value}
        </label>
      </div>
    );
  });
};

export default Color
