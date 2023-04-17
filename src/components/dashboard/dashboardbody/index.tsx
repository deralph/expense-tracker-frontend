import React, { useState, useEffect, useCallback } from "react";
import Expenses from "../../expenses/Expenses";
import Dash from "./Dash";
import quotes from "../../../extras/quotesDB";
import { sets, Category_colors } from "../../../extras/functions";
import useIcons from "../../../extras/useicon";
import Quote from "./Quote";
import Incategories from "../../categories/Incategories";
import { Link, useNavigate } from "react-router-dom";
import { reduceFunction } from "../../../extras/functions";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { allActions } from "../../../store/allSlice";
import axios from "../../../extras/axios";

interface props {
  result: Array<any>;
  user: string;
}

const DashboardBody: React.FC<props> = ({ result, user }) => {
  const {sidebar} = useAppSelector(state => state.all)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
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
  const { userId } = useAppSelector(state => state.all)

  const deleteAccount=async()=>{
  try {
    await axios.get("auth/logout")
    await axios.delete(`auth/delete/${userId}`)
    dispatch(allActions.setuser(''))
    navigate('/signin')
} catch (error) {
    console.log(error)
     }
  }

  return (
    
    // <section className={sidebar ? "dashboard-body overflow" : "dashboard-body"}>
    <section className={`sml:p-0 ml-[20vw] md:ml-0 mb-10 ${sidebar &&'overflow-hidden max-h-[100vh]'}`}>
      <>
        {" "}
        {sidebar ? (
          <FaTimes
            className="hidden md:block fixed top-[10px] z-[110] transition-all text-[30px] left-5 p-[6px] sm:text-base sm:p-1 sm:left-[10px]"
            style={{ color: "#fff" }}
            onClick={() => dispatch(allActions.setSidebar(!sidebar))}
            />
            ) : (
              <GiHamburgerMenu
              className="hidden md:block fixed top-[10px] z-[110] transition-all text-[30px] left-5 p-[6px] sm:text-base sm:p-1 sm:left-[10px]"
              onClick={() => dispatch(allActions.setSidebar(!sidebar))}
          />
        )}
        <p className="text-[#f00] font-bold absolute top-1 right-1 text-sm border border-solid border-[#f00] p-2 sm:p-1 sm:text-xs" onClick={()=>deleteAccount()}>Delete Account</p>
        <p className="text-center text-[30px] capitalize font-bold big:text-[50px] slg:mt-30 slg:text-xl sm:text-base mt-12">welcome {user}</p>
        <Quote
          quote={quotes[presentQuote].quote}
          author={quotes[presentQuote].author}
        />
        <article className="flex justify-evenly items-start slg:flex-col slg:items-center slg:w-full">
          {/* <div className="total-card"> */}
          <div className="p-6 rounded w-auto flex items-center justify-between h-[150px] border-solid border-4 border-primary big:p-10 big:w-[20vw] big:h-auto lg:p-1">
            <p className="font-medium text-xl big:text-[50px]">
              <span className="tracking-[3px] text-xl pb-3 flex items-center font-semibold big:text-3xl">
                <img
                  src="images/naira.png"
                  alt="naira symbol"
                  className=" w-8 object-contain"
                />
                {total_Expense}
              </span>{" "}
              spent
            </p>
            <Link to="/expense">
              <button className="bg-white p-1 rounded-[20px] font-medium w-24 text-base border-2 border-solid border-primary transition-all hover:bg-primary hover:text-white big:text-4xl big:py-5 big:px-12 big:w-auto ">See List</button>
            </Link>
          </div>
          <div className="line-place">
            <div
              className={`h-3 w-[300px] rounded my-5 big:w-[22vw] big:rounded-[60px] big:h-[30px] sm:w-[200px]`} style={{background:`${Original_Gradient_color}`}}
            />
            {/* <div className="line-color"> */}
            <div className="block w-full">
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
          <h3 className="text-center relative text-[30px] pt-5 pb-[10px] big:text-6xl">Top Categories</h3>
          <div className="flex justify-evenly items-center sml:flex sml:flex-wrap mt-8">
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
