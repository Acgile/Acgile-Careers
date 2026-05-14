"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

const AnimatedSection = ({
  children,
  delay,
  id = "",
  className = "",
  style,
  tagName: Component = "section",
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <Component
      style={{
        transform: inView ? "none" : "translateY(30px)",
        filter: inView ? "blur(0)" : "blur(5px)",
        opacity: inView ? 1 : 0,
        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1)",
        transitionDelay: delay ? delay + "ms" : 200 + "ms",
        ...style,
      }}
      ref={ref}
      className={className}
    >
      {children}
    </Component>
  );
};

export default AnimatedSection;
