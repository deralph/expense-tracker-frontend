import React from "react";
import { AiTwotoneShopping } from "react-icons/ai";
import "./logo.css";
const Logo:React.FC = () => {
  return (
    <div>
      <div className="flex items-center justify-center text-white">
        <AiTwotoneShopping className="text-4xl big:text-7xl" />
        <div>
          <span className="text-sm block font-[cursive] big:text-[30px]">Expense</span>
          <span className="text-sm block font-[cursive] big:text-[30px]">tracked</span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
