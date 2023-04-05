import React from "react";
import DashboardBody from "./dashboardbody/DashboardBody";
import Sidebar from "./Sidebar/Sidebar";
import "./Dashboard.css";

const Dashboard = ({ result, user }) => {
  return (
    <section className="dashboard">
      <Sidebar />
      <DashboardBody result={result} user={user} />
    </section>
  );
};

export default Dashboard;
