import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./pages/404";
import Home from "./pages/Index";
import Welcome from "./pages/welcome";
import SignIn from "./pages/Signin";
import Categories from "./pages/Categories";
import ExpenseForm from "./pages/expenseForm";
import Consultation from "./pages/consultation";
import SingleExpense from "./pages/singleExpense";
import Expense from "./pages/expense";
import Dashboard from "./pages/dashboard";
import Edit from "./pages/editSingleExpense";
import { fetcher } from './store/slice.action';
import { useAppDispatch } from './hooks';
import Chatroom from './pages/Chatroom';



function App() {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetcher());
  }, [dispatch, fetcher]);

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
        <Route path="/chatroom" element={<Chatroom />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
