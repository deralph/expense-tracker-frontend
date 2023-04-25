import React, { useState } from "react";
import Back from "../../extras/Back";
import axios from "../../extras/axios";

const Consult: React.FC<{ back?: boolean }> = ({ back }) => {
  interface input {
    name: string
    email: string
  }
  const [inputs, setInputs] = useState<input>({
    name: '', email: ''
  });
  const [message, setMessage] = useState("");
  const [loading, setloading] = useState(false);
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (inputs.name.trim() === "" || inputs.email.trim() === "") {
      setMessage("please enter all inputs");
    } else if (regex.test(inputs.email) === false) {
      setMessage("incorrect email");
    } else if (inputs.name && inputs.email) {
      try {
        setloading(true)
        const { data } = await axios.post('sendmail', inputs)
        if (data) {
          setMessage('maill delivered sucessully')
        }
        setloading(false)
      } catch (error) {
        console.log(error)
        setMessage('an error occured try again later')
        setInputs({
          name: '', email: ''
        })
        setloading(false)
      }
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
            We Will Get To You
          </p>
        </div>
        <div className="big:w-[600px] big:h-[600px] sm:h-[250px] md:h-[300px] bg-primary w-[400px] h-[400px] md:w-full rounded-[50%] grid place-content-center p-5 md:bg-transparent">
          <form
            action=""
            className="big:h-auto big:w-auto md:w-full bg-[#eee] p-7 w-[300px] relative"
            onSubmit={(e) => sendEmail(e)}
            name="form"
          >
            {message && <p className="text-center text-green-600 font-semibold">{message}</p>}
            <input
              type="text"
              name="name"
              id="name"
              value={inputs.name}
              placeholder="Your Name"
              onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
              className="h-auto bg-[#ddd] w-full p-2 big:h-10 big:p-4 big:w-[500px] big:text-3xl mt-7 mb-5"
            />
            <input
              type="email"
              name="email"
              id="email"
              value={inputs.email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
              placeholder="Your Email"
              className=" bg-[#ddd] w-full p-2 big:h-10 big:p-4 big:w-[500px] big:text-3xl mt-3 mb-5"
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
