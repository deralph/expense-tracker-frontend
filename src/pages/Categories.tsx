import React from "react";
import { Navigate } from "react-router-dom";
import AllCategories from "../components/categories/Categories";
import Loader from "../components/loading";
import Problem from "../extras/Problem";
import { useAppSelector } from "../hooks";

const Categories:React.FC = () => {
  const {loading, user, probs} = useAppSelector(state => state.all)

  if (probs) {
    return <Problem />;
  }
  return (
    <section>
      {loading ? (
        <Loader />
      ) : user ? (
        <AllCategories />
      ) : (
        <Navigate to="/signin" />
      )}
    </section>
  );
};

export default Categories;
