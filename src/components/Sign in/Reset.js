import React, { useState } from "react";
import "./Signin.css";
import { useGlobal } from "../context/Context";

const Reset = () => {
  const { resetPassword } = useGlobal();
  const [email, setEmail] = useState("");

  const [alert, setAlert] = useState(false);
  const [loading, setloading] = useState(false);
  const [msg, setMsg] = useState("");

  const controlSubmit = async (e) => {
    e.preventDefault();
    const regex =
      /^([a-z A-Z 0-9 \._]+)@([a-z A-Z]+).([a-z A-Z]{2,6})(.[a-z]{2,6})?$/;
    if (email.trim() === "") {
      setAlert(true);
      setMsg("please enter all input");
    } else if (regex.test(email) === false) {
      setAlert(true);
      setMsg("Incorrect Email");
    } else if (email) {
      setMsg("");
      setAlert(false);
      setEmail("");
      try {
        setMsg("");
        setloading(true);
        await resetPassword(email);
        setMsg("check your mail for further instruction");
      } catch (error) {
        console.log(error.message);
        setMsg("failed to Reset");
      }
      setloading(false);
    }
  };

  return (
    <section className="signin">
      <div className="semi-bg" />
      <article className="sign-article">
        <form action="" className="sign">
          <h3>Reset password</h3>
          {msg && <p className={`alert ${alert ? "fail" : "sucess"}`}>{msg}</p>}
          <input
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <button onClick={controlSubmit} disabled={loading}>
            Reset
          </button>
        </form>
      </article>
    </section>
  );
};

export default Reset;
