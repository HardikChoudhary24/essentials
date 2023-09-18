import React from "react";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";

const Products = () => {
  return (
    <section className="px-5 xl:px-32 mt-16">
      <h2 className="text-black font-spacegrotesk font-[500] text-[1.8rem] md:text-[2.2rem]">
        Shirts
      </h2>
      <p className="text-gray-500 font-clashdisplay text-[0.9rem] mt-8 mb-4 font-normal">
        50 Items
      </p>
      <section className="flex w-full">
        <Filter />
        <div className=" flex flex-wrap gap-y-12 justify-between lg:ml-8 lg:w-3/4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </section>
  );
};

export default Products;
