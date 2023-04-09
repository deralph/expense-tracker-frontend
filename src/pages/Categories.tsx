import React from "react";
import { Navigate } from "react-router-dom";
import AllCategories from "../components/categories/Categories";
import { useGlobal } from "../components/context";
import Loader from "../components/loading";
import Problem from "../extras/Problem";

const Categories:React.FC = () => {
  const { loading, user, probs } = useGlobal();
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
