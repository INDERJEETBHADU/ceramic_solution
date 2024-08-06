import React from "react";

function CommonHeading(props) {
  return (
    <h2
      className={` ${props.className} font-semibold lg:text-4xl text-3xl xl:text-2xxl xl:leading-[70.56px] text-black capitalize`}
    >
      {props.text}
    </h2>
  );
}
export default CommonHeading;
