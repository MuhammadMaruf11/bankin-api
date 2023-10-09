import React from "react";

const AdminFooter = ({ isOpen }) => {
  return (
    <footer className={`footer ${isOpen ? "shrinked" : ""}`}>
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-theme">Digital Decoder Ltd. </span>
        All rights reserved.
      </p>
    </footer>
  );
};

export default AdminFooter;
