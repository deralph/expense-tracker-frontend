import React, { useState, useEffect, useCallback } from "react";
import { useGlobal } from "../../context/Context";
import Expenses from "../../expenses/Expenses";
import Dash from "./Dash";
import "./dashboardBody.css";
import quotes from "../../../extras/quotesDB";
import { sets, Category_colors } from "../../../extras/functions";
import useIcons from "../../../extras/useicon";
import Quote from "./Quote";
import Incategories from "../../categories/Incategories";
import { Link } from "react-router-dom";
import { reduceFunction } from "../../../extras/functions";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

interface props {
  result: Array<any>;
  user: string;
}

const DashboardBody: React.FC<props> = ({ result, user }) => {
  const { sidebar, setSidebar } = useGlobal();
  const [presentQuote, setPresentQuote] = useState(0);

  const randomNum = useCallback(() => {
    const random = Math.floor(Math.random() * (quotes.length - 1));
    setPresentQuote(random);
  }, [setPresentQuote]);

  useEffect(() => {
    const change = setInterval(() => {
      randomNum();
    }, 8000);
    return () => clearInterval(change);
  }, [randomNum]);
  const total_Expense = reduceFunction(result);

  const Unique_expense_Category = sets(result, "category");

  const percentage = Unique_expense_Category.map((uniqueCategory) => {
    const filter_Category = result.filter(
      (expense) => expense.category === uniqueCategory
    );

    const percent = reduceFunction(filter_Category);

    const realPercent = ((percent / total_Expense) * 100).toFixed(2);
    return {
      type: uniqueCategory,
      percenta: realPercent,
      percent,
    };
  });

  const sorted_percent = percentage.sort((a: any, b: any) => {
    return b.percenta - a.percenta;
  });

  const sum = (arr: any[], n: number) => {
    const joined_Array = arr.slice(0, n + 1);
    const cummulative = joined_Array.reduce((acc, real) => {
      const { percenta } = real;
      const may = Number(percenta);
      return acc + may;
    }, 0);
    return cummulative;
  };

  const Cummulative_percent_Array: any[] = [];
  const Cummulative_percent = () => {
    for (let i = 0; i < sorted_percent.length; i++) {
      const returned_cummulative_array = {
        tohundred: sum(sorted_percent, i),
        type: percentage[i].type,
      };
      Cummulative_percent_Array.push(returned_cummulative_array);
    }
  };
  Cummulative_percent();
  const Real_Gradient_color: string[] = [];
  const Gradient_color = () => {
    for (let i = 0; i < Cummulative_percent_Array.length; i++) {
      let j, f;
      i === 0 ? (j = 0) : (j = Cummulative_percent_Array[i - 1].tohundred);
      i === Cummulative_percent_Array.length - 1
        ? (f = `${Cummulative_percent_Array[i].tohundred}%`)
        : (f = `${Cummulative_percent_Array[i].tohundred}%,`);
      const returned_Gradient_color = `${
        Category_colors[Cummulative_percent_Array[i].type]
      } ${j}% ${f}`;
      Real_Gradient_color.push(returned_Gradient_color);
    }
  };
  Gradient_color();
  const joined_Real_Gradient_color = `${Real_Gradient_color.join(" ")}`;
  const Original_Gradient_color = `linear-gradient(90deg,${joined_Real_Gradient_color})`;
  const top4 = sorted_percent.slice(0, 4);
  let f;
  result.length < 10 ? (f = 0) : (f = result.length - 10);
  const data = result.slice(f, result.length);
  const icons = useIcons();
  const alimi: any[] = [];
  top4.map((all) => {
    return icons.map(
      (icon) => all.type === icon.title && alimi.push({ ...icon, ...all })
    );
  });

  return (
    <section className={sidebar ? "dashboard-body overflow" : "dashboard-body"}>
      <>
        {" "}
        {sidebar ? (
          <FaTimes
            className="dash-top1"
            style={{ color: "#fff" }}
            onClick={() => setSidebar(!sidebar)}
          />
        ) : (
          <GiHamburgerMenu
            className="dash-top1"
            onClick={() => setSidebar(!sidebar)}
          />
        )}
        <p className="user">welcome {user}</p>
        <Quote
          quote={quotes[presentQuote].quote}
          author={quotes[presentQuote].author}
        />
        <article className="total-category">
          <div className="total-card">
            <p>
              <span>
                <img
                  src="images/naira.png"
                  alt="naira symbol"
                  className="naira"
                />
                {total_Expense}
              </span>{" "}
              spent
            </p>
            <Link to="/expense">
              <button>See List</button>
            </Link>
          </div>
          <div className="line-place">
            <div
              className="line-chart"
              style={{ background: Original_Gradient_color }}
            />
            <div className="line-color">
              {percentage.map((category) => {
                return (
                  <Dash
                    name={category.type}
                    key={category.type}
                    color={Category_colors}
                    percentage={category.percenta}
                  />
                );
              })}
            </div>
          </div>
        </article>
        <Expenses data={data} type="Latest Expense" seeall />
        <div className="dash-top">
          <h3>Top Categories</h3>
          <div className="dash-top4">
            {alimi.map((category, index) => {
              return <Incategories {...category} key={index} />;
            })}
          </div>
        </div>
      </>
    </section>
  );
};

export default DashboardBody;
