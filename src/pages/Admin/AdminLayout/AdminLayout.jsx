import React, { useState } from "react";
import AdminNavbar from "../../../components/AdminComp/AdminNavbar/AdminNavbar";
import AdminSidebar from "../../../components/AdminComp/AdminSidebar/AdminSidebar";
import AdminFooter from "../../../components/AdminComp/AdminFooter/AdminFooter";

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="admin-layout">
      <AdminNavbar isOpen={sidebarOpen} onToggleSidebar={toggleSidebar} />{" "}
      <AdminSidebar isOpen={sidebarOpen} />
      <main className={`content ${sidebarOpen ? "shrinked" : " "}`}>
        {children}
      </main>
      <AdminFooter isOpen={sidebarOpen} />
    </div>
  );
};

export default AdminLayout;
