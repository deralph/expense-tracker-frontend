import React from "react";
import "./dashboardBody.css";

const Dash = ({ color, name, percentage }) => {
  return (
    <div className="dash">
      <div className="line-box" style={{ background: color[name] }} />
      <p>{name}</p>
      <p className="percent">{`${percentage}%`}</p>
    </div>
  );
};

export default Dash;
