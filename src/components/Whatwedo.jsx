import React from "react";
import { WHAT_WE_DO_CARD } from "../common/Helper";
import { Redarrowcard } from "../common/Icon";
import CommonHeading from "../common/CommonHeading";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Whatwedo = () => {
  return (
    <>
      <div className="max-w-[1920px] mx-auto">
        <div className="container py-[76px] xl:py-xxl">
          <CommonHeading
            text="What we do"
            className="pb-2 lg:pb-6 mb-2 text-center"
          />
          <div className="row hidden lg:flex">
            {WHAT_WE_DO_CARD.map((data, index) => (
              <div key={index} className="flex justify-center col-4 pt-6">
                <div className="max-w-[364px] flex flex-col justify-between w-full rounded-3xl shadow-3xl p-6">
                  <div>
                    <img
                      className="rounded-3xl"
                      src={data.img}
                      alt="card-img"
                    />
                    <p className="font-semibold text-2xl text-black mt-6">
                      {data.heading}
                    </p>
                    <p className="font-normal text-base text-black mt-6">
                      {data.para}
                    </p>
                  </div>
                  <div className="flex w-fit mt-6 group items-center gap-3">
                    <p className="cursor-pointer font-semibold text-base text-red">
                      Learn more
                    </p>
                    <div className="cursor-pointer group-hover:translate-x-2 duration-300">
                      <Redarrowcard />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:hidden">
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
                960: {
                  slidesPerView: 3,
                },
              }}
              modules={[Autoplay, Pagination]}
              className="swiper-container"
            >
              {WHAT_WE_DO_CARD.map((data, index) => (
                <SwiperSlide key={index}>
                  <div className="flex justify-center p-5 mb-6">
                    <div className="max-w-[364px] w-full rounded-3xl shadow-3xl p-6">
                      <img src={data.img} alt="card-img" />
                      <p className="font-semibold text-xl lg:text-2xl text-black mt-6 text-nowrap">
                        {data.head}
                      </p>
                      <p className="font-normal text-base text-black mt-3">
                        {data.para}
                      </p>
                      <div className="flex mt-6 items-center gap-3">
                        <p className="font-semibold text-base text-red">
                          Learn more
                        </p>
                        <Redarrowcard />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whatwedo;
