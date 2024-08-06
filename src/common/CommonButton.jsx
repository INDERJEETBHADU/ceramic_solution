import React from "react";

function CommonButton(props) {
  return (
    <button
      className={` ${props.className}  font-bold text-sm sm:text-lg border border-transparent hover:border-red hover:bg-white hover:text-red leading-[22.68px] text-white bg-red py-[16.7px] px-8 max-md:px-5 rounded-[56px] duration-300 `}
    >
      Get a Quote
    </button>
  );
}
export default CommonButton;
