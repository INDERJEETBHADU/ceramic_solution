import React from "react";
import { Star } from "../common/Icon";
import google from "../assets/images/svg/google.svg";
import large_star from "../assets/images/svg/large_star.svg";

function ReviewBox(props) {
  return (
    <>
      <div className=" flex gap-6">
        <div className="max-w-[229.1px] border-[1px] w-full h-[80px] bg-white rounded-2xl p-[8px_45.5px_6px_16px]">
          <div className=" flex items-center gap-[10.67px]">
            <img src={google} alt="google" />
            <div className=" ">
              <h5 className=" font-Manrope font-normal text-xs leading-[19.2px] text-cod_gray">
                Google Review
              </h5>
              <div className=" flex gap-[4.33px] items-center">
                <h3 className=" font-Manrope font-normal  text-xl leading-[32px] text-cod_gray">
                  4.6
                </h3>
                <div className=" flex">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
              </div>
              <p className=" font-Manrope font-normal text-nowrap  text-xs leading-[19.2px] text-cod_gray">
                Based on 145 reviews
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[229.1px] w-full border-[1px] h-[80px] bg-white rounded-2xl p-[8px_45.5px_6px_16px]">
          <div className=" flex  h-full  gap-[10.67px]">
            <img
              className="h-[53.33px] w-full max-w-[53.33px] mt-1"
              src={large_star}
              alt="large_star"
            />
            <div className=" ">
              <h5 className=" font-Manrope font-normal text-xs leading-[19.2px] text-cod_gray">
                Trust Pilot Review
              </h5>
              <div className=" flex gap-[4.33px] items-center">
                <h3 className=" font-Manrope font-normal  text-xl leading-[32px] text-cod_gray">
                  4.6
                </h3>
                <div className=" flex">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
              </div>
              <p className=" font-Manrope font-normal text-nowrap text-xs leading-[19.2px] text-cod_gray">
                Based on 145 reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewBox;
