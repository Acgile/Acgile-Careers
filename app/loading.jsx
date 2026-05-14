import AnimatedLogoIcon from "@/components/AnimatedLogoIcon";
import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[1000] bg-white flex justify-center items-center">
      <svg
        width="150"
        height="120"
        viewBox="0 0 150 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <AnimatedLogoIcon />
      </svg>
    </div>
  );
};

export default Loading;
