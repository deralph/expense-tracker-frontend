import React, { useState, useRef } from "react";
import "./consult.css";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import Back from "../../extras/Back";

const Consult:React.FC<{back?:boolean}> = ({ back }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const form = useRef<null | HTMLFormElement>(null);
  const sendEmail = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (name.trim() === "" || email.trim() === "") {
      setMessage("please enter all inputs");
    } else if (regex.test(email) === false) {
      setMessage("incorrect email");
    } else if (name && email) {
      emailjs
        .sendForm(
          "service_ebwtn3v",
          "template_usrzu3v",
          form.current!,
          "AaNuDTP5U8DXfAUhh"
        )
        .then(
          (result) => {
            // console.log(result.text);
            setMessage("Sent Sucessfully");
            setloading(true);
            setEmail("");
            setName("");
            setTimeout(() => {
              setMessage("");
            }, 5000);
            navigate("/dashboard");
          },
          (error) => {
            // console.log(error.text);
            setMessage("Failed to send. Try again later");
          }
        );
    }
  };

  return (
    <section className="consult big:my-[200px]" id="contact">
      {back && <Back />}
      {/* {route && <Back />} */}
      <h3 className="big:text-6xl text-center text-3xl font-sans relative pb-1 mt-7">Consult Us</h3>
      <div className="flex justify-evenly object-contain items-center py-10 px-5 md:flex-col">
        <div className="sm:text-xl md:p-5 sm:font-bold md:text-2xl text-4xl font-semibold text-[#333] font-sans">
          <p>
            Need a Consultation ? <br />
            Get To You
          </p>
        </div>
        <div className="big:w-[600px] big:h-[600px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] bg-[#96f] w-[400px] h-[400px] rounded-[50%] grid place-content-center p-5">
          <form
            action=""
            className="big:h-auto big:w-auto sm:w-[200px] md:w-[250px] bg-[#eee] p-7 w-[300px] relative"
            onSubmit={(e)=>sendEmail(e)}
            name="form"
            ref={form}
          >
            {message && <p>{message}</p>}
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
              className="h-6 bg-[#ddd] w-full p-1 pb-4 big:h-10 big:p-4 big:w-[500px] big:text-3xl mt-7 mb-5"
              />
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="Your Email"
              onChange={(e) => setEmail(e.target.value)}
              className="h-6 bg-[#ddd] w-full p-1 pb-4 big:h-10 big:p-4 big:w-[500px] big:text-3xl mt-7 mb-5"
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button className="big:py-5 big:px-20 big:text-4xl big:mt-[50px] py-3 px-5 text-white bg-[#7733ff] capitalize" disabled={loading} type="submit">
                send now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Consult;
