import React from "react";
import { Navigate } from "react-router-dom";
import SingleExpense from "../components/expenses/singleExpense";
import Loader from "../components/loading";
import { useAppSelector } from "../hooks";

const SingleExpense_:React.FC = () => {
  const {loading, user} = useAppSelector(state => state.all)
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
