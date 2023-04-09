import React, { useState, useCallback, useEffect } from "react";
import Dashboard from "../components/dashboard";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "../extras/axios";
import Loader from "../components/loading";

export interface res{
  _id?:string
productName?:string
category?:string
date?:string
description?:string
price?:string|number
productNo?:string|number
createdBy?:string
}

const Dashboard_:React.FC= () => {
  const navigate = useNavigate();
  const [result, setResult] = useState<res[]>([]);
  const [user, setuser] = useState('');
  const [problem, setProblem] = useState(false);

  const fetcher = useCallback(async () => {
    try {
      const { data } = await axios.get("expenses");
      setResult(data.expenses);
      setuser(data.user);
      // console.log("in");
    } catch (error:any) {
      // console.log(error);
      if (error.response.status === 401) navigate("/signin");
      setProblem(true);
    }
  }, [navigate]);
  useEffect(() => {
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
      {result ? (
        result.length < 1 ? (
          <Navigate to="/welcome" />
        ) : (
          <Dashboard result={result} user={user} />
        )
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default Dashboard_;
