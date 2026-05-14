"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ApplicationForm from "./ApplicationForm";

const Popup = ({ jobTitle }) => {
  const [popupActive, setPopupActive] = useState(false);
  useEffect(() => {
    if (popupActive) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "auto";
  });
  return (
    <>
      <div
        className={`fixed inset-0 z-[1000] transition-all ease-in-out duration-200 overflow-y-auto bg-black/50 ${
          popupActive
            ? "opacity-100 visible blur-0"
            : "opacity-0 invisible blur-md"
        }`}
      >
        <div className="container relative z-10 py-[100px] px-[15px]">
          <button
            onClick={() => setPopupActive(false)}
            className="t:hidden group absolute top-[15px] right-[15px] bg-white rounded-full p-[10px]"
          >
            <svg
              width="20"
              height="19"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="stroke-grey-5f group-hover:stroke-secondary transition-all ease-in-out duration-200"
                d="M4.46484 3.53516L11.5359 10.6062"
                strokeLinecap="round"
              />
              <path
                className="stroke-grey-5f group-hover:stroke-secondary transition-all ease-in-out duration-200"
                d="M11.5352 3.53516L4.46409 10.6062"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <div className="bg-white relative rounded-[6px] sd:rounded-[10px] overflow-hidden max-w-[1300px] m-auto grid grid-cols-1 t:grid-cols-[minmax(200px,230px)_1fr] sd:grid-cols-[minmax(500px,530px)_1fr]">
            <button
              onClick={() => setPopupActive(false)}
              className="hidden t:flex items-center justify-center group absolute top-[13px] right-[13px] w-[34px] h-[34px] hover:bg-grey-fa rounded-full transition-all ease-in-out duration-200"
            >
              <svg
                width="20"
                height="19"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="stroke-grey-5f group-hover:stroke-secondary transition-all ease-in-out duration-200"
                  d="M4.46484 3.53516L11.5359 10.6062"
                  strokeLinecap="round"
                />
                <path
                  className="stroke-grey-5f group-hover:stroke-secondary transition-all ease-in-out duration-200"
                  d="M11.5352 3.53516L4.46409 10.6062"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            {/* Popup Content */}
            <div className=" flex flex-col gap-[10px] t:gap-[15px] sd:gap-[40px]">
              <div className="flex h-[170px] t:h-full t:flex-1 overflow-hidden">
                <Image
                  className="w-full object-cover object-top h-[170px] t:h-[240px] sd:h-[450px] "
                  src="/job-application-image.webp"
                  width={520}
                  height={450}
                  alt="Job Application"
                />
              </div>
              <div className="p-[10px] pt-0 t:pb-[15px] sd:px-[40px] sd:pb-[30px]">
                <h3 className="tracking-tight font-semibold text-[12px] sd:text-[30px] mb-[5px] sd:mb-[10px]">
                  About Acgile
                </h3>
                <p className="text-grey-5f text-[10px] sd:text-[16px] mb-[10px] sd:mb-[35px]">
                  At Acgile, we prioritize employee growth and well-being. As a
                  leader in accounting and business solutions, we thrive on
                  innovation and excellence. Our supportive, collaborative
                  environment ensures each member feels valued and empowered,
                  making Acgile more than just a workplace—it&apos;s a community
                  dedicated to success and satisfaction.
                </p>
                <div className="flex justify-end ">
                  <Image
                    className="sd:w-[100px]"
                    src="/acgile-logo.svg"
                    alt="Acgile Logo"
                    width={56}
                    height={18}
                  />
                </div>
              </div>
            </div>
            {/* Popup Form */}
            <ApplicationForm jobTitle={jobTitle} />
          </div>
        </div>
      </div>
      <div className="mt-[30px] mb-[50px] flex justify-center">
        <button
          onClick={() => setPopupActive(true)}
          className={`
overflow-hidden relative transition-all ease-in-out duration-200 inline-flex flex-row border-2 items-center justify-center gap-x-[10px]
px-[20px] py-[10px] sd:px-[28px] sd:py-[18px] rounded-full font-semibold
bg-secondary border-secondary text-white shadow-[0_8px_17px_#05203926]
button-hover-gradient group/button hover:cursor-pointer`}
        >
          <span className="relative z-10 transition-all ease-in-out duration-200 text-[12px] sd:text-[18px]">
            Apply Now
          </span>
          <svg
            className="relative z-10 shrink-0 group-hover/button:translate-x-[5px] transition-all ease-in-out duration-200 sd:w-[8px] sd:h-[12px]"
            width="6"
            height="9"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={`stroke-current transition-all ease-in-out duration-200 `}
              d="M1 1L6 6L1 11"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Popup;
