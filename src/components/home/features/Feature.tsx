import React from "react";
import { IconType } from "react-icons/lib";

interface props{
  Icon:IconType
  title:string
  desc:string
}

const Feature:React.FC<props> = ({ Icon, title, desc }) => {
  return (
    <div className=" basis-[30%] text-center font-sans p-5">
      <div className="flex justify-center">
      <Icon className="text-[4rem] text-[#96f] text-center big:text-[8rem]" />
      </ div>
      <p className="text-[1.7rem font-semibold p-[15px_0_20px] big:text-5xl big:py-[30px]">{title}</p>
      <p className="text-[1.3rem] big:p-5 big:text-4xl">{desc}</p>
    </div>
  );
};

export default Feature;
