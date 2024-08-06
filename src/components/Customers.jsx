import React from "react";
import CommonHeading from "../common/CommonHeading";
import { CUSTOMERS_CARD } from "../common/Helper";
import Slider from "react-slick";
import ReviewBox from "../common/ReviewBox";

const Customers = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 3000,
    slidesToShow: 1,
    cssEase: "linear",
    variableWidth: true,
    slidesToScroll: 1,
  };
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="container pt-xxl max-lg:pt-20 ">
        <CommonHeading text="What Our Customers Say" className="text-center" />
        <div className="flex justify-center ">
          <p className="mt-5 max-lg:mt-4 text-lg max-sm:text-sm max-md:text-sm max-md:!leading-[22.4px] !leading-[28.8px] text-black max-w-[641px] text-center ">
            Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt
            primasofi dede facebooka: förutom tivaligt. Fejkade
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-8 items-center">
        <ReviewBox />
      </div>
      <Slider {...settings} className="max-h-[501px] max-md:max-h-[444px]">
        {CUSTOMERS_CARD.map((data, index) => (
          <div
            key={index}
            className="max-w-[364px] mx-3 mb-[140px] mt-14 max-lg:mb-20 max-sm:max-w-[340px] p-6 w-full bg-white rounded-3xl shadow-[0px_2px_44px_3px_#5757571A]"
          >
            <div className="flex gap-2">
              <img src={data.img} alt="mark" />
              <div className="flex flex-col">
                <h5 className="font-manrope font-semibold text-base leading-[25.6px] text-black">
                  {data.heading}
                </h5>
                <p className="font-manrope font-normal text-sm text-black leading-[22.4px]">
                  {data.job}
                </p>
              </div>
            </div>
            <img className="mt-4" src={data.star} alt="star" />
            <p className="font-manrope max-md:leading-[22.4px] text-base leading-[25.6px] text-black mt-4">
              "{data.fitness_paragraph}"
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Customers;
