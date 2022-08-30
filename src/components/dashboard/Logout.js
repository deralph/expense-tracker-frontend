import React, { useState } from "react";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "../../extras/axios";

const Logout = () => {
  const navigate = useNavigate();
  const [problem, setProblem] = useState();

  const logout = async () => {
    try {
      const { data } = await axios.get("auth/logout");
      console.log(data);
      navigate("/signin");
    } catch (error) {
      console.log(error);
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
        SOMETHING WENT WRONG
      </h1>
    );
  }
  return (
    <p className="out" onClick={logout}>
      Log Out
      <MdLogout style={{ marginLeft: "10px" }} />
    </p>
  );
};

export default Logout;
