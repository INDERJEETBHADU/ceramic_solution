import React from "react";
import CommonHeading from "../common/CommonHeading";
import { Callicon, Like, RedStar } from "../common/Icon";
import CommonButton from "../common/CommonButton";
import chooseus from "../assets/images/webp/choose.webp";

function Choose() {
  return (
    <>
      <div className="bg-pink max-w-[1920px] mx-auto">
        <div className="container py-16 xl:py-[100px]">
          <div className="row">
            <div className="col-12 lg:col-6">
              <CommonHeading text="Why Choose us?" />
              <p className="font-Plus font-normal text-base md:text-lg max-w-[590px] text-black mt-4 md:mt-5">
                Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.
                Pregigt primasofi dede facebooka: förutom tivaligt.{" "}
              </p>
              <div className="flex gap-5 mt-8">
                <div className="min-w-16 h-2xl rounded-[10px] bg-darkpink flex justify-center items-center">
                  <RedStar />
                </div>
                <div className="flex flex-col">
                  <p className="font-Plus font-semibold text-xl text-black">
                    High Quality Materials
                  </p>
                  <p className="font-Plus font-normal text-sm md:text-base text-black mt-3 max-w-[370px]">
                    Es ist ein lang erwiesener Fakt, dass ein Leser vom Text
                    abgelenkt wird.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 mt-6">
                <div className="min-w-16 h-2xl rounded-[10px] bg-darkpink flex justify-center items-center">
                  <Like />
                </div>
                <div className="flex flex-col">
                  <p className="font-Plus font-semibold text-xl text-black">
                    Durability with Warranty
                  </p>
                  <p className="font-Plus font-normal text-sm md:text-base text-black mt-3 max-w-[370px]">
                    Es ist ein lang erwiesener Fakt, dass ein Leser vom Text
                    abgelenkt wird.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 mt-6">
                <div className="min-w-16 h-2xl rounded-[10px] bg-darkpink flex justify-center items-center">
                  <Callicon />
                </div>
                <div className="flex flex-col">
                  <p className="font-Plus font-semibold text-xl text-black">
                    24/7 Support
                  </p>
                  <p className="font-Plus font-normal text-sm md:text-base text-black mt-3 max-w-[370px]">
                    Es ist ein lang erwiesener Fakt, dass ein Leser vom Text
                    abgelenkt wird.
                  </p>
                </div>
              </div>
              <CommonButton spacing="mt-9" />
            </div>
            <div className="col-12 lg:col-6 relative lg:flex flex-col items-end hidden">
              <img
                src={chooseus}
                alt="chooseus"
                className=" max-w-[469px] rounded-3xl w-full z-10 relative"
              />
              <div className="hidden xl:block absolute top-[34%] left-[4%] w-[300px] h-[396px] bg-red rounded-[24px] z-[2]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Choose;
