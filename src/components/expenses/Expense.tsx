import React from "react";
import useIcons from "../../extras/useicon";
import { Link } from "react-router-dom";
import "./expenses.css";
import { res } from "../../pages/dashboard";

const Expense = ({ _id, productName, price, category, productNo, date }:res) => {
  const Date = date!.slice(0, 10);
  return (
    <div className="basis-[45%]" key={_id}>
      <Link to={`/expense/${_id}`} className="p-4 flex rounded-lg bg-white mt-[30px] justify-evenly items-center border-solid border border-[#ddd] shadow-[8px_10px_#0000003c] big:basis-[48%] big:mt-[50px]">
        <div>
          {useIcons().map((icon) => {
            const Red = icon.Icon;
            if (icon.title === category) {
              return (
                <Red
                  className={`text-[30px] p-1 rounded-[50%] big:text-[80px] big:p-6 bg-${icon.color}`}
                  key={icon.title}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="flex justify-between p-1 flex-col w-[120px] big:p-5 sm:w-20">
          <p className="text-base font-semibold capitalize big:text-4xl">{productName}</p>
          <p className="text-[#888] big:text-4xl">{Date}</p>
        </div>
        <div className="flex justify-between p-1 flex-col w-[120px] big:p-5 sm:w-20">
          <p className="text-[#03f] font-semibold big:text-4xl">
            <img src="/images/naira.png" alt="naira" className="w-[30px] object-contain" />
            {Number(price) * Number(productNo)}
          </p>
          <p className="text-[#888] big:text-4xl">{category}</p>
        </div>
      </Link>
    </div>
  );
};

export default Expense;
