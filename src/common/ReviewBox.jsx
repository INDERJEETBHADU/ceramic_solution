import React from "react";
import { Star } from "../common/Icon";
import google from "../assets/images/svg/google.svg";
import large_star from "../assets/images/svg/large_star.svg";

function ReviewBox(props) {
  return (
    <>
      <div className="flex lg:gap-6 gap-5 max-[576px]:justify-center flex-wrap">
        <div className="max-w-[229.1px] border w-full min-h-[80px] bg-white rounded-2xl p-[5px_45.5px_5px_16px]">
          <div className="flex items-center gap-[10.67px]">
            <img src={google} alt="google" />
            <div className="">
              <h5 className="font-manrope font-normal text-xs leading-[19.2px] text-cod_gray">
                Google Review
              </h5>
              <div className="flex gap-[4.33px] items-center">
                <h3 className="font-manrope font-normal text-xl leading-[32px] text-cod_gray">
                  4.6
                </h3>
                <div className="flex">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
              </div>
              <p className="font-manrope font-normal text-nowrap text-xs leading-[19.2px] text-cod_gray">
                Based on 145 reviews
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[229.1px] w-full border min-h-[80px] bg-white rounded-2xl p-[5px_45.5px_5px_16px]">
          <div className="flex h-full gap-[10.67px]">
            <img
              className="h-[53.33px] w-full max-w-[53.33px] mt-1"
              src={large_star}
              alt="large_star"
            />
            <div>
              <h5 className="font-manrope font-normal text-xs leading-[19.2px] text-cod_gray">
                Trust Pilot Review
              </h5>
              <div className="flex gap-[4.33px] items-center">
                <h3 className="font-manrope font-normal text-xl leading-[32px] text-cod_gray">
                  4.6
                </h3>
                <div className="flex">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
              </div>
              <p className="font-manrope font-normal text-nowrap text-xs leading-[19.2px] text-cod_gray">
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
