import React from "react";
import "./record.css";
import { Link } from "react-router-dom";
import { useGlobal } from "../../context/Context";

const LetKeepRecord = () => {
  const { setSignIn } = useGlobal();

  return (
    <section className="record">
      <img
        src="/images/Alzheimer-rafiki.svg"
        alt="queried man"
        className="about-img"
      />
      <div className="record-cont">
        <p>
          Don't get stuck trying to figure out how you spent your money, we have
          got you covered.
        </p>
        <p>Let's keep record of your expenses for you</p>
        <div className="btn-cont">
          <button>
            <Link to="/signin" onClick={() => setSignIn(true)}>
              Log in
            </Link>
          </button>
          <button>
            <Link to="/signin" onClick={() => setSignIn(false)}>
              Register
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LetKeepRecord;
