import React from "react";
import { Navigate } from "react-router-dom";
import { useGlobal } from "../components/context";
import SingleExpense from "../components/expenses/singleExpense";
import Loader from "../components/loading";
const SingleExpense_:React.FC = () => {
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
