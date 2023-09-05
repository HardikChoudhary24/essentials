import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Landing,
  Details,
  Signup,
  Profile,
  Products,
  Checkout,
  Login,
  Header,
  Footer
} from "./utils/imports";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile/:id" element={<Profile/>}/>
        <Route path="/products/:category" element={<Products/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/details/:productId" element={<Details/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
