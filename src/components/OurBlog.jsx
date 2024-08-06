import React from "react";
import CommonHeading from "../common/CommonHeading";
import { BLOG_CARD } from "../common/Helper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const OurBlog = () => {
  return (
    <div id="portfolio" className="container pt-xxl max-lg:pt-20">
      <CommonHeading text="Our Blog" className="text-center" />
      <div className="flex justify-center pt-5">
        <p className=" text-center font-normal text-lg max-sm:text-sm leading-[28.8px] text-dark_black max-w-[592px]">
          Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt
          primasofi dede facebooka: förutom tivaligt. Fejkade
        </p>
      </div>
      <div className="flex max-xl:hidden gap-6 justify-center mt-14 max-lg:mt-8 pb-xxl max-lg:pb-20">
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
            <p className="text-2xl leading-[38.4px] text-black font-semibold mt-6">
              {data.heading}
            </p>
            <div className="flex gap-[10px] w-fit group items-center mt-4">
              <p className="text-red cursor-pointer text-base leading-[25.6px] font-semibold">
                {data.learn}
              </p>
              <div className="cursor-pointer group-hover:translate-x-1 duration-300">
                {data.arrow}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="xl:hidden blog_swiper">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="swiper-container"
        >
          {BLOG_CARD.map((data, Blog) => (
            <SwiperSlide className="!flex !justify-center pb-xxl max-lg:pb-20">
              <div
                key={Blog}
                className="shadow-[0px_0px_12px_3px_#B6B6B640] rounded-3xl p-[24px] bg-white max-w-[364px] w-full min-h-[474px]"
              >
                <img
                  className="rounded-3xl max-w-[316px] w-full"
                  src={data.img}
                  alt="main_img"
                />
                <p className="text-2xl leading-[38.4px] text-black font-semibold mt-6">
                  {data.heading}
                </p>
                <div className="flex gap-[10px] w-fit group items-center mt-4">
                  <p className="text-red cursor-pointer text-base leading-[25.6px] font-semibold">
                    {data.learn}
                  </p>
                  <div className="cursor-pointer group-hover:translate-x-1 duration-300">
                    {data.arrow}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurBlog;
