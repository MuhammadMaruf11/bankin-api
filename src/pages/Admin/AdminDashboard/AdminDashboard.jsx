import React from "react";
import AdminLayout from "../AdminLayout/AdminLayout";
// import { Link } from "react-router-dom";
import TemporaryImg from "../../../assets/img/bg/dashboard-temporary-img.png";

const AdminDashboard = () => {
  return (
    <AdminLayout>
      {" "}
      <div className="w-100">
        <div className="content-header">
          <h2>Dashboard</h2>
          <h6 className="text-theme mb-0">Dashboard</h6>
        </div>

        <div className="text-center">
          <img src={TemporaryImg} alt="" />
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
