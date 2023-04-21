import React, { useEffect, useState } from "react";
import Sidebar from "../dashboard/Sidebar";
import Expenses from "./Expenses";
import { sets, getMonth } from "../../extras/functions";
import Back from "../../extras/Back";
import { reduceFunction } from "../../extras/functions";
import { res } from "../../pages/dashboard";
import { GiHamburgerMenu } from "react-icons/gi";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { allActions } from "../../store/allSlice";

interface props {
  result: res[];
}

const AllCategories: React.FC<props> = ({ result }) => {
  const { sidebar } = useAppSelector(state => state.all)
  const dispatch = useAppDispatch()
  const [pro, setPro] = useState<string>("");

  const [datas, setDatas] = useState<res[]>(result);
  useEffect(
    () =>
      setDatas(
        result.filter(
          ({ price, productNo }) =>
            Number(price) * Number(productNo) > Number(pro)
        )
      ),
    [pro, result]
  );

  const max = result
    .map(({ price, productNo }) => Number(price) * Number(productNo))
    .reduce((then, now) => {
      return now > then ? now : then;
    }, 0);

  const monthOptions = ["all", ...getMonth(result)];
  const options = ["all", ...sets(result, "category")];

  const handleCategory = (opt: string, type: string) => {
    if (opt === "all") {
      setDatas(result);
    } else {
      setDatas(result.filter((sold: any) => sold[type] === opt));
    }
  };
  const handleMonth = (month: string, no: string | number) => {
    if (month === "all") {
      setDatas(result);
    } else {
      const data = result.filter((res) => {
        const num = res.date!.split("-")[1];
        return num === no;
      });
      // console.log(data);
      setDatas(data);
    }
  };

  return (
    <>
      <Back />
      <GiHamburgerMenu
        className="hidden md:block fixed top-[10px] z-[110] transition-all text-[30px] left-5 p-[6px] bg-white sm:text-base sm:p-1 sm:left-[10px]"
        onClick={() => dispatch(allActions.setSidebar(!sidebar))}
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
        <div className={`md:ml-0 lg:ml-[30vw] ml-[20vw] mt-10 ${sidebar && 'md:overflow-hidden md:max-h-[100vh]'}`}>
          <p className="text-center text-2xl font-sans font-bold big:text-[50px]">Total : {reduceFunction(datas)}</p>
          <Expenses data={datas} type="Expenses" />{" "}
        </div>
      </div>
    </>
  );
};

export default AllCategories;
