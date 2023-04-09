import React from "react";
import DashboardBody from "./dashboardbody";
import Sidebar from "./Sidebar";
import { res } from "../../pages/dashboard";

interface props{
  result:res[]
  user:string
}

const Dashboard:React.FC<props> = ({ result, user }) => {
  return (
    <section className="w-full overflow-hidden relative min-w-[100vw] sml:block">
      <Sidebar />
      <DashboardBody result={result} user={user} />
    </section>
  );
};

export default Dashboard;
