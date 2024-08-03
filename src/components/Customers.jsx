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
    <div className=" max-w-[1440px] mx-auto">
      <div className=" container pt-xxl max-lg:pt-[80px] ">
        <CommonHeading text="What Our Customers Say" align="text-center" />
        <div className="flex justify-center ">
          <p className=" font-Plus mt-5 max-lg:mt-4 text-lg max-sm:text-sm max-md:text-sm max-md:!leading-[22.4px] !leading-[28.8px]  text-black max-w-[641px] text-center ">
            Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt
            primasofi dede facebooka: förutom tivaligt. Fejkade
          </p>
        </div>
      </div>

      <Slider {...settings} className="mt-14" >
        {Customers_Card.map((data, index) => (

          <div key={index}
            className="max-w-[364px] mb-3 max-sm:max-w-[340px] p-6 w-full bg-white rounded-3xl shadow-[0px_2px_44px_3px_#5757571A]"
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
            <p className="font-Manrope max-md:leading-[22.4px] text-base leading-[25.6px] text-black mt-4">
              "{data.Fitness_Paragraph}"
            </p>
          </div>

        ))}
      </Slider>
      </div>
  );
};

export default Customers;
