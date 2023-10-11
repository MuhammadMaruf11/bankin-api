import React from "react";
import { useLocation, Link } from "react-router-dom";

const UserTop = () => {
  const location = useLocation();
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment !== "");

  const breadcrumbs = pathSegments.map((segment, index) => {
    const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
    return (
      <span key={segment}>
        <Link className=" text-capitalize " to={path}>
          {segment}
        </Link>
        {index < pathSegments.length - 1 && " / "}
      </span>
    );
  });
  return (
    <div className="breadcrumb ">
      <Link className="ms-0" to="/">
        Home{" "}
      </Link>{" "}
      / {breadcrumbs}
    </div>
  );
};

export default UserTop;
