import React from "react";
import { AiTwotoneShopping } from "react-icons/ai";
import "./logo.css";
const Logo = () => {
  return (
    <div>
      <div className="logo" style={{ color: "white" }}>
        <AiTwotoneShopping className="bag" />
        <div>
          <span>Expense</span>
          <span>tracked</span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
