"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import style from "./style.module.css";
import { data } from "autoprefixer";
const CardCarousel = () => {
  const sliderRef = React.useRef(null); // Make sure you have useRef imported

  const [active, setActive] = React.useState(0);
  const count = [];
  //   console.log(active);
  const totalCards = 10;
  const cardsPerPage = 3;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const settings = {
    customPaging: function (i) {
      const dotsToShow = 3;
      const start = Math.max(0, active - 1);
      const end = Math.min(data.length, start + dotsToShow);
      return (
        <div className="bg-red-900">
          {i >= start && i < end && (
            <a
              key={i}
              className={`w-6 h-6 flex rounded-full ${
                i === active ? "bg-gray-600" : ""
              }`}
              onClick={() => sliderRef.current?.slickGoTo(i)} // Ensure sliderRef.current is not null before calling slickGoTo
            ></a>
          )}
        </div>
      );
    },
    // appendDots: (dots) => (
    //   <div
    //     className="block text-red-600 bg-red-800"
    //     style={{
    //       background: "#E6E6E6",
    //       borderRadius: "10px",
    //       padding: "10px",
    //     }}>
    //     {dots}
    //     <ul style={{ margin: "0px" }}> {dots} </ul>
    //   </div>
    // ),
    autoplay: true,
    fade: true,
    speed: 500,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: false,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 4,
    beforeChange: (current, next) => {
      //   console.log(current, next);
      if (next + 4 == data.length) {
        setActive(0);
      } else {
        setActive(next);
      }
    },
  };
  console.log(active);

  const [slices, setSlices] = React.useState(0);
  const data = [
    "/download.jpg",
    "/singleSlide.jpg",
    "/person.png",
    "/download.jpg",
    "/singleSlide.jpg",
    "/person.png",
  ];

  return (
    <div>
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item}>
            <Image
              src={item}
              width={1000}
              height={1000}
              alt=""
              className=" h-[539px] w-[443px] rounded-[8px] object-cover"
            />
            dadsa
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardCarousel;
