import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

interface props{
  quote:string
  author:string
}

const Quote:React.FC<props> = ({ quote, author }) => {
  return (
    <figure className="max-w-[500px] w-[90%] my-4 mx-auto text-xl py-[10px] px-4 rounded-[30px] border-solid border border-[#93f] big:max-w-[60vh] big:my-10 big:mx-auto big:text-[45px] big:p-[30px] sml:mt-[30px] sm:p-1 sm:text-base">
      <blockquote cite="https://www.forbes.com/sites/robertberger/2014/04/30/top-100-money-quotes-of-all-time/?sh=2590d31c4998">
        <FaQuoteLeft className="text-[#93f] p-1" /> <p className="font-semibold sml:text-base">{quote}</p>
        <FaQuoteRight className="text-[#93f] p-1 ml-[95%]" />
      </blockquote>
      <figcaption className="font-bold text-center">- - {author} - -</figcaption>
    </figure>
  );
};

export default Quote;
