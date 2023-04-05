import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useGlobal } from "../../context/Context";
import Logo from "../logo/Logo";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  const { setSignIn } = useGlobal();
  return (
    <nav className="nav">
      <Logo />
      <ul className="links">
        <li>
          <a
            href="#about"
            style={{ color: "white" }}
          >
            About
          </a>
        </li>
        <li>
          {" "}
          <a
            href="#features"
            style={{ color: "white" }}
          >
            Features
          </a>
        </li>
        <li>
          {" "}
          <a
            href="#testimonial"
            style={{ color: "white" }}
          >
            testimonials
          </a>
        </li>
        <li>
          {" "}
          <a
            href="#contact"
            style={{ color: "white" }}
          >
            contact
          </a>
        </li>
      </ul>
      <div className="user-con">

        <FaUserAlt className="user" style={{ fontSize: '15px' }} />
        <ul className="auth">
          <li>
            {" "}
            <Link
              to="/signin"
              onClick={() => setSignIn(false)}
              style={{ color: "#f1f1f1", fontSize: '15px' }}
            >
              Login
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/signin"
              onClick={() => setSignIn(false)}
              style={{ color: "#f1f1f1", fontSize: '15px' }}
            >
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
