import React from "react";
import UserSidebar from "../../../components/UserComp/UserSidebar/UserSidebar";
import UserTop from "../../../components/UserComp/UserTop/UserTop";

const UserLayout = ({ children }) => {
  return (
    <div className="user-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <UserTop />
          </div>
          <div className="col-xl-3">
            <UserSidebar />
          </div>
          <div className="col-xl-9">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
