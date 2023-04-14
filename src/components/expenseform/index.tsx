import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Back from "../../extras/Back";
import axios from "../../extras/axios";
import { res } from "../../pages/dashboard";

const ExpenseForm:React.FC<res> = ({
  _id,
  category,
  price,
  productName,
  productNo,
  date,
  description,
} ) => {
  // console.log(_id, category, price, productName, productNo, date, description);
  const timing = new Date().toLocaleDateString("en-us", {
    year: "numeric",
    weekday: "long",
    day: "numeric",
    month: "short",
  });

  const [form, setForm] = useState<res|any>({
    productName: productName || "",
    price: price || "",
    date: date || "",
    productNo: productNo || "",
    category: category || "",
    description: description || "",
  });

  const Navigate = useNavigate();
  const focus = (e:any) => {
    e.target.type = "date";
  };

  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [msg, setMsg] = useState("");
  const handleForm = (e:any) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    if (
      form.category.trim() === "" ||
      form.date.trim() === "" ||
      form.price=== "" ||
      form.productName.trim() === "" ||
      form.productNo === ""
    ) {
      setShowAlert(true);
      setAlert(true);
      setMsg("please enter all input");
    } else if (Number(form.price) < 1) {
      setAlert(true);
      setMsg("Enter correct inputs");
      setShowAlert(true);
    } else if (Number(form.productNo) < 1) {
      setAlert(true);
      setMsg("Number of product can't be less than 1");
      setShowAlert(true);
    } else if (
      form.category &&
      form.date &&
      form.price &&
      form.productName &&
      form.productNo
    ) {
      try {
        const expense = {
          productName: form.productName,
          price: form.price,
          date: form.date,
          productNo: form.productNo,
          category: form.category,
          description: form.description,
        };
        setLoading(true);
        await axios.post("expenses", expense);
        // console.log(data);
        setShowAlert(true);
        setAlert(false);
        setMsg("submitted sucessfully");

        // console.log("added");
        Navigate("/dashboard");
        setForm({
          productName: "",
          price: "",
          date: "",
          productNo: "",
          category: "",
        });
        setLoading(false);
      } catch (error) {
        setAlert(true);
        setMsg("unable to submit expenses, Try again later");
        // console.log(error);
        setLoading(false);
      }
    }
    // console.log(msg);
  };

  const handleEdit = async (e:any) => {
    e.preventDefault();
    try {
      setLoading(true);
      axios.patch(`expenses/${_id}`, form);
      // console.log("patched");
      setAlert(false);
      setMsg("updated sucessfully");
      setLoading(false);
      Navigate("/dashboard");
    } catch (error) {
      setAlert(true);
      setMsg("unable to update expense, Try again later");
      // console.log(error);
      setLoading(false);
    }
  };

  return (
    <section
    // section className='signin'
      className="grid place-content-center relative h-[100vh] min-h-[650px] big:h-auto big:min-h-[100vh]"
      style={{ padding: "50px 0 100px", minHeight: "800px" }}
    >
      <Back />
      {/* <div className="semi-bg" /> */}
      <div className="absolute top-0 h-[60vh] w-full bg-primary -z-[1] rounded-b-[50px]" />
      {/* <article className="sign-article"> */}
      <article className="w-[90vw] max-w-[520px] big:max-w-[60vw]">
        <form action="" className="rounded-xl p-[20px_30px_50px] bg-white text-center relative shadow-[3px_3px_20px_#aaa] sml:p-[10px_10px_40px] my-[10%]">
          <h3 className="font-bold text-[30px] p-5 capitalize text-[#111] big:text-4xl sml:p-4">Enter expense details</h3>
          {showAlert && (
            <p className={`text-sm p-2 text-center font-sans font-semibold big:text-[30px] big:p-[30px] ${alert ? "text-[#f00] border-2 border-solid border-[#f00]" : "text-[#008000] border-2 border-solid border-[#008000]"}`}>{msg}</p>
          )}
          <input className="block w-full h-10 rounded-[30px] m-[20px_auto] text-sm p-[10px_0_10px_5px] border-2 border-solid border-[#aaa] big:block big:w-[95%] big:h-[70px] big:m-[60px_auto] text-[30px] pl-[10px] sml:h-7 sml:text-sml sml:border"
            type="text"
            name="productName"
            id="productName"
            value={form.productName}
            placeholder="Product Name"
            onChange={handleForm}
            required
          />
          <input className="block w-full h-10 rounded-[30px] m-[20px_auto] text-sm p-[10px_0_10px_5px] border-2 border-solid border-[#aaa] big:block big:w-[95%] big:h-[70px] big:m-[60px_auto] big:text-[30px] big:pl-[10px] sml:h-7 sml:text-sml sml:border"
            type="number"
            value={form.price}
            name="price"
            id="price"
            placeholder="Price"
            onChange={handleForm}
            required
          />
          <input className="block w-full h-10 rounded-[30px] m-[20px_auto] text-sm p-[10px_0_10px_5px] border-2 border-solid border-[#aaa] big:block big:w-[95%] big:h-[70px] big:m-[60px_auto] text-[30px] pl-[10px] sml:h-7 sml:text-sml sml:border"
            type="number"
            value={form.productNo}
            id="productNo"
            name="productNo"
            placeholder="No. of product"
            onChange={handleForm}
            required
          />
          <input className="block w-full h-10 rounded-[30px] m-[20px_auto] text-sm p-[10px_0_10px_5px] border-2 border-solid border-[#aaa] big:block big:w-[95%] big:h-[70px] big:m-[60px_auto] text-[30px] pl-[10px] sml:h-7 sml:text-sml sml:border"
            type="text"
            value={form.date}
            id="date"
            name="date"
            placeholder={timing}
            onChange={handleForm}
            onFocus={focus}
            required
          />
          <select
            name="category"
            id="category"
            value={form.category}
            onChange={handleForm}
            className="block w-full rounded-[30px] m-[20px_auto] text-sm p-[10px_0_10px_5px] border-2 border-solid border-[#aaa] big:block big:w-[95%] big:h-[70px] big:m-[60px_auto] big:text-[30px] big:pl-[10px] bg-white h-full"
          >
            <option value="">Select Categories</option>
            <option value="Clothes">Clothes</option>
            <option value="Accesories">Accesories</option>
            <option value="Grocery">Grocery</option>
            <option value="Drinks">Drinks</option>
            <option value="Foods">Foods</option>
            <option value="Electric">Electric</option>
            <option value="Home">Home Expenses</option>
            <option value="Transport">Transport</option>
            <option value="Micellenous">Micellenous</option>
            <option value="Others">Others</option>
          </select>
          <textarea
            name="description"
            id="description"
            value={form.description}
            onChange={handleForm}
            placeholder="Description"
            className="block w-[95%] h-[120px] rounded-[30px] m-[20px_auto] text-base font-sans p-[10px] border-2 border-solid border-[#aaa] big:block big:w-[95%] big:m-[60px_auto] big:text-[30px] big:pl-[10px] big:h-[200px]"
          ></textarea>
          {_id ? (
            <button onClick={handleEdit} className="bg-primary text-white py-4 px-10 text-[1.2rem] font-bold rounded-[30px] absolute -bottom-[20px] left-[50%] -translate-x-[50%] w-[200px] cursor-pointer big:p-[30px_80px] big:text-[3rem] big:w-auto big:-bottom-[60px] big:rounded-[50px]">Edit</button>
          ) : (
            <button onClick={handleSubmit} disabled={loading} className="bg-primary text-white py-4 px-10 text-[1.2rem] font-bold rounded-[30px] absolute -bottom-[20px] left-[50%] -translate-x-[50%] w-[200px] cursor-pointer disabled:bg-[#a091be] big:p-[30px_80px] big:text-[3rem] big:w-auto big:-bottom-[60px] big:rounded-[50px]">
              Submit
            </button>
          )}
        </form>
        <p className="info-p m-[50px_auto] p-5 text-[#f00] font-sans flex items-center justify-center py-[10px] big:text-4xl big:mt-20">
          Kindly note that all prices entered should be in NAIRA{" "}
          <img src="/images/naira.png" alt="naira" className="w-[30px] object-contain" />
        </p>
      </article>
    </section>
  );
};

export default ExpenseForm;
