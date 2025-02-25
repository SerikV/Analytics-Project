import React from "react";

export default function About() {
  return (
    <section className="work pl-20 pr-20 flex flex-col items-center sm:pl-2 sm:pr-2">
      <div className="first-blog flex justify-between w-full items-center gap-5 md2:flex-col">
        <div data-aos="fade-right" className="left w-full max-w-[480px]">
          <div className="title text-blue-900 text-center font-roboto text-4xl font-semibold leading-normal">
            Automated Reports & Widget Alerts
          </div>
          <div className="subtitle mt-[30px] text-blue-400 text-center font-roboto text-base font-normal leading-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam
            vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor
            pulvinar risus pulvinar sit amet.
          </div>
        </div>
        <div data-aos="fade-left" className="right">
          <img
            src="/assets/about-1.svg"
            alt=""
            className="w-full max-w-[600px] h-[410px]"
          />
        </div>
      </div>
      <div className="second-blog mirror flex justify-between w-full items-center gap-5  md2:flex-col-reverse">
        <div data-aos="fade-right" className="right">
          <img
            src="/assets/about-2.svg"
            alt=""
            className="w-full max-w-[600px] h-[410px]"
          />
        </div>
        <div data-aos="fade-left" className="left w-full max-w-[480px]">
          <div className="title text-blue-900 text-center font-roboto text-4xl font-semibold leading-normal">
            Fully customizable to address your needs
          </div>
          <div className="subtitle mt-[30px] text-blue-400 text-center font-roboto text-base font-normal leading-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam
            vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor
            pulvinar risus pulvinar sit amet.
          </div>
        </div>
      </div>
      <div className="third-blog flex justify-between w-full items-center gap-5  md2:flex-col">
        <div data-aos="fade-right" className="left w-full max-w-[480px]">
          <div className="title text-blue-900 text-center font-roboto text-4xl font-semibold leading-normal">
            Pre-built Dashboard Templates
          </div>
          <div className="subtitle mt-[30px] text-blue-400 text-center font-roboto text-base font-normal leading-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam
            vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor
            pulvinar risus pulvinar sit amet.
          </div>
        </div>
        <div data-aos="fade-left" className="right">
          <img
            src="/assets/about-3.svg"
            alt=""
            className="w-full max-w-[600px] h-[410px]"
          />
        </div>
      </div>
    </section>
  );
}
