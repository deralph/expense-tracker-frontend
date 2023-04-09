import React from "react";
import { Navigate } from "react-router-dom";
import { useGlobal } from "../components/context";
import ExpenseForm from "../components/expenseform";
import Loader from "../components/loading";
import Problem from "../extras/Problem";
const ExpenseForm_:React.FC = () => {
  const { loading, user, probs } = useGlobal();
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
