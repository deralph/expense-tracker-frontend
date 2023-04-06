import React from "react";
import "./sidebar.css";
import { RiEqualizerLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useGlobal } from "../../context/Context";
import Logo from "../../home/logo/Logo";
// import Logout from "../Logout";
import { logout } from "../../../extras/functions";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";

interface props{
  category:string[]
  month:any[]
  pro:string
  setPro:React.Dispatch<React.SetStateAction<string>>
  handleCategory:(opt: string, type: string) => void
  max:string|number
  handleMonth:(month: string, no: string | number) => void
}

const Sidebar:React.FC<props> = ({
  category,
  month,
  pro,
  setPro,
  handleCategory,
  max,
  handleMonth,
}) => {
  const { sidebar, setuser } = useGlobal();
  const navigate = useNavigate();

  const subject =
    "Hi \n I am ________ \n I am writting to you in subject to the website https://expense-tracked.netlify.app \n I would love to seek financial advice towards ______, \n Thanks";
  return (
    <aside className={sidebar ? "sidebar show" : "sidebar"}>
      {" "}
      {!category ? (
        <>
          <ul className="side-basic">
            <div style={{ marginBottom: "30px" }} className="">
            <Logo  />
            </div>
            <Link to="/categories">
              {" "}
              <li>View Categories</li>
            </Link>
            <Link to="/expense">
              <li>All Expenses</li>
            </Link>
            <Link to="/expense-form">
              <li>Add Expenses</li>
            </Link>
            <Link to="/consultation">
              <li>Book Consultation</li>
            </Link>
            <a href={`mailto:deralph73@gmail.com?subject=${subject}`}>
              <li>Seek Financial Advice</li>
            </a>
          </ul>
          <p className="out" onClick={() => logout(navigate, setuser)}>
            Log Out
            <MdLogout style={{ marginLeft: "10px" }} />
          </p>
        </>
      ) : (
        <>
        <div  className="side-logo">
          <Logo  />
        </div>
          <h3>
            <RiEqualizerLine style={{ margin: "20px 10px 0 20px" }} />
            filter by:
          </h3>
          <ul className="side-ul">
            <p>By category</p>
            {category.map((option, index) => {
              return (
                <li
                  onClick={() => handleCategory(option, "category")}
                  key={index}
                >
                  {option}
                </li>
              );
            })}
          </ul>
          <ul className="side-ul">
            <p>By month</p>
            {month.map((option, index) => {
              // console.log(option);
              const month = option.month || option;
              const no = option.monthInFigure || 0;
              return (
                <li onClick={() => handleMonth(month, no)} key={index}>
                  {month}
                </li>
              );
            })}
          </ul>
          <label htmlFor="range">By price</label>
          <input
            type="range"
            name="price"
            id="price"
            min="0"
            max={Number(max) - 1}
            value={pro}
            onChange={(e) => setPro(e.target.value)}
            style={{ width: "100%" }}
          />
          <p className="range-p">{pro}</p>
          <p className="out" onClick={() => logout(navigate, setuser)}>
            Log Out
            <MdLogout style={{ marginLeft: "10px" }} />
          </p>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
