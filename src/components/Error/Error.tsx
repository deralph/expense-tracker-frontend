import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";
const Error = () => {
  return (
    <section className="flex justify-evenly items-center text-center font-sans bg-[#96f] min-h-[100vh] p-5 slg:flex-col slg:h-auto slg:overflow-hidden slg:pb-10">
      <img src="/images/error.png" alt="404 error" className="big:w-[40vw] slg:object-contain slg:w-[90%]"/>
      <div className="w-full max-w-[500px] big:max-w-[40vw]">
        <h3 className="text-4xl mb-[30px] big:text-7xl sm:text-[30px]">404 - Page Not Found</h3>
        <p className="text-lg font-medium mb-10 big:text-6xl big:mb-14">
          The page you are looking for might have been removed, had its name
          changed or is temporarily not available
        </p>
        <Link to="/" className="text-lg py-4 px-10 text-white bg-[#96f] rounded-[30px] big:text-[50px] big:py-5 big:px-20 sm:p-4 sm:text-base">Go to homePage</Link>
      </div>
    </section>
  );
};

export default Error;
