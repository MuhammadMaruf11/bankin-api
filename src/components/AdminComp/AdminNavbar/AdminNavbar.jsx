import React from "react";

const AdminNavbar = ({ onToggleSidebar }) => {
  return (
    <div className="navbar">
      <button className="btn btn-outline-info" onClick={onToggleSidebar}>
        {" "}
        <i className="far fa-bars"></i>
      </button>
    </div>
  );
};

export default AdminNavbar;
