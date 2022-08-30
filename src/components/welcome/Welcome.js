import { Link, useNavigate } from "react-router-dom";
// import Logout from "../../dashboard/Logout";
import "./welcome.css";
const Welcome = () => {
  // const navigate = useNavigate();
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
      {/* <Logout /> */}
    </section>
  );
};

export default Welcome;
