import React from "react";
import Header from "./Header";
import ReviewBox from "../common/ReviewBox";
import CommonButton from "../common/CommonButton";
import installer from "../assets/images/svg/interstaller.svg";
import award from "../assets/images/svg/bussiness_award.svg";
import googleBox from "../assets/images/svg/google_box.svg";
import starBox from "../assets/images/svg/star_box.svg";

const Hero = () => {
  return (
    <div id="home" className="bg-hero bg-center bg-cover max-w-[1920px] mx-auto">
      <Header />
      <div className="container pb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold !leading-[40px] xl:text-xxl md:!leading-[60px] xl:!leading-[80.64px] text-white mt-[79px]">
          Transform Your Space with{" "}
          <span className="lg:block">Precision and Quality:</span>
          Get a Free Quote Today!
        </h2>
        <p className="font-normal text-base md:text-lg lg:text-lg text-white max-w-[742px] mt-5">
          Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt
          primasofi dede facebooka: förutom tivaligt. Fejkade nyheter eurosamma
          sol: teroktig,
        </p>
        <CommonButton className="mt-9" />
        <div className="hidden sm:flex gap-6 mt-16 flex-wrap">
          <ReviewBox />
          <img src={installer} alt="installer" />
          <img src={award} alt="award" />
        </div>

        <div className="flex gap-6 flex-wrap sm:hidden mt-16">
          <img src={googleBox} alt="Trust" className="max-w-2xxl" />
          <img src={starBox} alt="trust" className="max-w-2xxl" />
        </div>
        <div className="flex gap-6 sm:hidden mt-6">
          <img src={installer} alt="installer" />
          <img src={award} alt="award" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
