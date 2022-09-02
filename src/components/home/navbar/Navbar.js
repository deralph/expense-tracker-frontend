import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useGlobal } from "../../context/Context";
import Logo from "../logo/Logo";

const Navbar = () => {
  const { setSignIn } = useGlobal();
  return (
    <nav className="nav">
      <Logo />
      <ul>
        <li>
          <Link
            to="/signin"
            onClick={() => setSignIn(true)}
            style={{ color: "white" }}
          >
            Log in
          </Link>
        </li>
        <li>
          {" "}
          <Link
            to="/signin"
            onClick={() => setSignIn(false)}
            style={{ color: "white" }}
          >
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
