import React from "react";
import "./sidebar.css";
import { RiEqualizerLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useGlobal } from "../../context/Context";
import Logo from "../../home/logo/Logo";
import { useState } from "react";
import Logout from "../Logout";

const Sidebar = ({
  category,
  month,
  pro,
  setPro,
  handleCategory,
  max,
  handleMonth,
}) => {
  const { sidebar } = useGlobal();
  const [msg, setmsg] = useState();
  const subject =
    "Hi \n I am ________ \n I am writting to you in subject to the website https://expense-tracked.netlify.app \n I would love to seek financial advice towards ______, \n Thanks";
  return (
    <aside className={sidebar ? "sidebar show" : "sidebar"}>
      {" "}
      {!category ? (
        <>
          <ul className="side-basic">
            <Logo show={true} style={{ marginBottom: "30px" }} />
            <Link to="/categories">
              {" "}
              <li>View Categories</li>
            </Link>
            <Link to="/expense">
              <li>All Expenses</li>
            </Link>
            <Link to="/expense-form">
              <li>Add Expenses</li>
            </Link>
            <Link to="/consultation">
              <li>Book Consultation</li>
            </Link>
            <a href={`mailto:deralph73@gmail.com?subject=${subject}`}>
              <li>Seek Financial Advice</li>
            </a>
          </ul>
          <Logout />
        </>
      ) : (
        <>
          <Logo show={true} className="side-logo" />
          <h3>
            <RiEqualizerLine style={{ margin: "20px 10px 0 20px" }} />
            filter by:
          </h3>
          <ul className="side-ul">
            <p>By category</p>
            {category.map((option, index) => {
              return (
                <li
                  onClick={() => handleCategory(option, "category")}
                  key={index}
                >
                  {option}
                </li>
              );
            })}
          </ul>
          <ul className="side-ul">
            <p>By month</p>
            {month.map((option, index) => {
              console.log(option);
              const month = option.month || option;
              const no = option.monthInFigure || 0;
              return (
                <li onClick={() => handleMonth(month, no)} key={index}>
                  {month}
                </li>
              );
            })}
          </ul>
          <label htmlFor="range">By price</label>
          <input
            type="range"
            name="price"
            id="price"
            min="0"
            max={max - 1}
            value={pro}
            onChange={(e) => setPro(e.target.value)}
            style={{ width: "100%" }}
          />
          <p className="range-p">{pro}</p> <Logout />
        </>
      )}
    </aside>
  );
};

export default Sidebar;
