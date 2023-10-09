import React from "react";
import { Link, useLocation } from "react-router-dom";
import AdminLogo from "../../../assets/img/logo/logo.png";

const AdminSidebar = ({ isOpen }) => {
  const location = useLocation();
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="admin-logo">
        <Link to="/admin">
          <img src={AdminLogo} alt="admin_logo" /> banking
        </Link>
      </div>
      <div className="sidebar-list">
        <ul>
          <li>
            {" "}
            <Link
              className={location.pathname === "/admin" ? "active" : ""}
              to="/admin"
            >
              {" "}
              <i class="fa-sharp fa-solid fa-house"></i> <span>Dashboard</span>
            </Link>
          </li>
          <li>
            {" "}
            <Link
              className={location.pathname === "/admin/plans" ? "active" : ""}
              to="/admin/plans"
            >
              <i class="fa-solid fa-circle-dollar"></i> <span>Plan Page</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
