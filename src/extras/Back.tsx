import React from "react";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const Back = () => {
  const navigate = useNavigate();
  return (
    <div>
      <BiArrowBack onClick={() => navigate(-1)} className="back" />
    </div>
  );
};

export default Back;
