import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
const Foot:React.FC = () => {
  return (
    <div className="flex justify-evenly p-5">
      <p className="font-bold font-sans big:text-4xl">Developers Contact</p>
      <ul className="flex">
        <li>
          {" "}
          <a className="pl-[10px] text-xl text-[#96f] big:text-[50px]"
            href="https://www.facebook.com/profile.php?id=100007056585591"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <FaFacebookSquare />
          </a>
        </li>
        <li>
          {" "}
          <a className="pl-[10px] text-xl text-[#96f] big:text-[50px]"
            href="https://twitter.com/DeRalph15?t=KLXOXWSRgyfr6a98aA_WSQ&s=09"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <FaTwitterSquare />
          </a>
        </li>
        <li>
          <a className="pl-[10px] text-xl text-[#96f] big:text-[50px]"
            href="https://wa.me/message/QHR4IAXUJC55J1"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <FaWhatsappSquare />
          </a>
        </li>
        <li>
          <a className="pl-[10px] text-xl text-[#96f] big:text-[50px]"
            href="https://www.instagram.com/iam_raphael15/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <FaInstagramSquare />
          </a>
        </li>
        <li>
          <a className="pl-[10px] text-xl text-[#96f] big:text-[50px]"
            href="https://www.linkedin.com/in/john-raphael-81226522a"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <BsLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Foot;
