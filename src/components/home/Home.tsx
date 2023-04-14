import React from "react";
import Consult from "../consult";
import About from "./about";
import Body from "./body";
import Features from "./features";
import Footer from "./footer";
import Record from "./keep_record";
import Navbar from "./navbar";
import Testimonial from "./testimonials";

const Home:React.FC = () => {
  return (
    <>
      <Navbar />
      <Body />
      <div className="w-full big:max-w-[1800px] p-x-[5%]">
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
