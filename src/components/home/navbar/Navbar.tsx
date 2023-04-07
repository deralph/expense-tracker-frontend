import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useGlobal } from "../../context/Context";
import Logo from "../logo/Logo";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  const { setSignIn } = useGlobal();
  return (
    <nav className="p-[10px_5%] text-[#333] flex justify-between items-center font-sans fixed top-0 w-full bg-[#96f] z-[100] transition-all big:p-[40px_8%]">
      <Logo />
      <ul className="inline-flex sml:hidden">
        <li>
          <a className="text-lg p-[10px] cursor-pointer big:text-4xl big:p-5 sm:text-xs sm:p-1 "
            href="#about"
            style={{ color: "white" }}
          >
            About
          </a>
        </li>
        <li>
          <a className="text-lg p-[10px] cursor-pointer big:text-4xl big:p-5 sm:text-xs sm:p-1 "
            href="#features"
            style={{ color: "white" }}
          >
            Features
          </a>
        </li>
        <li>
          <a className="text-lg p-[10px] cursor-pointer big:text-4xl big:p-5 sm:text-xs sm:p-1 "
            href="#testimonial"
            style={{ color: "white" }}
          >
            testimonials
          </a>
        </li>
        <li>
          <a className="text-lg p-[10px] cursor-pointer big:text-4xl big:p-5 sm:text-xs sm:p-1 "
            href="#contact"
            style={{ color: "white" }}
          >
            contact
          </a>
        </li>
      </ul>
      <div className="relative flex justify-center items-center w-10 h-10 user-con">

        <FaUserAlt className="text-white text-[5px] transition-all hover:text-[#f1f1f1] slg:absolute slg:-top-[50%] translate-y-[50%]" style={{ fontSize: '15px' }} />
        <ul className="auth absolute bg-[#5e5c5c] rounded-lg p-[10px] right-0 top-full w-[150px] transition-all">
          <li className="p-[6px] border border-solid border-[#5e5c5c80]">
            <Link
              to="/signin"
              onClick={() => setSignIn(false)}
              style={{ color: "#f1f1f1", fontSize: '15px' }}
            >
              Login
            </Link>
          </li>
          <li className="p-[6px]">
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
