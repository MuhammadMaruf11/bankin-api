import React from "react";
import { Link } from "react-router-dom";

const UserSidebar = () => {
  return (
    <aside className="user-sidebar">
      <ul>
        <li>
          <Link to="/user">Dashboard</Link>
        </li>
        <li>
          <Link to="/user/plan">Plan</Link>
        </li>
      </ul>
    </aside>
  );
};

export default UserSidebar;
