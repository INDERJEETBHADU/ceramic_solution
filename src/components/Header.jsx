import React, { useState } from "react";
import logo from "../assets/images/svg/logo.svg";
import { ButtonIcon, NavCross, NavLine } from "../common/Icon";
const Header = () => {
  const [show, setFirst] = useState(false);

  if (show === true) {
    document.body.classList.add("max-lg:overflow-hidden");
  } else {
    document.body.classList.remove("max-lg:overflow-hidden");
  }
  return (
      <div className="container pt-6">
        <div className="w-full max-w-[1140px] bg-white rounded-3xl p-4">
          <nav className="flex justify-between items-center">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
            <ul
              className={`${
                show ? "inset-0" : "inset-full"
              } flex items-center xl:gap-[40px] gap-[20px] 2xl:gap-[40px] max-lg:fixed max-lg:top-0 max-lg:right-full max-lg:w-full max-lg:h-full max-lg:bg-white max-lg:flex max-lg:items-center max-lg:justify-center max-lg:flex-col max-lg:z-10 max-lg:transition-all max-lg:duration-300 max-lg:ease-linear`}
            >
              <li
                className="relative group"
                onClick={() => {
                  setFirst(!show);
                }}
              >
                <a
                  href="#Home"
                  className="font-normal text-base text-black transition-all duration-300 ease-linear hover:text-red"
                >
                  Home
                </a>
              </li>
              <li className="flex gap-1 items-center relative group">
                <a
                  href="#about"
                  className="font-normal text-base text-black transition-all duration-300 ease-linear hover:text-red"
                  onClick={() => {
                    setFirst(!show);
                  }}
                >
                  About
                </a>
              </li>
              <li className="relative group">
                <a
                  href="#services"
                  className="font-normal text-base text-black transition-all duration-300 ease-linear hover:text-red"
                  onClick={() => {
                    setFirst(!show);
                  }}
                >
                  Services
                </a>
              </li>
              <li className="relative group">
                <a
                  href="#portfolio"
                  className="font-normal text-base text-black transition-all duration-300 ease-linear hover:text-red"
                  onClick={() => {
                    setFirst(!show);
                  }}
                >
                  Portfolio
                </a>
              </li>
              <li className="relative group">
                <a
                  href="#contact"
                  className="font-normal text-base text-black transition-all duration-300 ease-linear hover:text-red"
                  onClick={() => {
                    setFirst(!show);
                  }}
                >
                  Contact us
                </a>
              </li>
              <li className="relative group">
                <a
                  href="#quote"
                  className="font-normal text-base text-black transition-all duration-300 ease-linear hover:text-red"
                  onClick={() => {
                    setFirst(!show);
                  }}
                >
                  Request a Qoute
                </a>
              </li>
              <li className="md:hidden">
                <a href="tel:+6494461709">
                  <button className="bg-red nav_btn border-transparent border hover:border-red hover:text-red hover:bg-white py-4 px-5 items-center rounded-[56px] duration-300  font-bold text-base leading-[20px] text-white flex">
                    <ButtonIcon />
                    <span>(865) 621-1717</span>
                  </button>
                </a>
              </li>
            </ul>
            <a href="tel:+6494461709">
              <button className="bg-red nav_btn py-4 px-5 items-center rounded-[56px] font-bold border-transparent border hover:border-red hover:text-red hover:bg-white duration-300 text-base leading-[20px] text-white hidden md:flex gap-3">
                <span>
                  <ButtonIcon />
                </span>
                (865) 621-1717
              </button>
            </a>
            <div
              className="z-10 bg-red lg:hidden cursor-pointer rounded-[10px] py-1 "
              onClick={() => {
                setFirst(!show);
              }}
            >
              <span>{show === false ? <NavLine /> : <NavCross />}</span>
            </div>
          </nav>
        </div>
      </div>
  );
};

export default Header;
