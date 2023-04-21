import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../extras/axios";
import { useAppDispatch } from "../../hooks";
import { allActions } from "../../store/allSlice";

const Login: React.FC = () => {
  const dispatch = useAppDispatch()
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [alert, setAlert] = useState(false);
  const [loading, setloading] = useState(false);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const controlSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.trim() === "" || pass.trim() === "") {
      setAlert(true);
      setMsg("please enter all input");
    } else if (regex.test(email) === false) {
      setAlert(true);
      setMsg("Incorrect Email");
    } else if (email && pass) {
      try {
        setloading(true);
        const userDetails = {
          email: email,
          password: pass,
        };

        const { data } = await axios.post("auth/login", userDetails);
        // console.log(data);
        setloading(false);
        setAlert(false);

        setMsg("login sucessfull");
        setEmail("");
        setPass("");
        setEmail("");
        setPass("");
        dispatch(allActions.setuser(data.username));
        navigate("/dashboard");
      } catch (error) {
        console.log(error);

        // console.log("unable to submit user");
        setAlert(true);
        setMsg("failed to login. Try again later");
      }
      setloading(false);
    }
  };

  return (
    <article className="w-[90vw] max-w-[520px] big:max-w-[60vw]">
      <form
        action=""
        className="rounded-xl p-[20px_30px_50px] bg-white text-center relative shadow-[3px_3px_20px_#aaa] sml:p-[10px_10px_40px]"
      >
        <h3 className="font-bold text-[30px] p-5 capitalize text-[#111] big:text-4xl sml:p-4">
          Sign In
        </h3>
        <p className="text-sm p-3 text-center font-sans font-semibold big:text-[30px] big:p-[30px]">
          if you are registered
        </p>
        {msg && (
          <p
            className={`text-sm p-2 text-center font-sans font-semibold big:text-[30px] big:p-[30px] ${alert
                ? "text-[#f00] border-2 border-solid border-[#f00]"
                : "text-[#008000] border-2 border-solid border-[#008000]"
              }`}
          >
            {msg}
          </p>
        )}
        <input
          className="block w-full h-10 rounded-[30px] m-[20px_auto] text-sm p-[10px_0_10px_5px] border-2 border-solid border-[#aaa] big:block big:w-[95%] big:h-[70px] big:m-[60px_auto] text-[30px] pl-[10px] sml:h-7 sml:text-sml sml:border"
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="block w-full h-10 rounded-[30px] m-[20px_auto] text-sm p-[10px_0_10px_5px] border-2 border-solid border-[#aaa] big:block big:w-[95%] big:h-[70px] big:m-[60px_auto] text-[30px] pl-[10px] sml:h-7 sml:text-sml sml:border"
          type="password"
          value={pass}
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}
        />
        <button className="bg-primary disabled:bg-[#a091be] text-white py-4 px-10 text-[1.2rem] font-bold rounded-[30px] absolute -bottom-[20px] left-[50%] -translate-x-[50%] w-[200px] cursor-pointer big:p-[30px_80px] big:text-[3rem] big:w-auto big:-bottom-[60px] big:rounded-[50px] " onClick={(e) => controlSubmit(e)} disabled={loading}>
          sign in
        </button>
      </form>
      <footer className="text-base font-extrabold text-center mt-[50px] capitalize">
        not yet a user? <span onClick={() => dispatch(allActions.setSignIn(false))} className="text-[#ffa500] font-bold underline cursor-pointer big:text-4xl big:mt-20">register </span>
      </footer>
    </article>
  );
};

export default Login;
