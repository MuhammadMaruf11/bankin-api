import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      console.log(
        "email: " + formData.email + "password: " + formData.password
      );
      setFormData({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Layout>
      <section className="banner-area">
        {" "}
        <div className="banner-image">
          <Link
            className="d-none"
            to="https://blog.ibtapps.com/hubfs/apibanking.jpg"
          >
            copyright
          </Link>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-12">
              <div className="login-wrap">
                <form className="login-form" onSubmit={handleSignIn}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      id="name"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                    <input
                      className="form-control"
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button className="btn-info btn" type="submit">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
