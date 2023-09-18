import React from 'react'
import { filter } from "../../utils/data";


const Price = ({ handleFilter }) => {
  return filter[1].dropdownList.map((list) => {
    return (
      <div>
        <input
          type="checkbox"
          className="accent-black"
          id={list.name}
          value={list.name}
          name="price"
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

export default Price
