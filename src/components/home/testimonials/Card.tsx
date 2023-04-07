import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

interface props{
  id?:string
  img:string
  testimony:string
  name:string
}

const Card:React.FC<props> = ({  img, testimony, name }) => {
  return (
    <div className="card">
      <img src={img} className="w-[50px] rounded-[50%] border-2 border-solid border-[##73f] object-contain big:w-[100px]" alt="tetimonials " />
      <p className="text-base text-justify p-4 relative big:text-4xl big:my-[30px]">
        <FaQuoteLeft className="icon-left" />
        {testimony}
        <FaQuoteRight className="icon-right" />
      </p>
      <p className="text-base text-justify p-4 relative big:text-[30px] big:my-[30px] capitalize font-semibold">{name}</p>
    </div>
  );
};

export default Card;
