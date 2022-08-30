import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about" id="about">
      <h3>about us</h3>
      <article className="about-1">
        <div className="about-note">
          <h4>ExpensedTracked</h4>
          <p>
            ExpenseTracked is a online service which allows you to be able to
            keep track of daily, monthly and yearly payments and expenses
          </p>
          <p>
            It is more like an online journal which helps in keeping record of
            your actual day to day expenses and payments
          </p>
        </div>
        <img src="/images/Metrics-pana.svg" className="about-img" />
      </article>
    </section>
  );
};

export default About;
