import React from "react";
import "./footer.scss";
import { data } from "../../data/data";
import Card from "../../chip/Card";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

export default function Footer() {
  return (
    <footer className=" pt-[272px] pb-[111px] px-[210px] sm:px-[15px] xl:px-[80px]">
      <div className="section__title w-full max-w-[600px] mx-auto">
        <h2 className="title flex justify-center text-white font-bold text-[40px]">
          Pricing Plans
        </h2>
        <p className="subtitle flex justify-center items-center text-blue-400 text-center font-roboto text-[18px] font-normal leading-7 mt-[30px] pb-[30px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          nisi aliquet volutpat pellentesque volutpat est.
        </p>
      </div>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1.3}
        pagination={{ clickable: true }}
        navigation
        onSlideChange={() => console.log("slide change")}
        onSwiper={swiper => console.log(swiper)}
        breakpoints={{
          // when window width is >= 640px
          480: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2.4,
            spaceBetween: 30,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}>
        {data.map(plan => (
          <SwiperSlide key={plan.id}>
            <Card {...plan} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="split">
        <img src="/assets/split-footer.svg" alt="" className=" py-24" />
      </div>
      <div className="flex justify-around md:flex-col md:justify-center md:items-center md:gap-10 ">
        <div className="logo">
          <img src="/assets/logo-footer.svg" alt="" />
        </div>
        <div className="footer-items flex gap-[36px] text-[#8794BA] font-roboto text-sm font-normal">
          <a className="hover:text-white" href="">
            Product
          </a>
          <a className="hover:text-white" href="">
            Pricing Plans
          </a>
          <a className="hover:text-white" href="">
            FAQ
          </a>
          <a className="hover:text-white" href="">
            Blog
          </a>
        </div>
        <div className="social flex gap-9">
          <a href="" className="hover:brightness-0 hover:invert transition">
            <img className="w-[20px] h-[20px]" src="/assets/fb.svg" alt="" />
          </a>
          <a href="" className="hover:brightness-0 hover:invert transition">
            <img className="w-[20px] h-[20px]" src="/assets/tw.svg" alt="" />
          </a>
          <a href="" className="hover:brightness-0 hover:invert transition">
            <img className="w-[20px] h-[20px]" src="/assets/insta.svg" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
}
