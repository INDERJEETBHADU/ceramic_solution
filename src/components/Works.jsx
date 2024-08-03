import React from "react";
import works_pic from "../assets/images/webp/works_big_pic.webp";
import CommonHeading from "../common/CommonHeading";
import { Works_box } from "../common/Helper";

const Works = () => {
  return (
    <div className="container pt-xxl ">
      <div className="flex gap-16 ">
        <div className="relative max-lg:hidden ml-[50px] mb-[50px]">
          <img
            className="max-w-[435px] relative z-30"
            src={works_pic}
            alt="work"
          />
          <div className="max-w-[300px] w-full min-h-[396px] z-0 rounded-3xl bg-red absolute max-xl:translate-y-[-50px]  -bottom-[50px] -left-[50px]"></div>
        </div>

        <div className="max-w-[592px] w-full">
          <CommonHeading text="How it works?" />
          <p className="font-Plus font-semibold mt-5 mb-4 text-lg leading-[28.8px] text-black">
            Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt
            primasofi dede facebooka: förutom tivaligt.{" "}
          </p>

          {Works_box.map((data, index) => (
            <div key={index} className="shadow-[0px_1px_28px_1px_#4747471A] mt-4 p-4 bg-white rounded-3xl">
              <div className="flex gap-5">
                <img className="!size-8" src={data.Tick_Icon} alt="tick" />
                <div>
                  <h4 className="font-Plus max-md:text-xl font-semibold text-xl leading-[32px] text-cornflower_blue">
                    {data.Sub_Heading}
                  </h4>
                  <p className="text-black mt-3 font-Plus text-base max-sm:text-xs leading-[25.6px]">
                    {data.Sub_Paragraph}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
