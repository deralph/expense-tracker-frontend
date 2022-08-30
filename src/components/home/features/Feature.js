import React from "react";

const Feature = ({ Icon, title, desc }) => {
  return (
    <div>
      <Icon className="feat-icon" />
      <p className="feat-title">{title}</p>
      <p className="feat-note">{desc}</p>
    </div>
  );
};

export default Feature;
