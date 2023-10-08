import React from "react";

const AdminLogin = () => {
  return (
    <div className="login-bg">
      <div className="login-form-wrap">
        <h2>Login</h2>
        <div className="form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
            />
          </div>
          <div className="cta-btn">
            <button className="" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
