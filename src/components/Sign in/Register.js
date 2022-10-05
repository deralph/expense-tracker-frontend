import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobal } from "../context/Context";
import axios from "../../extras/axios";

const Register = () => {
  const { setSignIn } = useGlobal();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPass: "",
  });
  const [alert, setAlert] = useState(false);
  const [loading, setloading] = useState(false);
  const [msg, setMsg] = useState("");
  const controlSubmit = async (e) => {
    e.preventDefault();
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (
      form.fullname.trim() === "" ||
      form.email.trim() === "" ||
      form.password.trim() === "" ||
      form.confirmPass.trim() === ""
    ) {
      setAlert(true);
      setMsg("please enter all input");
    } else if (regex.test(form.email) === false) {
      setAlert(true);
      setMsg("Incorrect Email");
    } else if (form.password !== form.confirmPass) {
      setAlert(true);
      setMsg("password do not match");
    } else if (
      form.fullname &&
      form.email &&
      form.password &&
      form.confirmPass
    ) {
      const userDetails = {
        name: form.fullname,
        email: form.email,
        password: form.password,
      };
      try {
        const { data } = await axios.post("auth/register", userDetails);

        console.log(data);
        setMsg("submitted sucessfully");
        setuser(data.username);

        navigate("/welcome");
      } catch (error) {
        console.log(error);
        console.log("unable to submit user");
        setAlert(true);
        setMsg("unable to create user");
      }
      setloading(false);
      setForm({ fullname: "", email: "", password: "", confirmPass: "" });
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    setForm({ ...form, [name]: value });
  };
  return (
    <article className="sign-article">
      <form action="" className="sign">
        <h3>register</h3>
        <p>if you don't have an account</p>
        {msg && <p className={`alert ${alert ? "fail" : "sucess"}`}>{msg}</p>}
        <input
          type="email"
          name="fullname"
          id="fullname"
          value={form.fullname}
          placeholder="Full Name"
          onChange={handleForm}
          required
        />
        <input
          type="email"
          value={form.email}
          name="email"
          id="email"
          placeholder="Email Address"
          onChange={handleForm}
          required
        />
        <input
          type="password"
          value={form.password}
          id="password"
          name="password"
          placeholder="Password"
          onChange={handleForm}
          required
        />
        <input
          type="password"
          value={form.confirmPass}
          id="comfirmPass"
          name="confirmPass"
          placeholder="Confirm Password"
          onChange={handleForm}
          required
        />
        <button onClick={controlSubmit} disabled={loading}>
          Register
        </button>
      </form>
      <footer>
        already a user? <span onClick={() => setSignIn(true)}>sign in </span>
      </footer>
    </article>
  );
};

export default Register;
