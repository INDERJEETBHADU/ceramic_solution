import React from "react";
import CommonHeading from "../common/CommonHeading";
import { BLOG_CARD } from "../common/Helper";
import Slider from "react-slick";
const Blog = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 2000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="container pt-xxl max-lg:pt-[80px]">
      <CommonHeading text="Our Blog" align="text-center" />
      <div className="flex justify-center pt-5">
        <p className=" text-center font-normal text-lg max-sm:text-sm leading-[28.8px] text-dark_black max-w-[592px]">
          Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt
          primasofi dede facebooka: förutom tivaligt. Fejkade
        </p>
      </div>

      <div className="flex max-xl:hidden gap-6 justify-center mt-14 max-lg:mt-8">
        {BLOG_CARD.map((data, Blog) => (
          <div
            key={Blog}
            className="shadow-[0px_0px_12px_3px_#B6B6B640] rounded-3xl p-[24px] bg-white max-w-[364px] w-full min-h-[474px]"
          >
            <img
              className="rounded-3xl max-w-[316px] w-full"
              src={data.img}
              alt="main_img"
            />
            <p className=" text-2xl leading-[38.4px] text-black font-semibold mt-6">
              {data.heading}
            </p>
            <div className="flex gap-[10px] items-center mt-4">
              <p className="text-red cursor-pointer  text-base leading-[25.6px] font-semibold">
                {data.learn}
              </p>
              <div className="cursor-pointer">{data.arrow}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="xl:hidden">
        <Slider {...settings} className="mt-14 max-lg:mt-8 blog_slider">
          {BLOG_CARD.map((data, Blog) => (
            <div
              key={Blog}
              className="shadow-[0px_0px_12px_3px_#B6B6B640] mb-8 max-lg:max-w-[342px] rounded-3xl p-[24px] bg-white max-w-[364px] w-full"
            >
              <img
                className="rounded-3xl max-lg:rounded-xl min-h-[246px] max-w-[316px] w-full"
                src={data.img}
                alt="main_img"
              />
              <p className=" text-2xl leading-[38.4px] max-sm:text-base text-black font-semibold mt-6">
                {data.heading}
              </p>
              <div className="flex gap-[10px] items-center mt-4">
                <p className="text-red cursor-pointer  text-base leading-[25.6px] font-semibold">
                  {data.learn}
                </p>
                <div className="cursor-pointer">{data.arrow}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Blog;
