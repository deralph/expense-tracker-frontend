import React from "react";
import "./body.css";
import { Link } from "react-router-dom";
const Body = () => {
  return (
    <header className="Body">
      <article>
        <div>
          <h2>
            {" "}
            handle your <span>money</span> wisely
          </h2>
          <p>
            An online service with which helps you to keep track and record of
            how your money is being spent
          </p>
          <button>
            <Link to="/signin">get started</Link>
          </button>
        </div>
      </article>
    </header>
  );
};

export default Body;
