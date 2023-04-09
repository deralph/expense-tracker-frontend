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
    <div className="grid place-content-center basis-[30%] h-auto p-[20px_10px] transition-all relative font-sans shadow-[3px_0_30px_#0000001a] border-solid border border-[#ddd] md:m-[20px_auto] hover:shadow-[3px_0_30px_#00000066] hover:-translate-y-[20px]">
      <div className="flex justify-center">
      <img src={img} className="w-[50px] rounded-[50%] border-2 border-solid border-[##73f] object-contain big:w-[100px]" alt="tetimonials " />
      </div>
      <p className="text-base text-justify p-2 relative big:text-4xl big:my-[30px]">
        <FaQuoteLeft className="block text-[#73f] big:text-[4xl] py-2 " />
        {testimony}
        <FaQuoteRight className="block text-[#73f] ml-[97%] big:text-[4xl] py-2 big:ml:[95%]" />
      </p>
      <p className="text-base text-center p-4 relative big:text-[30px] big:my-[30px] capitalize font-semibold">{name}</p>
    </div>
  );
};

export default Card;
