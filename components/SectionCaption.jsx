"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

const SectionCaption = ({ content, background }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div className="flex justify-center">
      <div
        ref={ref}
        style={{ background: background }}
        className="inline-block mb-[10px] sd:mb-[20px] mx-auto rounded-[4px] text-primary text-center uppercase font-semibold 
        text-[10px] t:text-[12px] sd:text-[14px] tracking-[4px] t:tracking-[7px] sd:tracking-[10px] px-[8px] pl-[12px] py-[3px] t:px-[10px] t:pl-[16px] sd:pt-[6px] sd:pb-[5px] sd:px-[14px] sd:pl-[24px]"
      >
        <span
          className="flex overflow-hidden"
          style={{
            textShadow: "0 16px 0 #00b4f1",
          }}
        >
          {content
            .trim()
            .split("")
            .map((letter, index) => (
              <span
                className={`block transition-all duration-1000 ${
                  letter === " " ? "w-[8px] t:w-[15px]" : "w-auto"
                }`}
                style={{
                  WebkitBackfaceVisibility: "hidden",
                  backfaceVisibility: "hidden",
                  transform: inView ? "translateY(-16px)" : "",
                  transitionDelay: index / 20 + 1.5 + "s",
                }}
                key={index}
              >
                {letter}
              </span>
            ))}
        </span>
      </div>
    </div>
  );
};

export default SectionCaption;
