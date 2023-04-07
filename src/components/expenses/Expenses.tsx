import React from "react";
import { Link } from "react-router-dom";
import Expense from "./Expense";
import "./expenses.css";
import { res } from "../../pages/dashboard";

interface props{ data:res[]
   type:string
    seeall?:boolean }

const Expenses:React.FC<props> = ({ data, type, seeall }) => {
  return (
    <section className="expenses relative w-[70vw] m-[30px] mx-auto big:my-[70px] lg:w-full lg:my-[30px] lg:mx-auto">
      <>
        <h3 className="text-center relative text-[30px] big:text-[60px] big:pb-[10px]">{type}</h3>
        <div className="mb-[30px] flex flex-wrap-reverse justify-evenly items-center big:w-full">
          {data.map((item) => {
            return <Expense {...item} key={item._id} />;
          })}
        </div>
        <div className="flex justify-center">
          {seeall && (
            <Link to="/expense">
              <button className="text-white bg-[#93f] font-semibold rounded-[20px] transition-all text-base py-[10px] px-10 hover:text-[#555] hover:bg-white hover:border-2 hover:border-solid hover:border-[#93f] big:mt-[60px] big:text-[50px] big:py-[30px] big:px-20">See All</button>
            </Link>
          )}
        </div>
      </>
    </section>
  );
};

export default Expenses;
