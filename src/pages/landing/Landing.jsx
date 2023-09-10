import React from 'react'
import HeaderBanner from './headerBanner/HeaderBanner'
import Category from './categories/Category';
import Newsletter from "./newsletter/Newsletter";

const Landing = () => {
  return (
    <>
      <HeaderBanner />
      <Category />
      <Newsletter />
    </>
  );
}

export default Landing
