import React from "react";
import Welcome from "../components/welcome";
import Loader from "../components/loading";
import { Navigate } from "react-router-dom";
import Problem from "../extras/Problem";
import { useAppSelector } from "../hooks";

const Welcome_:React.FC = () => {
  const {loading, user, probs} = useAppSelector(state => state.all)
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
