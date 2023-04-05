import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import "./home/footer/footer.css";
const Foot = () => {
  return (
    <div className="dev-cont">
      <p>Developers Contact</p>
      <ul>
        <li>
          {" "}
          <a
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
          <a
            href="https://twitter.com/DeRalph15?t=KLXOXWSRgyfr6a98aA_WSQ&s=09"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <FaTwitterSquare />
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/message/QHR4IAXUJC55J1"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <FaWhatsappSquare />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/iam_raphael15/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <FaInstagramSquare />
          </a>
        </li>
        <li>
          <a
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
