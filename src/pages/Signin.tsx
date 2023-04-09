import React from "react";
import { Navigate } from "react-router-dom";
import { useGlobal } from "../components/context";
import Loader from "../components/loading";
import SignInNow from "../components/Sign in";
import Problem from "../extras/Problem";

const SignIn:React.FC = () => {
  const { loading, user, probs } = useGlobal();
  if (probs) {
    return <Problem />;
  }
  // console.log(loading, user);
  return (
    <section>
      {loading ? (
        <Loader />
      ) : user ? (
        <Navigate to="/dashboard" />
      ) : (
        <SignInNow />
      )}
    </section>
  );
};

export default SignIn;
