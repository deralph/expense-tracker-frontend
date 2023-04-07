import React from "react";
import "./body.css";
import { Link } from "react-router-dom";
const Body:React.FC = () => {
  return (
    <header className="Body">
      <article className="w-[100vw] bg-cover h-auto bg-center article big:grid big:place-content-center big:h-[80vh] big:min-h-auto">
        <div className="w-[90%] max-w-[700px] min-w-[300px] font-sans p-[20vh_50px_0_100px] big:w-[60vh] big:h-[60vh] big:max-w-[100vw] slg:w-[500px] slg:p-[150px_0_50px_100px] sml:w-[250px] sml:pr-5">
          <h2 className="text-[6rem] capitalize big:text-[20rem] big:leading-[auto] slg:text-[70px] slg:leading-[4em] sml:text-4xl">
            {" "}
            handle your <span className="text-[#96f]">money</span> wisely
          </h2>
          <p className="my-5 text-2xl big:text-[50px] m-[50px_0] sml:text-base">
            An online service with which helps you to keep track and record of
            how your money is being spent
          </p>
          <button className="text-white bg-[#96f] border-[#96f] border-solid border-2 p-4 w-[200px] rounded-[30px] font-semibold text-xl cursor-pointer hover:text-black hover:bg-transparent big:text-[60px] big:p-[20px_80px] big:w-auto big:m-[50px_auto">
            <Link to="/signin">Get Started</Link>
          </button>
        </div>
      </article>
    </header>
  );
};

export default Body;
