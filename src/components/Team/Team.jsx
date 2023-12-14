"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./style.module.css";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} next-new-arrow`}
      style={{
        ...style,

        right: "-5%",
        top: "86%",
        background: "#E6E6E6",
        width: "30px",
        height: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        boxShadow:
          "0px 2px 4px -1px rgba(37, 37, 37, 0.06), 0px 4px 6px -1px rgba(37, 37, 37, 0.10)",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      // {...props} className="custom-prev-arrow",
      className={`${className} prev-new-arrow`}
      style={{
        ...style,
        display: "block",
        left: "107%",
        top: "86%",
        background: "#E6E6E6",
        width: "30px",
        height: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        boxShadow:
          "0px 2px 4px -1px rgba(37, 37, 37, 0.06), 0px 4px 6px -1px rgba(37, 37, 37, 0.10)",
      }}
      onClick={onClick}>
      prevsdfsaf
    </button>
  );
}

const Team = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 2000,

    // speed: 1500,
    className: " pb-10",
    responsive: [
      {
        breakpoint: 2024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  const [increment, setIncrement] = React.useState({ item: "" });
  useEffect(() => {
    // Create a new element (div)
    var newElement = document.createElement("div");

    // Set the class name for the new element
    newElement.className = "slick-next";

    // Set the content using an inline SVG as a data URI
    newElement.innerHTML = "frsdf ";

    // Append the new element before the existing element with class "slick-next"
    var existingElement = document.querySelector(".slick-next");
    existingElement.parentNode.insertBefore(newElement, existingElement);
  }, []);
  return (
    <div className="container mx-auto  gap-4 flex  ">
      <div className="xl:w-[90%] w-full">
        <Slider {...settings}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
            <div
              className={` ${
                increment.item == item ? " card-div-active" : ""
              } border  relative h-[424px] rounded-[8px] hidden cursor-pointer  `}
              key={item}>
              <Image
                src="/person.png"
                width={1000}
                height={1000}
                alt=""
                className=" h-full w-full rounded-[8px] object-cover"
                onClick={() => setIncrement({ item: item })}
              />
              <div className="px-6   py-4 w-full flex flex-col items-start gap-2 backdrop-blur-lg  shadow-none absolute bottom-0  rounded-bl-[8px] rounded-br-[8px] border-t border-orange-[#E2E2E2]  ">
                <div className="flex justify-between  items-center w-full ">
                  <h1 className="text-[#1A1A1A] md:text-2xl text-lg font-semibold leading-8">
                    Abul Hasem {item}
                  </h1>
                  <div className="flex gap-3">
                    <Facebook />
                    <Instgram />
                    <Twitter />
                  </div>
                </div>
                <div className="text-[#4D4D4D] font-normal leading-6 md:text-[16px] text-sm ">
                  <span> CEO & Founder</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div></div>
    </div>
  );
};

export default Team;

const Facebook = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <path
        d="M24 11.9996C24 5.34231 18.6575 0 12 0C5.34247 0 0 5.34231 0 11.9996C0 17.9995 4.35616 23.013 10.1096 23.9171V15.4516H7.06849V11.9996H10.1096V9.36959C10.1096 6.32858 11.9178 4.68479 14.6301 4.68479C15.9452 4.68479 17.3425 4.93136 17.3425 4.93136V7.89018H15.863C14.3836 7.89018 13.8904 8.79426 13.8904 9.78054V11.9996H17.2603L16.7671 15.4516H13.9726V23.8349C19.6438 23.013 24 17.9995 24 11.9996Z"
        fill="white"
      />
      <path
        d="M16.6858 15.4523L17.1789 12.0003H13.8091V9.78123C13.8091 8.79495 14.3022 7.89087 15.7817 7.89087H17.2611V4.93205C17.2611 4.93205 15.8639 4.68549 14.5488 4.68549C11.8365 4.68549 10.0282 6.32927 10.0282 9.37028V12.0003H7.06934V15.4523H10.1104V23.8356C10.6858 23.9178 11.3433 24 12.0008 24C12.6584 24 13.2337 23.9178 13.8913 23.8356V15.4523H16.6858Z"
        fill="#2AA7DF"
      />
    </svg>
  );
};

const Instgram = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="white"
      />
      <path
        d="M15.6989 7.47864C15.2057 7.47864 14.877 7.8074 14.877 8.30056C14.877 8.79371 15.2879 9.12247 15.6989 9.12247C16.192 9.12247 16.5208 8.79371 16.5208 8.30056C16.5208 7.8896 16.192 7.47864 15.6989 7.47864Z"
        fill="#2AA7DF"
      />
      <path
        d="M12.0829 8.54706C10.1925 8.54706 8.63086 10.1087 8.63086 11.9991C8.63086 13.8895 10.1925 15.4512 12.0829 15.4512C13.9733 15.4512 15.535 13.8895 15.535 11.9991C15.535 10.1087 13.9733 8.54706 12.0829 8.54706ZM12.0829 14.2183C10.85 14.2183 9.86374 13.232 9.86374 11.9991C9.86374 10.7662 10.85 9.77993 12.0829 9.77993C13.3158 9.77993 14.3021 10.7662 14.3021 11.9991C14.3021 13.232 13.3158 14.2183 12.0829 14.2183Z"
        fill="#2AA7DF"
      />
      <path
        d="M14.7955 19.0681H9.20643C6.90506 19.0681 5.01465 17.1777 5.01465 14.8763V9.2873C5.01465 6.98593 6.90506 5.09552 9.20643 5.09552H14.7955C17.0968 5.09552 18.9873 6.98593 18.9873 9.2873V14.7942C19.0694 17.1777 17.179 19.0681 14.7955 19.0681ZM9.20643 6.3284C7.5626 6.3284 6.32972 7.64347 6.32972 9.20511V14.7942C6.32972 16.438 7.64479 17.6709 9.20643 17.6709H14.7955C16.4393 17.6709 17.6722 16.3558 17.6722 14.7942V9.20511C17.6722 7.56127 16.3571 6.3284 14.7955 6.3284H9.20643Z"
        fill="#2AA7DF"
      />
    </svg>
  );
};

const Twitter = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="white"
      />
      <path
        d="M18.658 7.88973C18.2471 8.05412 17.7539 8.2185 17.3429 8.30069C17.5895 8.30069 17.8361 7.88973 18.0005 7.72535C18.1649 7.47877 18.3293 7.2322 18.4114 6.90343V6.82124H18.3293C17.8361 7.06781 17.343 7.31439 16.7676 7.39658C16.6854 7.39658 16.6854 7.39658 16.6854 7.39658C16.6032 7.31439 16.6032 7.31439 16.521 7.2322C16.2745 7.06781 16.0279 6.90343 15.7813 6.73905C15.4525 6.57466 15.0416 6.49247 14.6306 6.57466C14.2197 6.57466 13.8909 6.73905 13.5621 6.90343C13.2334 7.06781 12.9046 7.31439 12.658 7.64316C12.4114 7.97192 12.2471 8.30069 12.1649 8.71165C12.0827 9.12261 12.0827 9.45138 12.1649 9.86233C12.1649 9.94453 12.1649 9.94453 12.0827 9.94453C9.94569 9.61576 8.13747 8.87603 6.65801 7.2322C6.57582 7.15001 6.57583 7.15001 6.49363 7.2322C5.8361 8.2185 6.16487 9.69795 6.98678 10.4377C7.06897 10.5199 7.23336 10.6021 7.31555 10.7664C7.23336 10.7664 6.74021 10.6843 6.24706 10.4377C6.16486 10.4377 6.16487 10.4377 6.16487 10.5199C6.16487 10.6021 6.16487 10.6843 6.16487 10.8486C6.24706 11.8349 6.98678 12.739 7.89089 13.0678C7.97308 13.15 8.13747 13.15 8.21966 13.15C7.97308 13.2322 7.8087 13.2322 7.23336 13.15C7.15117 13.15 7.15116 13.15 7.15116 13.2322C7.56212 14.4651 8.54843 14.7938 9.28816 15.0404C9.37035 15.0404 9.45253 15.0404 9.61692 15.0404C9.37034 15.3692 8.54843 15.698 8.13747 15.7801C7.39774 16.0267 6.65801 16.1089 5.91829 16.0267C5.8361 16.0267 5.75391 16.0267 5.75391 16.0267V16.1089C5.91829 16.1911 6.08267 16.2733 6.24706 16.3555C6.74021 16.6021 7.23336 16.8486 7.72651 16.9308C10.4388 17.6706 13.3977 17.0952 15.4525 15.1226C17.0142 13.561 17.5895 11.424 17.5895 9.2048C17.5895 9.12261 17.6717 9.04042 17.7539 9.04042C18.1649 8.71165 18.4936 8.38288 18.8224 7.97192C18.658 8.05412 18.658 7.97192 18.658 7.88973Z"
        fill="#2AA7DF"
      />
    </svg>
  );
};
