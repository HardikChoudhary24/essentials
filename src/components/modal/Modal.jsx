import React from "react";

const Modal = () => {
  return (
    <div className="w-46 min-h-max absolute bottom-[-60px] right-0 bg-gray-50 shadow-xl mr-3 flex flex-col items-start justify-start ">
      <p className="font-clashdisplay text-black hover:cursor-pointer border border-x-0 border-transparent hover:border-black w-full h-full p-2">
        Sign in
      </p>
      <p className="font-clashdisplay text-black hover:cursor-pointer border border-x-0 border-transparent hover:border-black p-2">
        Create Account
      </p>
    </div>
  );
};

export default Modal;
