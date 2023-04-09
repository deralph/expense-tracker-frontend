import React, { useState } from "react";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "../../extras/axios";
import { useGlobal } from "../context";

const Logout:React.FC = () => {
  const navigate = useNavigate();
  const [problem, setProblem] = useState(false);
  // const { setuser } = useGlobal();

  const logout = async () => {
    try {
      await axios.get("auth/logout");
      // console.log(data);
      // setuser("");
      navigate("/signin");
    } catch (error) {
      // console.log(error);
      setProblem(true);
    }
  };
  if (problem) {
    return (
      <h1 className="grid place-content-center h-[100vh] w-[100vw]">
        {" "}
        SOMETHING WENT WRONG
      </h1>
    );
  }
  return (
    <p className="py-5 px-4 text-lg font-medium text-[#ddd] font-sans sticky flex items-center cursor-pointer hover:text-[#bbb] hover:underline  big:text-4xl big:p-5" onClick={() => logout()}>
      Log Out
      <MdLogout className="ml-[10px]" />
    </p>
  );
};

export default Logout;
