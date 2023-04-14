import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../extras/axios";
import { allActions } from "../../store/allSlice";
import { useAppDispatch } from "../../hooks";

const Register:React.FC = () => {
  const dispatch = useAppDispatch()
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
  const controlSubmit = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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

        // console.log(data);
        setMsg("submitted sucessfully");
        dispatch(allActions.setuser(data.username));

        navigate("/welcome");
      } catch (error) {
        // console.log(error);
        // console.log("unable to submit user");
        setAlert(true);
        setMsg("unable to create user. Try again later");
      }
      setloading(false);
      setForm({ fullname: "", email: "", password: "", confirmPass: "" });
    }
  };

  const handleForm = (e:React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    setForm({ ...form, [name]: value });
  };
  return (
    <article className="w-[90vw] max-w-[520px] big:max-w-[60vw]">
    {/* <form className="sign"> */}
      <form action="" className="rounded-xl p-[20px_30px_50px] bg-white text-center relative shadow-[3px_3px_20px_#aaa] sml:p-[10px_10px_40px]">
        <h3 className="font-bold text-[30px] p-5 capitalize text-[#111] big:text-4xl sml:p-4">Register</h3>
        <p className="text-sm p-3 text-center font-sans font-semibold big:text-[30px] big:p-[30px]">if you don't have an account</p>
        {msg && <p className={`text-sm p-2 text-center font-sans font-semibold big:text-[30px] big:p-[30px] ${alert ? "text-[#f00] border-2 border-solid border-[#f00]" : "text-[#008000] border-2 border-solid border-[#008000]"}`}>{msg}</p>}
        <input className="block w-full h-10 rounded-[30px] m-[20px_auto] text-sm p-[10px_0_10px_5px] border-2 border-solid border-[#aaa] big:block big:w-[95%] big:h-[70px] big:m-[60px_auto] text-[30px] pl-[10px] sml:h-7 sml:text-sml sml:border"
          type="email"
          name="fullname"
          id="fullname"
          value={form.fullname}
          placeholder="Full Name"
          onChange={(e)=>handleForm(e)}
          required
        />
          <input className="block w-full h-10 rounded-[30px] m-[20px_auto] text-sm p-[10px_0_10px_5px] border-2 border-solid border-[#aaa] big:block big:w-[95%] big:h-[70px] big:m-[60px_auto] text-[30px] pl-[10px] sml:h-7 sml:text-sml sml:border"
          type="email"
          value={form.email}
          name="email"
          id="email"
          placeholder="Email Address"
          onChange={(e)=>handleForm(e)}
          required
        />
          <input className="block w-full h-10 rounded-[30px] m-[20px_auto] text-sm p-[10px_0_10px_5px] border-2 border-solid border-[#aaa] big:block big:w-[95%] big:h-[70px] big:m-[60px_auto] text-[30px] pl-[10px] sml:h-7 sml:text-sml sml:border"
          type="password"
          value={form.password}
          id="password"
          name="password"
          placeholder="Password"
          onChange={(e)=>handleForm(e)}
          required
        />
          <input className="block w-full h-10 rounded-[30px] m-[20px_auto] text-sm p-[10px_0_10px_5px] border-2 border-solid border-[#aaa] big:block big:w-[95%] big:h-[70px] big:m-[60px_auto] text-[30px] pl-[10px] sml:h-7 sml:text-sml sml:border"
          type="password"
          value={form.confirmPass}
          id="comfirmPass"
          name="confirmPass"
          placeholder="Confirm Password"
          onChange={(e)=>handleForm(e)}
          required
        />
        <button className="bg-primary text-white py-4 px-10 text-[1.2rem] font-bold rounded-[30px] absolute -bottom-[20px] left-[50%] -translate-x-[50%] w-[200px] cursor-pointer disabled:bg-[#a091be] big:p-[30px_80px] big:text-[3rem] big:w-auto big:-bottom-[60px] big:rounded-[50px]" onClick={(e)=>controlSubmit(e)} disabled={loading}>
          Register
        </button>
      </form>
      <footer className="text-base font-extrabold text-center mt-[50px] capitalize">
        already a user? <span onClick={() => dispatch(allActions.setSignIn(true))} className="text-[#ffa500] font-bold underline cursor-pointer big:text-4xl big:mt-20">sign in </span>
      </footer>
    </article>
  );
};

export default Register;
