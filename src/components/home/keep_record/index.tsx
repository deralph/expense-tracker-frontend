import React from "react";
import { Link } from "react-router-dom";
import { useGlobal } from "../../context";

const LetKeepRecord:React.FC = () => {
  const { setSignIn } = useGlobal();

  return (
    <section className="min-h-[300px] my-[100px] relative h-auto flex justify-evenly items-center big:m-[200px_auto] md:flex-col">
      <img
        src="/images/Alzheimer-rafiki.svg"
        alt="queried man"
        className="w-[40vw] basis-[45%] bg-[100%_100%] md:w-[300px] md:h-[300px] big:scale-[1.8]"
      />
      <div className="max-w-[500px] font-serif big:max-w-[40vw] md:basis-2/5 md:max-w-full md:px-[5%]">
        <p className="text-[30px] text-[#333] p-5 font-sans md:text-2xl big:my-[30px] big:text-[50px]">
          Don't get stuck trying to figure out how you spent your money, we have
          got you covered.
        </p>
        <p className="text-[30px] text-[#333] p-5 font-sans md:text-2xl big:my-[30px] big:text-[50px]">
        Let's keep record of your expenses for you</p>
        <div className="flex justify-evenly pb-[30px]">
          <button className="text-lg bg-[#96f] text-white p-[10px] w-[100px] cursor-pointer transition-all big:text-[50px] big:p-[20px_50px] big:w-auto hover:bg-[#73f]">
            <Link to="/signin" onClick={() => setSignIn(true)}>
              Log in
            </Link>
          </button>
          <button className="text-lg bg-[#96f] text-white p-[10px] w-[100px] cursor-pointer transition-all big:text-[50px] big:p-[20px_50px] big:w-auto hover:bg-[#73f]">
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
