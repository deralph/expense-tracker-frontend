import React from "react";
import { Navigate } from "react-router-dom";
import { useGlobal } from "../components/context/Context";
import ExpenseForm from "../components/expenseform/CategoriesForm";
import Loader from "../components/loading/Loader";
const ExpenseForm_ = () => {
  const { loading, user } = useGlobal();
  return (
    <section>
      {loading ? (
        <Loader />
      ) : user ? (
        <ExpenseForm />
      ) : (
        <Navigate to="/signin" />
      )}
    </section>
  );
};

export default ExpenseForm_;
