import React from "react";
import "./features.scss";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <section className="features container">
      <div data-aos="fade-up" className="title-section">
        <div className="title text-blue-900 text-center font-roboto text-4xl font-semibold leading-normal">
          Main Features
        </div>
        <div className="subtitle mt-[30px] text-blue-400 text-center font-roboto text-base font-normal leading-9">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae
          nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus
          pulvinar sit amet. Id vel in nam malesuada.
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="icon-section flex mt-[81px] gap-6 text-center justify-center items-center sm:flex-col">
        <div className="icon-block flex flex-col w-full max-w-[380px] text-center justify-center items-center">
          <motion.img
            src="/assets/features-monitoring.svg"
            alt=""
            className="icon w-[60px] h-[60px]"
            initial={{ opacity: 1, y: 20, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <p className="text-blue-900 text-center font-roboto text-base font-normal leading-normal mt-[26px]">
            Monitoring 24/7
          </p>
          <p className=" text-blue-400 text-center font-roboto text-[13px] font-normal leading-7">
            Lorem ipsum dolor sit amet, consectetur adipis cing elit. Elementum
            nisi aliquet volutpat.
          </p>
        </div>

        <div
          data-aos="fade-up"
          className="icon-block flex flex-col w-full max-w-[380px] text-center justify-center items-center">
          <motion.img
            src="/assets/features-widget.svg"
            alt=""
            className="icon w-[60px] h-[60px]"
            initial={{ opacity: 1, x: 20, scale: 0 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 5, repeat: false }}
          />
          <p className="text-blue-900 text-center font-roboto text-base font-normal leading-normal mt-[26px]">
            Monitoring 24/7
          </p>
          <p className=" text-blue-400 text-center font-roboto text-[13px] font-normal leading-7">
            Lorem ipsum dolor sit amet, consectetur adipis cing elit. Elementum
            nisi aliquet volutpat.
          </p>
        </div>

        <div
          data-aos="fade-up"
          className="icon-block flex flex-col w-full max-w-[380px] text-center justify-center items-center">
          <motion.img
            src="/assets/features-perfomance.svg"
            alt=""
            className="icon w-[60px] h-[60px]"
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <p className="text-blue-900 text-center font-roboto text-base font-normal leading-normal mt-[26px]">
            Monitoring 24/7
          </p>
          <p className=" text-blue-400 text-center font-roboto text-[13px] font-normal leading-7">
            Lorem ipsum dolor sit amet, consectetur adipis cing elit. Elementum
            nisi aliquet volutpat.
          </p>
        </div>
      </div>
    </section>
  );
}
