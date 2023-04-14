import React from "react";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const Back:React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <BiArrowBack onClick={() => navigate(-1)} className="absolute top-4 right-4 p-2 text-white text-3xl bg-[#333] opacity-70 rounded-[50%] z-[100] big:text-6xl" />
    </div>
  );
};

export default Back;
