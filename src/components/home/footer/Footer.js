import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="foot">
        <h3>ExpenseTracked</h3>
        <ul>
          <li>
            {" "}
            <a href="#about">about us</a>
          </li>
          <li>
            <a href="#contact">contact us</a>
          </li>
        </ul>
      </div>
      <p>copyright &copy; ExpenseTracked 2020</p>
    </footer>
  );
};

export default Footer;
