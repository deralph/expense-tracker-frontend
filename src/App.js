import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Error from "./pages/404";
import Home from "./pages/Index";
import Welcome from "./pages/welcome";
import SignIn from "./pages/Signin";
import Categories from "./pages/Categories";
import ExpenseForm from "./pages/expenseForm";
import Consultation from "./pages/consultation";
import SingleExpense from "./pages/singleExpense";
// import SingleExpense from "./components/expenses/singleExpense";
import Expense from "./pages/expense";
import Dashboard from "./pages/dashboard";
import Edit from "./pages/editSingleExpense";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/expense-form" element={<ExpenseForm />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/expense" element={<Expense />} />
        <Route path="/expense/:id" element={<SingleExpense />} />
        <Route path="/expense/:id/edit" element={<Edit />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
