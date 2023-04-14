import React from "react";
import { Link } from "react-router-dom";
const Body:React.FC = () => {
  return (
    <header className="">
      <article className="w-[100vw] bg-cover h-auto bg-center article big:grid big:place-content-center big:h-[80vh] big:min-h-auto">
        <div className="w-[90%] max-w-[700px] min-w-[300px] font-sans p-[20vh_50px_0_100px] big:w-[60vh] big:h-[60vh] big:max-w-[100vw] slg:w-[600px] slg:p-[150px_0_50px_100px] sml:w-full sml:px-[5%] sml:pr-5">
          <h2 className="text-7xl leading-[1.5em] font-mwdium capitalize big:text-[20rem] big:leading-[auto] slg:text-[70px] slg:leading-[1em] sml:text-4xl">
            {" "}
            handle your <span className="text-primary">money</span> wisely
          </h2>
          <p className="my-5 text-2xl big:text-[50px] m-[50px_0] sml:text-lg">
            An online service with which helps you to keep track and record of
            how your money is being spent
          </p>
          <button className="text-white bg-primary mb-8 border-primary border-solid border-2 p-4 w-[200px] rounded-[30px] font-semibold text-xl cursor-pointer hover:text-black hover:bg-transparent big:text-[60px] big:p-[20px_80px] big:w-auto big:m-[50px_auto">
            <Link to="/signin">Get Started</Link>
          </button>
        </div>
      </article>
    </header>
  );
};

export default Body;
