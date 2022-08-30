import React from "react";
import { useGlobal } from "../components/context/Context";
import Welcome from "../components/welcome/Welcome";
import Loader from "../components/loading/Loader";
import { Navigate } from "react-router-dom";

const welcome = () => {
  const { loading, user } = useGlobal();

  return (
    <section>
      {loading ? <Loader /> : user ? <Welcome /> : <Navigate to="/signin" />}
    </section>
  );
};

export default welcome;
