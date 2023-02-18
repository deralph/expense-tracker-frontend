import React, { useState } from "react";
import "./Signin.css";
import { useGlobal } from "../context/Context";
import { useNavigate } from "react-router-dom";
import axios from "../../extras/axios";

const Login = () => {
  const { setSignIn, setuser } = useGlobal();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [alert, setAlert] = useState(false);
  const [loading, setloading] = useState(false);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const controlSubmit = async (e) => {
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
        setuser(data.username);
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
    <article className="sign-article">
      <form action="" className="sign">
        <h3>sign in</h3>
        <p>if you are registered</p>
        {msg && <p className={`alert ${alert ? "fail" : "sucess"}`}>{msg}</p>}
        <input
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={pass}
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}
        />
        <button onClick={controlSubmit} disabled={loading}>
          sign in
        </button>
      </form>
      <footer>
        not yet a user? <span onClick={() => setSignIn(false)}>register </span>
      </footer>
    </article>
  );
};

export default Login;
