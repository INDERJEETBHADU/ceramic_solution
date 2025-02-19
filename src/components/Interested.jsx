import React from "react";
import CommonHeading from "../common/CommonHeading";

const Interested = () => {
  return (
    <div id="contact" className="container pt-xxl max-lg:pt-20">
      <div className="bg-[url(../src/assets/images/webp/interested-bg-img.webp)] px-6 py-16 max-lg:py-9 bg-[#FF0000BF] bg-no-repeat bg-cover bg-center rounded-3xl">
        <CommonHeading text="Interested?" className="text-white text-center" />
        <CommonHeading
          text="Get in touch with us"
          className="text-white text-center"
        />
        <div className="flex flex-col items-center pt-4">
          <p className="max-w-[592px] mb-9 max-lg:mb-8 text-center max-sm:text-sm text-lg leading-[28.8px] text-white">
            Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt
            primasofi dede facebooka: förutom tivaligt.{" "}
          </p>
          <button className="font-bold text-sm sm:text-lg leading-[22.68px] text-red bg-white hover:text-white hover:bg-red border border-transparent hover:border-white py-4 px-8 max-md:px-5 rounded-[56px] duration-300">
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Interested;
