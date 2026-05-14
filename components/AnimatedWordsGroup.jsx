"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const AnimatedWordsGroup = ({ words, id }) => {
  return (
    <Swiper
      id={id}
      direction={"vertical"}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[Autoplay]}
    >
      {words.map((word, index) => (
        <SwiperSlide
          style={{
            color: word.color,
          }}
          key={index}
        >
          <span>{word.text}</span>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AnimatedWordsGroup;
