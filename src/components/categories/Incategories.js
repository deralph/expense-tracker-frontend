import React from "react";
import "./categories.css";
import { Link } from "react-router-dom";

const Incategories = ({ title, Icon, color, percent, percenta }) => {
  const Red = Icon;
  return (
    <div className="cate">
      <Link to="/expense-form">
        <Red className="caticon" style={{ background: `${color}` }} />
        <p>{title}</p>
        {percent && (
          <>
            <p style={{ display: "flex", alignItems: "center" }}>
              price :{" "}
              <img src="/images/naira.png" alt="naira" className="naira" />
              <span style={{ color: "#0033ff" }}> {percent}</span>
            </p>
            <p>
              percent : <span style={{ color: "#0033ff" }}> {percenta}%</span>
            </p>
          </>
        )}
      </Link>
    </div>
  );
};

export default Incategories;
