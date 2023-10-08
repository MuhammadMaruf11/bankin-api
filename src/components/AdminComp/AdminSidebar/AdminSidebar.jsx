import React from "react";
import { Link } from "react-router-dom";
import AdminLogo from "../../../assets/img/logo/logo.png";

const AdminSidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="">
        <div className="admin-logo">
          <Link to="/admin">
            <img src={AdminLogo} alt="admin_logo" />
          </Link>
        </div>
        <ul>
          <li>
            {" "}
            <Link to="/admin">Dashboard</Link>
          </li>
          <li>
            {" "}
            <Link to="/admin/plans">Plan Page</Link>
          </li>

          <li> {/* <Link to="/admin/images">Images Page</Link> */}</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
