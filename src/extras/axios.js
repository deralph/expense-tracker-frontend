import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:5000/api/v1",
  // baseURL: "http://ec2-54-164-115-29.compute-1.amazonaws.com:5000/api/v1",
  // baseURL: "https://expense-tracker-backend-sigma.vercel.app/api/v1",
  baseURL: "https://expense-tracked-01.herokuapp.com/api/v1",
  withCredentials: true,
  credentials: "include",
});
