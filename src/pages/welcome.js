import React from "react";
import { useGlobal } from "../components/context/Context";
import Welcome from "../components/welcome/Welcome";
import Loader from "../components/loading/Loader";
import { Navigate } from "react-router-dom";
import Problem from "../extras/Problem";

const Welcome_ = () => {
  const { loading, user, probs } = useGlobal();
  if (probs) {
    return <Problem />;
  }
  return (
    <section>
      {loading ? <Loader /> : user ? <Welcome /> : <Navigate to="/signin" />}
    </section>
  );
};

export default Welcome_;
