import React, { useCallback, useEffect, useState } from "react";
import Expense from "../components/expenses";
import axios from "../extras/axios";
import { Navigate, useNavigate } from "react-router-dom";
import Loader from "../components/loading";
import { res } from "./dashboard";

const Expense_:React.FC = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState<res[]>([]);
  const [problem, setProblem] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetcher = useCallback(async () => {
    try {
      const { data } = await axios.get("expenses");
      setResult(data.expenses);
      setLoading(false);
    } catch (error:any) {
      // console.log(error);
      if (error.response.status === 401) navigate("/signin");
      setProblem(true);
    }
  }, [navigate]);
  useEffect(() => {
    // console.log("in useEffect");
    fetcher();
  }, [fetcher]);
  if (problem) {
    return (
      <h1 style={{ display: "grid", placeContent: "center", height: "100vh" }}>
        SOMETHING WENT WRONG
      </h1>
    );
  }
  return (
    <section>
      {loading ? (
        <Loader />
      ) : result.length < 1 ? (
        <Navigate to="/welcome" />
      ) : (
        <Expense result={result} />
      )}
    </section>
  );
};

export default Expense_;
