// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import left from "../../assets/arrow-left.svg";
import right from "../../assets/arrow-right.svg";

import { testimonials } from "../../data/testimonialsData";

const TestimonialsSlider = () => {
  return (
    <section id="testimonials" className="testimonials-container sm:py-14 px-4">
      <div className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
          Testimonials
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div className="relative container mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          autoplay={{
            delay: 5500,
          }}
          loop={true}
          className="mx-auto">
          {testimonials.map(testimonial => (
            <SwiperSlide
              key={testimonial.id}
              className="flex justify-center mt-20 sm:mt-0 h-auto">
              <div
                data-aos="fade-up"
                className="testimonial  text-center bg-white text-gray-800 max-w-8xl mx-auto p-24 sm:py-2 sm:pb-4 sm:px-4  ">
                <h2 className="text-[2.2rem] sm:text-[1.7rem] font-semibold sm:text-xl mb-4">
                  {testimonial.header}
                </h2>
                <p className="mb-4 text-[1.4rem] sm:text-[1rem] text-center  text-gray-500">
                  {testimonial.comment}
                </p>
                <div className="rating mb-4">{testimonial.rating}</div>
                <div className="author font-semibold">
                  <span className="text-lg">{testimonial.name}</span> -{" "}
                  <span className="text-sm">{testimonial.title}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Ліва стрілка */}
        <div className="swiper-button-prev-custom absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
          <button className="bg-transparent border-none cursor-pointer">
            <img src={left} alt="Previous" />
          </button>
        </div>

        {/* Права стрілка */}
        <div className="swiper-button-next-custom absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
          <button className="bg-transparent border-none cursor-pointer">
            <img src={right} alt="Next" />
          </button>
        </div>
        <style>
          {`
            /* Загальні стилі для буллетів */
            .swiper-pagination{
              position: relative !important;
            }
            .swiper-pagination-bullet {
              background-color: black;
              background: transparent;
              border: 1px solid #8BC0FF;
              opacity: 1;
              width: 16px;
              height: 16px;
              margin: 0 6px!important;
            }

            /* Стилі для активного буллета */
            .swiper-pagination-bullet-active {
              background: black;
              border-color: black;
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
