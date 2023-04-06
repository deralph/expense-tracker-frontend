import React from "react";
import { Link } from "react-router-dom";
import Expense from "./Expense";
import "./expenses.css";
import { res } from "../../pages/dashboard";

interface props{ data:res[]
   type:string
    seeall?:boolean }

const Expenses = ({ data, type, seeall }:props) => {
  return (
    <section className="expenses">
      <>
        <h3>{type}</h3>
        <div className="expense-box">
          {data.map((item) => {
            return <Expense {...item} key={item._id} />;
          })}
        </div>
        <div className="expenses-btn">
          {seeall && (
            <Link to="/expense">
              <button className="btns">See All</button>
            </Link>
          )}
        </div>
      </>
    </section>
  );
};

export default Expenses;
