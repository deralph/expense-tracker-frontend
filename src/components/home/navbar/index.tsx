import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo";
import { FaUserAlt } from "react-icons/fa";
import { allActions } from "../../../store/allSlice";
import { useAppDispatch } from "../../../hooks";

const Navbar:React.FC = () => {
  const dispatch = useAppDispatch()
  return (
    <nav className="p-[10px_5%] text-[#333] flex justify-between items-center font-sans fixed top-0 w-full bg-primary z-[100] transition-all big:p-[40px_8%]">
      <Logo />
      <ul className="inline-flex sml:hidden">
        <li>
          <a className="text-lg p-[10px] text-white cursor-pointer big:text-4xl big:p-5 sm:text-xs sm:p-1 "
            href="#about"
          >
            About
          </a>
        </li>
        <li>
          <a className="text-lg p-[10px] text-white cursor-pointer big:text-4xl big:p-5 sm:text-xs sm:p-1 "
            href="#features"
          >
            Features
          </a>
        </li>
        <li>
          <a className="text-lg p-[10px] text-white cursor-pointer big:text-4xl big:p-5 sm:text-xs sm:p-1 "
            href="#testimonial"
          >
            testimonials
          </a>
        </li>
        <li>
          <a className="text-lg text-white p-[10px] cursor-pointer big:text-4xl big:p-5 sm:text-xs sm:p-1 "
            href="#contact"
          >
            contact
          </a>
        </li>
      </ul>
      <div className="relative flex justify-center items-center w-10 h-10 user-con">

        <FaUserAlt className="text-white text-[5px] transition-all hover:text-[#f1f1f1] " style={{ fontSize: '15px' }} />
        <ul className="auth absolute bg-[#5e5c5c] rounded-lg p-[10px] right-0 top-full w-[150px] transition-all">
          <li className="p-[6px] border border-solid border-[#5e5c5c80]">
            <Link
              to="/signin"
              onClick={() => dispatch(allActions.setSignIn(true))}
              className="text-[#f1f1f1] text-base"
            >
              Login
            </Link>
          </li>
          <li className="p-[6px]">
            <Link
              to="/signin"
              onClick={() => dispatch(allActions.setSignIn(false))}
              className="text-[#f1f1f1] text-base"
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
