import React from "react";
import Register from "./Register";
import { useGlobal } from "../context";
import Login from "./Login";
import Back from "../../extras/Back";

const SignIn:React.FC = () => {
  const { signIn } = useGlobal();
  return (
    <section className="grid place-content-center relative h-[100vh] min-h-[650px] big:h-auto big:min-h-[100vh]">
      <Back />
      <div className="sabsolute top-0 h-[60vh] w-full bg-[#96f] -z-[1] rounded-b-[50px]" />
      {signIn ? <Login /> : <Register />}
    </section>
  );
};

export default SignIn;
