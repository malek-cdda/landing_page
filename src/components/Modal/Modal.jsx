"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Modal = () => {
  return (
    <div>
      <ModalArea />
    </div>
  );
};

export default Modal;

export const ModalArea = ({}) => {
  return (
    <div className=" container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-8  p-10 bg-[#FFF] shadow-sm rounded-lg">
        <div className="w-full">
          <h1 className=" text-2xl lg:text-4xl text-[#1A1A1A] m-0 pb-4 font-semibold">
            Send us a message
          </h1>
          <p className="lg:text-[16px] text-sm m-0 p-0 font-semibold pb-6">
            <span className="text-[#4D4D4D]">You can reach us anytime via</span>
            <span className="text-[#2AA7DF]  "> inquiry@cdda.io</span>
          </p>
          <div>
            <form className="pb-3.5 flex flex-col gap-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <CustomeLabel name={"First Name"} />
                  <input
                    className="border border-[#E6E6E6] rounded-lg block text-gray-700/80 placeholder:placeholder-[#999] placeholder-xs  w-full   focus:outline-none  py-2.5 px-4"
                    placeholder="Enter your Frist Name "
                    type="text"
                  />
                </div>
                <div>
                  <CustomeLabel name={"Last Name"} />
                  <input
                    className="border border-[#E6E6E6] rounded-lg block text-gray-700/80 placeholder:placeholder-[#999] placeholder-xs  w-full   focus:outline-none py-2.5 px-4"
                    placeholder="Enter your Last Name "
                    type="text"
                  />
                </div>
                <div>
                  <CustomeLabel name={"Email"} />
                  <input
                    className="border border-[#E6E6E6] rounded-lg block text-gray-700/80 placeholder:placeholder-[#999] placeholder-xs  w-full   focus:outline-none py-2.5 px-4"
                    placeholder="your@company.com"
                    type="email"
                  />
                </div>
                <div className="relatived">
                  <CustomeLabel name={"Phone Number"} />
                  <div className="flex">
                    <select className="  border rounded-l-lg text-[#333] px-3.5 bg-[#F2F2F2]">
                      <option>US</option>
                      <option>India</option>
                      <option>India</option>
                      <option>India</option>
                    </select>
                    <input
                      className=" relative border border-[#E6E6E6] rounded-r-lg block text-gray-700/80 placeholder:placeholder-[#999] placeholder-xs  w-full   focus:outline-none py-2.5 px-4"
                      placeholder="+1 (555) 000-0000"
                      type="email"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="flex pb-2 text-sm lg:text-[16px] text-[#1A1A1A] capitalize font-normal ">
                  Company
                </label>
                <input
                  className="border border-[#E6E6E6] rounded-lg block text-gray-700/80 placeholder:placeholder-[#999] placeholder-xs  w-full   focus:outline-none py-2.5 px-4"
                  placeholder="Enter your company name"
                  type="email"
                />
              </div>
              <div>
                <CustomeLabel name={"Message"} />
                <textarea
                  className="border border-[#E6E6E6] rounded-lg block text-gray-700/80 placeholder:placeholder-[#999] placeholder-xs  w-full   focus:outline-none py-2.5 px-4"
                  placeholder="Tell us what we can help you with"
                  type="email"
                  rows={4}
                />
              </div>
              <div class="form-control">
                <label class="cursor-pointer flex items-center gap-2">
                  <input type="checkbox" class="hid " />
                  {/* <span class="checkbox-custom relative h-4 w-4 border border-gray-400 rounded-md bg-white flex items-center justify-center ml-2 checked:bg-primary">
                    <span class="checkmark h-2 w-2 bg-primary rounded-full"></span>
                  </span> */}
                  <p className="  m-0 p-0 font-medium  ">
                    <span className="text-[#1A1A1A] text-sm lg:text-[16px] ">
                      I’d like to receive more information about company, I
                      understand and agree to the
                    </span>
                    <span className="text-[#2AA7DF] text-sm lg:text-[16px]  ">
                      {" "}
                      Privacy Policy
                    </span>
                  </p>
                </label>
              </div>
              <button className="w-full px-5 py-2.5 bg-[#2AA7DF] text-white rounded-lg font-medium mt-2.5">
                Send Message
              </button>
            </form>
          </div>
        </div>
        {/* modal second part code here  */}
        <div className="w-full flex flex-col space-y-3.5 ">
          <h1 className="m-0 p-0 text-2xl lg:text-4xl font-semibold text-[#1A1A1A]  lg:w-10/12">
            Talk to our product analytics expert
          </h1>
          <span className="text-sm lg:text-[16px] text-[#4D4D4D] font-normal">
            Consult our product analytics expert for insights tailored to your
            needs. Elevate decision-making with data-driven strategies. Talk to
            us now!
          </span>
          <span className="m-0 p-0 lg:text-3xl text-xl  text-[#1A1A1A] font-medium">
            Our office
          </span>
          <Image
            src="/meet.jpg"
            width={1000}
            height={1000}
            alt=""
            className="object-cover  rounded-[12px] h-[300px]"
          />
          <span className="text-sm lg:text-[16px] font-normal text-[#4D4D4D] ">
            have questions about pricing, plans, or Growthy? Fill out the form
            our product analytics expert will be in touch directly.
          </span>
          <p className="text-[#1A1A1A] lg:text-lg text-[16px] font-medium">
            Our Location
          </p>
          <div className="flex justify-between space-x-9">
            <div className="flex space-x-2.5 w-1/2 items-start">
              <span className="mt-1 text-[#4D4D4D]">
                <LocationIcon />
              </span>
              <span className="text-sm lg:text-[16px] font-normal text-[#4D4D4D] ">
                C/26, Main Road, Block# C Aftab Nagar, Dhaka-1212, Bangladesh
              </span>
            </div>
            <div className="w-1/2 flex flex-col items-end space-y-3">
              <div className="flex  space-x-2.5">
                <span>
                  <CallerIcon />
                </span>
                <span className="text-sm lg:text-[16px] text-[#4D4D4D]">
                  +880 1711 000 000
                </span>
              </div>
              <div className="flex justify-end space-x-4">
                <span>
                  <Facebook />
                </span>
                <span>
                  <Linkedin></Linkedin>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const CustomeLabel = ({ name }) => {
  return (
    <label className="flex pb-2 lg:text-[16px] text-sm text-[#1A1A1A] capitalize font-normal ">
      {name}

      <span className="text-[#D92D20] pt-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          fill="currentColor"
          className="bi bi-asterisk text-red"
          viewBox="0 0 16 16">
          <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
        </svg>
      </span>
    </label>
  );
};
const CloseMenuIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <path
        d="M5.00098 5L19 18.9991"
        stroke="#1A1A1A"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.99996 18.9991L18.999 5"
        stroke="#1A1A1A"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const LocationIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none">
      <path
        d="M10.0004 11.1917C11.4363 11.1917 12.6004 10.0276 12.6004 8.5917C12.6004 7.15576 11.4363 5.9917 10.0004 5.9917C8.56445 5.9917 7.40039 7.15576 7.40039 8.5917C7.40039 10.0276 8.56445 11.1917 10.0004 11.1917Z"
        stroke="#4D4D4D"
        stroke-width="1.5"
      />
      <path
        d="M3.01675 7.07508C4.65842 -0.141583 15.3501 -0.13325 16.9834 7.08342C17.9417 11.3167 15.3084 14.9001 13.0001 17.1168C11.3251 18.7334 8.67508 18.7334 6.99175 17.1168C4.69175 14.9001 2.05842 11.3084 3.01675 7.07508Z"
        stroke="#4D4D4D"
        stroke-width="1.5"
      />
    </svg>
  );
};

const CallerIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none">
      <path
        d="M18.3082 15.7751C18.3082 16.0751 18.2415 16.3834 18.0998 16.6834C17.9582 16.9834 17.7748 17.2667 17.5332 17.5334C17.1248 17.9834 16.6748 18.3084 16.1665 18.5167C15.6665 18.7251 15.1248 18.8334 14.5415 18.8334C13.6915 18.8334 12.7832 18.6334 11.8248 18.2251C10.8665 17.8167 9.90817 17.2667 8.95817 16.5751C7.99984 15.8751 7.0915 15.1001 6.22484 14.2417C5.3665 13.3751 4.5915 12.4667 3.89984 11.5167C3.2165 10.5667 2.6665 9.61675 2.2665 8.67508C1.8665 7.72508 1.6665 6.81675 1.6665 5.95008C1.6665 5.38341 1.7665 4.84175 1.9665 4.34175C2.1665 3.83341 2.48317 3.36675 2.92484 2.95008C3.45817 2.42508 4.0415 2.16675 4.65817 2.16675C4.8915 2.16675 5.12484 2.21675 5.33317 2.31675C5.54984 2.41675 5.7415 2.56675 5.8915 2.78341L7.82484 5.50842C7.97484 5.71675 8.08317 5.90841 8.15817 6.09175C8.23317 6.26675 8.27484 6.44175 8.27484 6.60008C8.27484 6.80008 8.2165 7.00008 8.09984 7.19175C7.9915 7.38341 7.83317 7.58341 7.63317 7.78341L6.99984 8.44175C6.90817 8.53341 6.8665 8.64175 6.8665 8.77508C6.8665 8.84175 6.87484 8.90008 6.8915 8.96675C6.9165 9.03341 6.9415 9.08341 6.95817 9.13341C7.10817 9.40841 7.3665 9.76675 7.73317 10.2001C8.10817 10.6334 8.50817 11.0751 8.9415 11.5167C9.3915 11.9584 9.82484 12.3667 10.2665 12.7417C10.6998 13.1084 11.0582 13.3584 11.3415 13.5084C11.3832 13.5251 11.4332 13.5501 11.4915 13.5751C11.5582 13.6001 11.6248 13.6084 11.6998 13.6084C11.8415 13.6084 11.9498 13.5584 12.0415 13.4667L12.6748 12.8417C12.8832 12.6334 13.0832 12.4751 13.2748 12.3751C13.4665 12.2584 13.6582 12.2001 13.8665 12.2001C14.0248 12.2001 14.1915 12.2334 14.3748 12.3084C14.5582 12.3834 14.7498 12.4917 14.9582 12.6334L17.7165 14.5917C17.9332 14.7417 18.0832 14.9167 18.1748 15.1251C18.2582 15.3334 18.3082 15.5417 18.3082 15.7751Z"
        stroke="#4D4D4D"
        stroke-width="1.5"
        stroke-miterlimit="10"
      />
    </svg>
  );
};

const Facebook = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none">
      <g clip-path="url(#clip0_35_7202)">
        <path
          d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z"
          fill="#1A1A1A"
        />
      </g>
      <defs>
        <clipPath id="clip0_35_7202">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const Linkedin = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none">
      <path
        d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
        fill="#1A1A1A"
      />
    </svg>
  );
};
