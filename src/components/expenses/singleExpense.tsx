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
    <div className="single-main">
      <Back />
      <div className="main">
        {!result ? (
          <Loader />
        ) : (
          <>
            <section className="single-exp" >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "40px",
                }}
              >
                {/* <Red className="caticon" style={{ background: `${color}` }} /> */}
              </div>

              <p>
                <span className="single-span">Name : </span>{" "}
                <span>{productName || 'loading'}</span>
              </p>
              <p>
                <span className="single-span">Price : </span>{" "}
                <span>{price || 'loading'}</span>
              </p>
              <p>
                <span className="single-span">Numbar : </span>{" "}
                <span>{productNo || 'loading'}</span>
              </p>
              <p>
                <span className="single-span">Price : </span>{" "}
                <span>{Number(price) * Number(productNo) || 'loading'}</span>
              </p>
              {description && (
                <p>
                  <span className="single-span">Description : </span>{" "}
                  <span>{description || 'loading'}</span>
                </p>
              )}
              <p>
                <span className="single-span">Date : </span>{" "}
                <span>{(date && date.slice(0, 10)) || 'loading'}</span>
              </p>
              <p>
                {/* <span className="single-span">Month : </span> <span>{month}</span> */}
              </p>
            </section>
            <div className="icons-box">
              <MdOutlineModeEditOutline
                className="edit-icon"
                onClick={() => navigate("edit")}
              />
              <MdDeleteForever
                style={{ color: "red" }}
                className="delete-icon"
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
