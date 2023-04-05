import React, { useState } from "react";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "../../extras/axios";
import { useGlobal } from "../context/Context";

const Logout = () => {
  const navigate = useNavigate();
  const [problem, setProblem] = useState();
  // const { setuser } = useGlobal();

  const logout = async () => {
    e.preventDefault();
    try {
      const { data } = await axios.get("auth/logout");
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
      <h1
        style={{
          display: "grid",
          placeContent: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        {" "}
        SOMETHING WENT WRONG
      </h1>
    );
  }
  return (
    <p className="out" onClick={logout()}>
      Log Out
      <MdLogout style={{ marginLeft: "10px" }} />
    </p>
  );
};

export default Logout;
