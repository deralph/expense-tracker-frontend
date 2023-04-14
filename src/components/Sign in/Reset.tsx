import React, { useState } from "react";

const Reset:React.FC = () => {
  const [email, setEmail] = useState("");

  const [alert, setAlert] = useState(false);
  const [loading, setloading] = useState(false);
  const [msg, setMsg] = useState("");

  const controlSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const regex =
      /^([a-z A-Z 0-9 \._]+)@([a-z A-Z]+).([a-z A-Z]{2,6})(.[a-z]{2,6})?$/;
    if (email.trim() === "") {
      setAlert(true);
      setMsg("please enter all input");
    } else if (regex.test(email) === false) {
      setAlert(true);
      setMsg("Incorrect Email");
    } else if (email) {
      setMsg("");
      setAlert(false);
      setEmail("");
      try {
        setMsg("");
        setloading(true);
        // await resetPassword(email);
        setMsg("check your mail for further instruction");
      } catch (error) {
        // console.log(error.message);
        setMsg("failed to Reset");
      }
      setloading(false);
    }
  };

  return (
    <section className="grid place-content-center relative h-[100vh] min-h-[650px] big:h-auto big:min-h-[100vh]">
      <div className="sabsolute top-0 h-[60vh] w-full bg-primary -z-[1] rounded-b-[50px]" />
      <article className="w-[90vw] max-w-[520px] big:max-w-[60vw]">
        <form
          action=""
          className="rounded-xl p-[20px_30px_50px] bg-white text-center relative shadow-[3px_3px_20px_#aaa] sml:p-[10px_10px_40px]"
        >
          <h3 className="font-bold text-[30px] p-5 capitalize text-[#111] big:text-4xl sml:p-4">
            Reset password
          </h3>
          {msg && (
            <p
              className={`text-sm p-2 text-center font-sans font-semibold big:text-[30px] big:p-[30px] ${
                alert
                  ? "text-[#f00] border-2 border-solid border-[#f00]"
                  : "text-[#008000] border-2 border-solid border-[#008000]"
              }`}
            >
              {msg}
            </p>
          )}
          <input
            className="block w-full h-10 rounded-[30px] m-[20px_auto] text-xl p-[10px_0_10px_5px] border-2 border-solid border-[#aaa] big:block big:w-[95%] big:h-[70px] big:m-[60px_auto] text-[30px] pl-[10px] sml:h-7 sml:text-sml sml:border"
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            className="bg-primary text-white py-4 px-10 text-[1.2rem] font-bold rounded-[30px] absolute -bottom-[20px] left-[50%] -translate-x-[50%] w-[200px] cursor-pointer disabled:bg-[#a091be] big:p-[30px_80px] big:text-[3rem] big:w-auto big:-bottom-[60px] big:rounded-[50px]"
            onClick={(e) => controlSubmit(e)}
            disabled={loading}
          >
            Reset
          </button>
        </form>
      </article>
    </section>
  );
};

export default Reset;
