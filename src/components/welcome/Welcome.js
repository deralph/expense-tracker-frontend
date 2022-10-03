import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
// import Logout from "../dashboard/Logout";
import { logout } from "../../extras/functions";
import "./welcome.css";
import { useNavigate } from "react-router-dom";
const Welcome = () => {
  const navigate = useNavigate();

  return (
    <section className="welcome">
      <div className="cont">
        <p>
          <span>Welcome</span> Start your journey to tracking your expense in a
          more reliable way with no worries
        </p>
        <div className="btn">
          <Link to="/expense-form">
            <button>get started</button>
          </Link>
          <Link to="/categories">
            <button> View Categories </button>
          </Link>
        </div>
      </div>{" "}
      <p className="out" onClick={() => logout(navigate)}>
        Log Out
        <MdLogout style={{ marginLeft: "10px" }} />
      </p>
    </section>
  );
};

export default Welcome;
