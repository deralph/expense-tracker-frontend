import React from "react";

const Footer:React.FC = () => {
  return (
    <footer className="p-[50px_5%] font-sans big:text-4xl">
      <div className="flex justify-between items-center">
        <h3 className="sm:text-lg">ExpenseTracked</h3>
        <ul className="inline-flex p-5">
          <li className="p-[10px] text-xl capitalize sm:text-sm sm:p-1 big:text-4xl">
            {" "}
            <a  href="#about">about us</a>
          </li>
          <li className="p-[10px] text-xl capitalize sm:text-sm sm:p-1 big:text-4xl">
            <a  href="#contact">contact us</a>
          </li>
        </ul>
      </div>
      <p className="text-center p-5 w-full border-t-2 border-t-[black] border-solid">copyright &copy; ExpenseTracked {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
