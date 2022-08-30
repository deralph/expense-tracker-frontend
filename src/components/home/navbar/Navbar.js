import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useGlobal } from "../../context/Context";
import Logo from "../logo/Logo";

const Navbar = () => {
  const { setSignIn } = useGlobal();
  // const [show, handleShow] = useState(false);
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 100) {
  //       handleShow(true);
  //     } else {
  //       handleShow(false);
  //     }
  //   });
  // });
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
