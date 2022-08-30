import React from "react";
import { Link } from "react-router-dom";
import Expense from "./Expense";
import "./expenses.css";
import { useGlobal } from "../../components/context/Context";

const Expenses = ({ data, type, seeall }) => {
  return (
    <section className="expenses">
      <>
        <h3>{type}</h3>
        <div className="expense-box">
          {data.map((item) => {
            return <Expense {...item} key={item._id} seeall />;
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
