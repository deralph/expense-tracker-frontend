import React from "react";

const About:React.FC = () => {
  return (
    <section className="big:my-[100px] big:mx-auto" id="about">
      <h3 className="my-[50px] mx-auto text-center text-[30px] capitalize relative font-sans pb-1 big:text-[60px]">About Us</h3>
      <article className="flex justify-evenly items-center w-full big:my-[100px] big:mx-auto md:flex-col">
        <div className="basis-[45%] md:basis-2/5 md:px-[5%]">
          <h4 className="text-[30px] font-sans text-center text-primary relative big:text-4xl">ExpensedTracked</h4>
          <p className="text-[30px] p-5 big:text-[50px] big:my-[70px] md:p-[10px] md:text-2xl sm:p-1 sm:text-xl">
            ExpenseTracked is a online service which allows you to be able to
            keep track of daily, monthly and yearly payments and expenses
          </p>
          <p className="text-[30px] p-5 big:text-[50px] big:my-[70px] md:p-[10px] md:text-2xl sm:p-1 sm:text-xl">
            It is more like an online journal which helps in keeping record of
            your actual day to day expenses and payments
          </p>
        </div>
        <img src="/images/Metrics-pana.svg" className="w-[40vw] basis-[45%] bg-[100%_100%] md:w-[300px] md:h-[300px] big:scale-[1.8]" alt="abouts"/>
      </article>
    </section>
  );
};

export default About;
