import React from "react";
import { filter } from "../../utils/data";

const SortBy = ({ handleFilter }) => {
  return filter[0].dropdownList.map((list) => {
    return (
      <div>
        <input
          type="radio"
          className="accent-black"
          id={list.name}
          value={list.name}
          name="sortby"
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

export default SortBy;
