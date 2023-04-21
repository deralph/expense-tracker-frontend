import React from "react";
import { RiEqualizerLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Logo from "../../home/logo";
import { logout } from "../../../extras/functions";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { allActions } from "../../../store/allSlice";
import { FaTimes } from "react-icons/fa";

interface props {
  category?: string[]
  month?: any[]
  pro?: string
  setPro?: React.Dispatch<React.SetStateAction<string>>
  handleCategory?: (opt: string, type: string) => void
  max?: string | number
  handleMonth?: (month: string, no: string | number) => void
}

const Sidebar: React.FC<props> = ({
  category,
  month,
  pro,
  setPro,
  handleCategory,
  max,
  handleMonth,
}) => {
  const { sidebar } = useAppSelector(state => state.all)
  const dispatch = useAppDispatch()
  const navigate = useNavigate();

  const subject =
    "Hi \n I am ________ \n I am writting to you in subject to the website https://expense-tracked.netlify.app \n I would love to seek financial advice towards ______, \n Thanks";
  return (
    // <aside className={`sidebar ${sidebar &&'show'}`}>
    <aside className={`min-w-[250px] hide bg-[#93f] min-h-[100vh] h-auto p-5 fixed w-[20vw] left-0 top-0 bottom-0 block transition-all big:w-[25vw] md:-left-[120%] z-[100] overflow-y-scroll ${sidebar && ' md:left-0 transition-all'}`}>
      {" "}
      <FaTimes
        className="hidden md:block transition-all text-[30px] left-5 p-[6px] sm:text-2xl sm:p-1 sm:left-[10px]"
        style={{ color: "#fff" }}
        onClick={() => dispatch(allActions.setSidebar(!sidebar))}
      />

      {!category ? (
        <>
          <ul className="mt-[50px] overflow-scroll">
            <div className="mb-[30px]">
              <Logo />
            </div>
            <Link to="/categories">
              {" "}
              <li className="py-3 px-4 text-lg font-medium text-[#ddd] font-sans big:text-4xl big:p-5 big:mt-[50px]" >View Categories</li>
            </Link>
            <Link to="/expense">
              <li className="py-3 px-4 text-lg font-medium text-[#ddd] font-sans big:text-4xl big:p-5 big:mt-[50px]" >All Expenses</li>
            </Link>
            <Link to="/expense-form">
              <li className="py-3 px-4 text-lg font-medium text-[#ddd] font-sans big:text-4xl big:p-5 big:mt-[50px]" >Add Expenses</li>
            </Link>
            <Link to="/consultation">
              <li className="py-3 px-4 text-lg font-medium text-[#ddd] font-sans big:text-4xl big:p-5 big:mt-[50px]" >Book Consultation</li>
            </Link>
            <Link to="/chatroom">
              <li className="py-3 px-4 text-lg font-medium text-[#ddd] font-sans big:text-4xl big:p-5 big:mt-[50px]" >Chatroom</li>
            </Link>
            <a href={`mailto:deralph73@gmail.com?subject=${subject}`}>
              <li className="py-3 px-4 text-lg font-medium text-[#ddd] font-sans big:text-4xl big:p-5 big:mt-[50px]" >Seek Financial Advice</li>
            </a>
          </ul>
          <p className="py-3 px-4 text-lg font-medium text-[#ddd] font-sans sticky flex items-center cursor-pointer hover:text-[#bbb] hover:underline  big:text-4xl big:p-5" onClick={() => {
            dispatch(allActions.setuser(''))
            logout(navigate)
          }}>
            Log Out
            <MdLogout className="ml-[10px]" />
          </p>
        </>
      ) : (
        <>
          <div className="pb-[100px]">
            <Logo />
          </div>
          <h3 className="py-3 px-4 text-lg font-medium text-[#ddd] font-sans text-center p-1 big:text--[50px] mt-[50px]">
            <RiEqualizerLine className="pt-5 pr-[10px] pl-5" />
            filter by:
          </h3>
          {/* side ul */}
          <ul className="py-3 px-4 text-lg font-medium text-[#ddd] font-sans big:text-4xl big:p-5 big:mt-[50px] my-1" >
            <p>By category</p>
            {category.map((option, index) => {
              return (
                <li
                  className="cursor-pointer text-[#aaa] font-sans p-1 font-semibold big:text-4xl big:p-5"
                  onClick={() => handleCategory!(option, "category")}
                  key={index}
                >
                  {option}
                </li>
              );
            })}
          </ul>
          <ul className="py-3 px-4 text-lg font-medium text-[#ddd] font-sans big:text-4xl big:p-5 big:mt-[50px] my-1">
            <p className="text-[#ddd] font-sans font-semibold py-[10px] px-4 big:text-4xl big:p-5">By month</p>
            {month!.map((option, index) => {
              // console.log(option);
              const month = option.month || option;
              const no = option.monthInFigure || 0;
              return (
                <li className="text-[#aaa] font-sans p-1 font-semibold" onClick={() => handleMonth!(month, no)} key={index}>
                  {month}
                </li>
              );
            })}
          </ul>
          <label className="text-[#ddd] font-sans font-semibold py-[10px] px-4 big:text-4xl big:p-5" htmlFor="range">By price</label>
          <input
            type="range"
            name="price"
            id="price"
            min="0"
            max={Number(max) - 1}
            value={pro}
            onChange={(e) => setPro!(e.target.value)}
            style={{ width: "100%" }}
            className="py-1"
          />
          <p className="text-[#aaa] p-1 font-sans font-semibold  big:text-4xl big:p-5">{pro}</p>
          <p className="py-3 px-4 text-lg font-medium text-[#ddd] font-sans sticky flex items-center cursor-pointer hover:text-[#bbb] hover:underline  big:text-4xl big:p-5" onClick={() => {
            dispatch(allActions.setuser(''))
            logout(navigate)
          }}>
            Log Out
            <MdLogout className="ml-[10px]" />
          </p>
        </>
      )}
    </aside>
  );
};

export default Sidebar;

