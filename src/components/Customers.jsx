import React from "react";
import CommonHeading from "../common/CommonHeading";
import { Customers_Card } from "../common/Helper";
import Slider from "react-slick";

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
    <>
      <div className=" container pt-xxl ">
        <CommonHeading text="What Our Customers Say" align="text-center" />
        <div className="flex justify-center ">
          <p className=" font-Plus mt-5 max-lg:mt-4 text-lg max-md:text-sm md:leading-[28.8px]  text-black max-w-[641px] text-center ">
            Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt
            primasofi dede facebooka: förutom tivaligt. Fejkade
          </p>
        </div>
      </div>

      <Slider {...settings} className="mt-14" >
        {Customers_Card.map((data, index) => (
          <div key={index} className="mx-3">
            <div
              className="max-w-[364px] max-sm:p-4 max-sm:max-w-[340px] p-6 min-h-[305px] w-full bg-white rounded-3xl shadow-[0px_2px_44px_3px_#5757571A]"
            >
              <div className="flex gap-2">
                <img src={data.Img} alt="mark" />
                <div>
                  <h5 className="font-Manrope font-semibold text-base leading-[25.6px] text-black">
                    {data.Name_Heading}
                  </h5>
                  <p className="font-Manrope font-normal text-sm text-black leading-[22.4px]">
                    {data.Job}
                  </p>
                </div>
              </div>
              <img className="mt-4" src={data.Star} alt="star" />
              <p className="font-Manrope text-base leading-[25.6px] text-black mt-4">
                "{data.Fitness_Paragraph}"
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Customers;
