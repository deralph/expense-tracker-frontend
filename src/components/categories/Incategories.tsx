import React from "react";
import { Link } from "react-router-dom";
import { IconType } from "react-icons/lib";

interface props{
  title:string
   Icon:IconType 
    color:string 
     percent?: string 
      percenta?:string
     }

const Incategories:React.FC<props>= ({ title, Icon, color, percent, percenta }) => {
  const Red = Icon;
  return (
    <div className="sm:p-1 big:basis-[45%]">
      <Link to="/expense-form" className={`grid place-items-center p-4 shadow-[3px_3px_20px_#ccc] rounded-2xl m-2 font-sans basis-[30%] min-w-[200px] text-black`}>
        <Red className={`text-5xl p-2 rounded-[50%]  big:text-[80px] big:p-7`} style={{background:`${color}`}} />
        <p className="text-xl pt-5 font-semibold big:text-4xl big:p-10">{title}</p>
        {percent && (
          <>
            <p className="text-xl pt-4 font-semibold big:text-4xl big:p-10 flex items-center" >
              price :{" "}
              <img src="/images/naira.png" alt="naira" className="w-[30px] object-contain" />
              <span className="text-[#0033ff]" > {percent}</span>
            </p>
            <p className="text-xl pt-4 font-semibold big:text-4xl big:p-10">
              percent : <span className="text-[#0033ff]"> {percenta}%</span>
            </p>
          </>
        )}
      </Link>
    </div>
  );
};

export default Incategories;
