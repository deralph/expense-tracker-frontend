import React from "react";
import useIcons from "../../extras/useicon";
import { Link } from "react-router-dom";
import "./expenses.css";

const Expense = ({ _id, productName, price, category, productNo, date }) => {
  const Date = date.slice(0, 10);
  // const Date = date;
  return (
    <div className="expense" key={_id}>
      <Link to={`/expense/${_id}`}>
        <div>
          {useIcons().map((icon) => {
            const Red = icon.Icon;
            if (icon.title === category) {
              return (
                <Red
                  style={{ background: `${icon.color}` }}
                  className="exp-icon"
                  key={icon.title}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="exp">
          <p className="exp-name">{productName}</p>
          <p className="exp-date">{Date}</p>
        </div>
        <div className="exp">
          <p className="exp-price">
            <img src="/images/naira.png" alt="naira" className="naira" />
            {price * productNo}
          </p>
          <p className="exp-date">{category}</p>
        </div>
      </Link>
    </div>
  );
};

export default Expense;
