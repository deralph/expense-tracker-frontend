import React from "react";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const Back = () => {
  const navigate = useNavigate();
  return (
    <div>
      <BiArrowBack onClick={() => navigate(-1)} className="absolute top-4 right-4 p-4 text-[#eee] bg-[#333] opacity-70 rounded-[50%] z-[100] big:text-6xl" />
    </div>
  );
};

export default Back;
