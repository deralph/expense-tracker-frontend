import React, { useCallback, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ExpenseForm from "../components/expenseform/CategoriesForm";
import Loader from "../components/loading/Loader";
import axios from "../extras/axios";
import { res } from "./dashboard";

const Edit = () => {
  const { id } = useParams();
  // console.log(id);
  const navigate = useNavigate();
  const [result, setResult] = useState<res>();
  const [problem, setProblem] = useState(false);

  const fetcher = useCallback(async () => {
    try {
      // console.log("finally in fetcher");
      const { data } = await axios.get(`expenses/${id}`);
      setResult(data.expense);
      // console.log("in");
    } catch (error: any) {
      // console.log(error);
      if (error.response.status === 401) navigate("/signin");
      setProblem(true);
    }
  }, [navigate, id]);
  useEffect(() => {
    // console.log("finally in useEffect");
    fetcher();
  }, [fetcher]);

  if (problem) {
    return (
      <h1 style={{ display: "grid", placeContent: "center", height: "100vh" }}>
        SOMETHING WENT WRONG
      </h1>
    );
  }
  // console.log(result);
  return (
    <>
      {!result ? (
        <Loader />
      ) : (
        <ExpenseForm
          _id={result._id}
          category={result.category}
          price={result.price}
          productName={result.productName}
          productNo={result.productNo}
          date={result.date}
          description={result.description}
        />
      )}
      ;
    </>
  );
};
export default Edit;
