import React from "react";
import { Navigate } from "react-router-dom";
import AllCategories from "../components/categories/Categories";
import { useGlobal } from "../components/context/Context";
import Loader from "../components/loading/Loader";

const Categories = () => {
  const { loading, user } = useGlobal();
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
