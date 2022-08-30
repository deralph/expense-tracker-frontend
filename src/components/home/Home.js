import React from "react";
import Consult from "../consult/Consult";
import About from "./about/About";
import Body from "./body/Body";
import Features from "./features/Features";
import Footer from "./footer/Footer";
import Record from "./keep_record/LetKeepRecord";
import Navbar from "./navbar/Navbar";
import Testimonial from "./testimonials/Testi";

const Home = () => {
  return (
    <>
      <Navbar />
      <Body />
      <div className="container" style={{ padding: "0 5%" }}>
        <About />
        <Record />
        <Features />
        <Testimonial />
        <Consult />
      </div>
      <Footer />
    </>
  );
};

export default Home;
