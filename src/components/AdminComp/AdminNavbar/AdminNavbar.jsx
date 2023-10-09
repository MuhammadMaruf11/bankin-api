import React from "react";

const AdminNavbar = ({ onToggleSidebar, isOpen }) => {
  return (
    <div className={`navbar ${isOpen ? "shrinked" : ""}`}>
      <div className="contact-btn" onClick={onToggleSidebar}>
        {" "}
        <i className="far fa-bars"></i>
      </div>
    </div>
  );
};

export default AdminNavbar;
