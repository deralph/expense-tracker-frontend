import React from "react";
import "./dashboardBody.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Quote = ({ quote, author }) => {
  return (
    <figure className="quote">
      <blockquote cite="https://www.forbes.com/sites/robertberger/2014/04/30/top-100-money-quotes-of-all-time/?sh=2590d31c4998">
        <FaQuoteLeft className="quote-icon" /> <p>{quote}</p>
        <FaQuoteRight className="quote-icon left" />
      </blockquote>
      <figcaption>- - {author} - -</figcaption>
    </figure>
  );
};

export default Quote;
