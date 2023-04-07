import React, { useCallback, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MdOutlineModeEditOutline, MdDeleteForever } from "react-icons/md";
import axios from "../../extras/axios";
import "./expenses.css";
import Loader from "../loading/Loader";
import Delete from "./delete";
import Back from "../../extras/Back";
import { res } from "../../pages/dashboard";

const SingleExpense = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [del, setDelete] = useState(false);
  const [result, setResult] = useState<res|any>();
  const [problem, setProblem] = useState(false);

  const fetcher = useCallback(async () => {
    try {
      // console.log("finally in fetcher");
      const { data } = await axios.get(`expenses/${id}`);
      setResult(data.expense);
      // console.log("in");
    } catch (error:any) {
      // console.log(error);
      if (error.response.status === 401) navigate("/signin");
      setProblem(true);
    }
  }, [navigate, id]);
  useEffect(() => {
    // console.log("finally in useEffect");
    fetcher();
  }, [fetcher]);

  // console.log(result);
  const { _id, price, productName, productNo, date, description } =
    result;
  // console.log(_id, category, price, productName, productNo, date, description);

  if (problem) {
    return (
      <h1 style={{ display: "grid", placeContent: "center", height: "100vh" }}>
        SOMETHING WENT WRONG
      </h1>
    );
  }

  return (
    <div className="single-main flex justify-center flex-col w-[100vw] h-[100vh] bg-[#9966ff4d] ">
      <Back />
      <div className="flex justify-center flex-col items-center">
        {!result ? (
          <Loader />
        ) : (
          <>
            <section className="font-sans max-w-[500px] w-full bg-[#eee] border-solid border-[#96f] border-[5px]" >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "40px",
                }}
              >
                {/* <Red className="rounded-[50%] text-[50px] p-[10px] big:text-[80px] big:p-7" style={{ background: `${color}` }} /> */}
              </div>

              <p className="flex text-lg flex-wrap w-full p-[10px]">
                <span className="basis-2/5">Name : </span>{" "}
                <span>{productName || 'loading'}</span>
              </p>
              <p className="flex text-lg flex-wrap w-full p-[10px]">
                <span className="basis-2/5">Price : </span>{" "}
                <span>{price || 'loading'}</span>
              </p>
              <p className="flex text-lg flex-wrap w-full p-[10px]">
                <span className="basis-2/5">Numbar : </span>{" "}
                <span>{productNo || 'loading'}</span>
              </p>
              <p className="flex text-lg flex-wrap w-full p-[10px]">
                <span className="basis-2/5">Price : </span>{" "}
                <span>{Number(price) * Number(productNo) || 'loading'}</span>
              </p>
              {description && (
                <p className="flex text-lg flex-wrap w-full p-[10px]">
                  <span className="basis-2/5">Description : </span>{" "}
                  <span>{description || 'loading'}</span>
                </p>
              )}
              <p className="flex text-lg flex-wrap w-full p-[10px]">
                <span className="basis-2/5">Date : </span>{" "}
                <span>{(date && date.slice(0, 10)) || 'loading'}</span>
              </p>
              <p className="flex text-lg flex-wrap w-full p-[10px]">
                {/* <span className="basis-2/5">Month : </span> <span>{month}</span> */}
              </p>
            </section>
            <div className="flex items-center justify-end w-full my-5 mx-[10px] max-w-[500px]">
              <MdOutlineModeEditOutline
                className="text-4xl"
                onClick={() => navigate("edit")}
              />
              <MdDeleteForever
                className="text-4xl text-red-600"
                onClick={() => setDelete(true)}
              />
              {del && <Delete id={_id} setDelete={setDelete} />}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SingleExpense;
