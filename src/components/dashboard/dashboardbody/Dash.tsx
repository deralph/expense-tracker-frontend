import React from "react";
import "./dashboardBody.css";

interface props {
  color: object|any;
  name: string;
  percentage: string;
}

const Dash = ({ color, name, percentage }: props) => {
  return (
    <div className="dash">
      <div className="line-box" style={{ background: color[name] }} />
      <p>{name}</p>
      <p className="percent">{`${percentage}%`}</p>
    </div>
  );
};

export default Dash;
