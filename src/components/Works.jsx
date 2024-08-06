import React from "react";
import worksPic from "../assets/images/webp/works_big_pic.webp";
import CommonHeading from "../common/CommonHeading";
import { WORKS_BOX } from "../common/Helper";
import CommonButton from "../common/CommonButton";

const Works = () => {
  return (
    <div id="quote" className="container">
      <div className="flex xl:gap-16 max-xl:justify-center ">
        <div className="relative max-xl:hidden ml-[50px] mb-[50px]">
          <img
            className="max-w-[435px] relative z-30"
            src={worksPic}
            alt="work"
          />
          <div className="max-w-[300px] w-full min-h-[396px] z-0 rounded-3xl bg-red absolute max-xl:translate-y-[-50px] -bottom-[4%] -left-[50px]"></div>
        </div>

        <div className="max-w-[592px] w-full">
          <CommonHeading text="How it works?" />
          <p className="max-sm:text-base font-normal mt-5 mb-4 text-lg !leading-[28.8px] max-md:!leading-[25px] text-black">
            Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt
            primasofi dede facebooka: förutom tivaligt.{" "}
          </p>
          {WORKS_BOX.map((data, index) => (
            <div
              key={index}
              className="shadow-[0px_1px_28px_1px_#4747471A] mt-4 p-4 bg-white rounded-3xl"
            >
              <div className="flex gap-5">
                <img className="!size-8" src={data.tick_icon} alt="tick" />
                <div className="flex flex-col">
                  <h4 className="max-md:text-xl font-semibold text-xl leading-[32px] text-cornflower_blue">
                    {data.heading}
                  </h4>
                  <p className="text-black mt-3 max-sm:max-w-[222px] text-base max-sm:text-xs leading-[25.6px]">
                    {data.paragraph}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="flex gap-6 max-sm:gap-1 pt-6">
            <CommonButton />
            <button className="border-red border max-md:text-sm max-md:leading-[20px] hover:bg-red hover:text-white duration-300 rounded-[56px] max-sm:max-w-[192px] max-sm:w-full font-bold text-lg leading-[22.68px] text-red p-[20px_32px] max-[370px]:p-[16px_16px] max-md:p-[20px_20px]">
              View Tile Visualizer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
