import React, { useState } from "react";
import NavBar from "../components/navbar/NavBar";
import Hero from "../components/hero/Hero";
import Features from "../components/Features/Features";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <About />
      <Footer />
      {/*<Skills />
      <Work />
      <Resume />
      <Testimonials />
      <Footer /> */}
    </>
  );
};

export default Home;
