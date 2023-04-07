import React from "react";
import "./dashboardBody.css";

interface props {
  color: object|any;
  name: string;
  percentage: string;
}

const Dash = ({ color, name, percentage }: props) => {
  return (
    <div className="flex p-1 big:p-6">
      <div className={`w-4 h-4 big:w-10 big:h-10 bg-${color[name]}`} />
      <p className="ml-3 capitalize font-bold big:ml-10 big:text-4xl ">{name}</p>
      <p className="text-[#888] ml-3 capitalize font-bold big:ml-10 big:text-4xl">{`${percentage}%`}</p>
    </div>
  );
};

export default Dash;
