"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Testimonial from "./Testimonial";

const TestimonialCarousel = ({ testimonials }) => {
  return (
    <div className="relative">
      <Swiper
        id="testimonial-carousel"
        loop={true}
        loopAdditionalSlides={1}
        slidesPerView={1}
        spaceBetween={40}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        grabCursor={true}
        breakpoints={{
          1150: {
            slidesPerView: 2,
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <Testimonial testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCarousel;
