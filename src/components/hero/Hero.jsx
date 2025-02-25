import React, { useState, useEffect } from "react";
import "./Hero.scss";
import ButtonFree from "../../chip/ButtonFree";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 992);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="hero">
      <div className="flex justify-between md2:flex-col-reverse pl-24 pt-[74px] md2:px-1 md2:justify-center md2:items-center md2:text-center">
        <div
          data-aos="fade-up"
          className="left w-full max-w-[550px] h-auto text-white md2:text-center mt-[164px] md2:justify-center md2:items-center md2:mt-[15px] md2:px-7">
          <h1 className="font-roboto text-5xl font-bold leading-[120%] sm:text-[23px]">
            Monitor your business on real-time dashboard
          </h1>
          <p className="subtext text-[#8794BA] font-roboto text-base font-normal leading-7 mt-[15px] mb-[45px] sm:text-[14px] sm:leading-[120%] sm:mb-[10px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam
            vitae nibh nunc mattis imperdiet sed nullam.{" "}
          </p>
          <ButtonFree
            text="Try for free"
            backgroundColor="#EF2A82"
            textColor="#ffffff"
            hoverBackgroundColor="#c72a70" // Припустимо, що це новий колір для hover
          />
        </div>
        <div className="right">
          {isMobile ? (
            <img
              data-aos="fade-up"
              src="/assets/hero-img-mobile.svg"
              alt=""
              className="hero-img relative right-0"
            />
          ) : (
            <img
              data-aos="fade-up"
              src="/assets/hero-img.svg"
              alt=""
              className="hero-img relative right-0"
            />
          )}
        </div>
      </div>
    </section>
  );
}
