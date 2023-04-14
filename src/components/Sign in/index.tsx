import React from "react";
import Register from "./Register";
import Login from "./Login";
import Back from "../../extras/Back";
import { useAppSelector } from "../../hooks";

const SignIn:React.FC = () => {
  const {signIn} = useAppSelector(state => state.all)
  return (
    <section className="grid place-content-center relative h-[100vh] min-h-[650px] big:h-auto big:min-h-[100vh]">
      <Back />
      <div className="absolute top-0 h-[60vh] w-full bg-primary -z-[1] rounded-b-[50px]" />
      {signIn ? <Login /> : <Register />}
    </section>
  );
};

export default SignIn;
