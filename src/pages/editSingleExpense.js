import React, { useCallback, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ExpenseForm from "../components/expenseform/CategoriesForm";
import Loader from "../components/loading/Loader";
import axios from "../extras/axios";

const Edit = () => {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const [result, setResult] = useState();
  const [loading, setloading] = useState(true);
  const [problem, setProblem] = useState();

  const fetcher = useCallback(async () => {
    try {
      console.log("finally in fetcher");
      const { data } = await axios.get(`expenses/${id}`);
      setResult(data.expense);
      console.log("in");
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) navigate("/signin");
      setloading(false);
      setProblem(true);
    }
  }, [navigate, id]);
  useEffect(() => {
    console.log("finally in useEffect");
    setloading(true);
    fetcher();
    setloading(false);
  }, [fetcher]);

  if (problem) {
    return (
      <h1 style={{ display: "grid", placeContent: "center", height: "100vh" }}>
        SOMETHING WENT WRONG
      </h1>
    );
  }
  console.log(result);
  return <>{!result ? <Loader /> : <ExpenseForm {...result} />};</>;
};
export default Edit;
