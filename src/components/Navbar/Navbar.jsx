"use client";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="container mx-auto mt-12  ">
      <div className="flex justify-between items-center border border-[#E6E6E6] shadow-md px-7 py-4 rounded-[8px]">
        <div>
          <Image src="/Logo.svg" width={100} height={100} alt="" />
        </div>
        <div className=" hidden lg:block">
          <ul className="flex items-center lg:text-sm  font-medium gap-4">
            <li className="group flex item-center gap-1.5 relative">
              <span>What We Do</span>
              <span className="flex items-center   group-hover:rotate-180">
                <DownArrow />
              </span>
              <div className="group-hover:block hidden shadow-md bg-white absolute top-5 rounded-[8px] w-[130px] px-2 py-2 transition-all duration-1000 ease-in-out">
                <ul className="space-y-1">
                  <li>Item-1</li>
                  <li>Item-1</li>
                  <li>Item-1</li>
                  <li>Item-1</li>
                </ul>
              </div>
            </li>
            <li className="flex item-center gap-1.5">
              <span>Engagement Models</span>
              <span className="flex items-center">
                <DownArrow />
              </span>
            </li>
            <li className="flex item-center gap-1.5">
              <span>Industries</span>
              <span className="flex items-center">
                <DownArrow />
              </span>
            </li>
            <li className="flex item-center gap-1.5">
              <span>About US</span>
              <span className="flex items-center">
                <DownArrow />
              </span>
            </li>
            <li className="flex item-center gap-1.5">
              <span>Contact Us</span>
            </li>
          </ul>
        </div>
        <div className="flex justify-between items-center gap-4 text-sm font-medium">
          <div className="hidden sm:flex justify-between items-center gap-4 text-sm font-medium">
            <button className="text-[#1F1F1F]"> Sign in </button>
            <hr className=" h-6 w-[.5px]   bg-[#CBCBCB]" />
            <button className="flex justify-center items-center gap-1.5 bg-[#2AA7DF]   text-white font-bold py-2 px-4 rounded">
              <span>Get Started</span>
              <span className="flex items-center   ">
                <ArrowRight />
              </span>
            </button>
          </div>

          {!isMobileMenuOpen ? (
            <button
              className=" flex lg:hidden justify-center items-center gap-1.5 rounded-full border border-[#1F1F1F] p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <span className="flex items-center   rounded-full">
                <MenuItem />
              </span>
            </button>
          ) : (
            <button
              className=" flex lg:hidden justify-center items-center gap-1.5 rounded-full border border-[#1F1F1F] p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <span className="flex items-center   rounded-full">
                <CloseMenu />
              </span>
            </button>
          )}
        </div>
      </div>
      {isMobileMenuOpen && <ResponsiveMenubar />}
    </div>
  );
}

const ResponsiveMenubar = () => {
  return (
    <div className="h-screen absolute right-0 top-28  ">
      <ul className=" h-screen w-[250px] bg-white shadow-md">
        <li className="group flex item-center gap-1.5 relative">
          <span>What We Do</span>
          <span className="flex items-center   group-hover:rotate-180">
            <DownArrow />
          </span>
          <div className="group-hover:block hidden shadow-md bg-white absolute top-5 -left-32 rounded-[8px] w-[130px] px-2 py-2 transition-all duration-1000 ease-in-out">
            <ul className="space-y-1">
              <li>Item-1</li>
              <li>Item-1</li>
              <li>Item-1</li>
              <li>Item-1</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

const DownArrow = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g id="vuesax/linear/arrow-down">
        <g id="arrow-down">
          <path
            id="Vector"
            d="M13.2797 5.96655L8.93306 10.3132C8.41973 10.8266 7.57973 10.8266 7.06639 10.3132L2.71973 5.96655"
            stroke="#333333"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
    </svg>
  );
};
const ArrowRight = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g id="vuesax/linear/arrow-right">
        <g id="arrow-right">
          <path
            id="Vector"
            d="M9.62012 3.95337L13.6668 8.00004L9.62012 12.0467"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Vector_2"
            d="M2.33301 8H13.553"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
    </svg>
  );
};

const MenuItem = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g id="vuesax/linear/menu">
        <g id="menu">
          <line
            id="Line"
            x1="2"
            y1="4.66675"
            x2="14"
            y2="4.66675"
            stroke="#333333"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            id="Line_2"
            x1="2"
            y1="8"
            x2="14"
            y2="8"
            stroke="#333333"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            id="Line_3"
            x1="2"
            y1="11.3333"
            x2="14"
            y2="11.3333"
            stroke="#333333"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
      </g>
    </svg>
  );
};

const CloseMenu = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 1L15 15M1 15L15 1"
        stroke="#333333"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
