import React from "react";
import { Navigate } from "react-router-dom";
import ExpenseForm from "../components/expenseform";
import Loader from "../components/loading";
import Problem from "../extras/Problem";
import { useAppSelector } from "../hooks";

const ExpenseForm_:React.FC = () => {
  const {loading, user, probs} = useAppSelector(state => state.all)
  if (probs) {
    return <Problem />;
  }
  return (
    <section>
      {loading ? (
        <Loader />
      ) : user ? (
        <ExpenseForm  />
      ) : (
        <Navigate to="/signin" />
      )}
    </section>
  );
};

export default ExpenseForm_;
