import React from "react";
import { Navigate } from "react-router-dom";
import { useGlobal } from "../components/context/Context";
import SingleExpense from "../components/expenses/singleExpense";
import Loader from "../components/loading/Loader";
const SingleExpense_ = () => {
  const { loading, user } = useGlobal();
  return (
    <section>
      {loading ? (
        <Loader />
      ) : user ? (
        <SingleExpense />
      ) : (
        <Navigate to="/signin" />
      )}
    </section>
  );
};

export default SingleExpense_;
