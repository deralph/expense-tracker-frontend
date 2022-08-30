import React, { useState, useRef } from "react";
import "./consult.css";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import Back from "../../extras/Back";
// import Back from "../../extras/Back";

const Consult = ({ back }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const regex =
      /^([a-z A-Z 0-9 \._]+)@([a-z A-Z]+).([a-z A-Z]{2,6})(.[a-z]{2,6})?$/;

    if (name.trim() === "" || email.trim() === "") {
      setMessage("please enter all inputs");
    } else if (regex.test(email) === false) {
      setMessage("incorrect email");
    } else if (name && email) {
      emailjs
        .sendForm(
          "service_ebwtn3v",
          "template_usrzu3v",
          form.current,
          "AaNuDTP5U8DXfAUhh"
        )
        .then(
          (result) => {
            console.log(result.text);
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
            console.log(error.text);
            setMessage("Failed to send");
          }
        );
    }
  };

  return (
    <section className="consult" id="contact">
      {back && <Back />}
      {/* {route && <Back />} */}
      <h3>Consult Us</h3>
      <div className="consult-1">
        <div className="consult-text">
          <p>
            Need a Consultation ? <br />
            Get To You
          </p>
        </div>
        <div className="form-1">
          <form
            action=""
            className="form"
            onSubmit={sendEmail}
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
            />
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button className="btn-con" disabled={loading} type="submit">
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
