import { useState } from "react";

import "../components/css/style.css";
import NavbarDashboard from "./navbar/Navbar";
import SidebarDashboard from "./sidebar/Sidebar";
import Utama from "./components/Man";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="container">
      <NavbarDashboard sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Utama />
      <SidebarDashboard sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export default Dashboard;
