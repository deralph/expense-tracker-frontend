import React, { useCallback, useEffect, useState } from "react";
import { useGlobal } from "../context/Context";
import Sidebar from "../dashboard/Sidebar/Sidebar";
import Expenses from "./Expenses";
import { sets, getMonth } from "../../extras/functions";
import "../categories/categories.css";
import Back from "../../extras/Back";
import { RiEqualizerLine } from "react-icons/ri";
// import useFetch from "../../extras/useFetch";
import "../dashboard/dashboardbody/dashboardBody.css";

import { reduceFunction } from "../../extras/functions";

const AllCategories = ({ result }) => {
  const { sidebar, setSidebar } = useGlobal();
  const [pro, setPro] = useState("");

  const [datas, setDatas] = useState(result);
  useEffect(
    () => setDatas(result.filter((type) => type.price * type.productNo > pro)),
    [pro, result]
  );

  const max = result
    .map(({ price, productNo }) => price * productNo)
    .reduce((then, now) => {
      return now > then ? now : then;
    }, 0);

  const monthOptions = ["all", ...getMonth(result)];
  const options = ["all", ...sets(result, "category")];

  const handleCategory = (opt, type) => {
    if (opt === "all") {
      setDatas(result);
    } else {
      setDatas(result.filter((sold) => sold[type] === opt));
    }
  };
  const handleMonth = (month, no) => {
    if (month === "all") {
      setDatas(result);
    } else {
      const data = result.filter((res) => {
        const num = res.date.split("-")[1];
        return num === no;
      });
      console.log(data);
      setDatas(data);
    }
  };

  return (
    <>
      <Back />
      <RiEqualizerLine
        className="dash-top1"
        onClick={() => setSidebar(!sidebar)}
        style={{ color: sidebar ? "#fff" : "#000" }}
      />
      <div className="dashboard">
        {" "}
        <Sidebar
          category={options}
          month={monthOptions}
          pro={pro}
          setPro={setPro}
          handleCategory={handleCategory}
          max={max}
          handleMonth={handleMonth}
        />
        <div className={sidebar ? "all-side overflow" : "all-side"}>
          <p className="total-p">Total : {reduceFunction(datas)}</p>
          <Expenses data={datas} type=" Expenses" />{" "}
        </div>
      </div>
    </>
  );
};

export default AllCategories;
