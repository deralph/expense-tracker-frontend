import React, { useState } from "react";
import { useGlobal } from "../context/Context";
import { useNavigate } from "react-router-dom";
import Back from "../../extras/Back";
import axios from "../../extras/axios";

const ExpenseForm = ({
  _id,
  category,
  price,
  productName,
  productNo,
  date,
  description,
}) => {
  console.log(_id, category, price, productName, productNo, date, description);
  const timing = new Date().toLocaleDateString("en-us", {
    year: "numeric",
    weekday: "long",
    day: "numeric",
    month: "short",
  });

  const [form, setForm] = useState({
    productName: productName || "",
    price: price || "",
    date: date || "",
    productNo: productNo || "",
    category: category || "",
    description: description || "",
  });

  const Navigate = useNavigate();
  const focus = (e) => {
    e.target.type = "date";
  };

  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [msg, setMsg] = useState("");
  const handleForm = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      form.category.trim() === "" ||
      form.date.trim() === "" ||
      form.price.trim() === "" ||
      form.productName.trim() === "" ||
      form.productNo.trim() === ""
    ) {
      setShowAlert(true);
      setAlert(true);
      setMsg("please enter all input");
    } else if (form.price < 1) {
      setAlert(true);
      setMsg("Enter correct inputs");
      setShowAlert(true);
    } else if (form.productNo < 1) {
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
        const { data } = await axios.post("expenses", expense);
        console.log(data);
        setShowAlert(true);
        setAlert(false);
        setMsg("submitted sucessfully");

        console.log("added");
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
        setMsg("unable to submit expenses");
        console.log(error);
        setLoading(false);
      }
    }
    console.log(msg);
  };

  const handleEdit = async () => {
    try {
      setLoading(true);
      axios.patch(`expenses/${_id}`, form);
      console.log("patched");
      setAlert(false);
      setMsg("updated sucessfully");
      setLoading(false);
      Navigate("/dashboard");
    } catch (error) {
      setAlert(true);
      setMsg("unable to update expense");
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <section
      className="signin"
      style={{ padding: "50px 0 100px", minHeight: "800px" }}
    >
      <Back />
      <div className="semi-bg" />
      <article className="sign-article">
        <form action="" className="sign">
          <h3>Enter expense details</h3>
          {showAlert && (
            <p className={`alert ${alert ? "fail" : "sucess"}`}>{msg}</p>
          )}
          <input
            type="text"
            name="productName"
            id="productName"
            value={form.productName}
            placeholder="Product Name"
            onChange={handleForm}
            required
          />
          <input
            type="number"
            value={form.price}
            name="price"
            id="price"
            placeholder="Price"
            onChange={handleForm}
            required
          />
          <input
            type="number"
            value={form.productNo}
            id="productNo"
            name="productNo"
            placeholder="No. of product"
            onChange={handleForm}
            required
          />
          <input
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
          ></textarea>
          {_id ? (
            <button onClick={handleEdit}>Edit</button>
          ) : (
            <button onClick={handleSubmit} disabled={loading}>
              Submit
            </button>
          )}
        </form>
        <p className="info-p">
          Kindly note that all prices entered should be in NAIRA{" "}
          <img src="/images/naira.png" alt="naira" className="naira" />
        </p>
      </article>
      <p>{form.category}</p>
    </section>
  );
};

export default ExpenseForm;
