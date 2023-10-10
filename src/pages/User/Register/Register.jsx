import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import { Link } from "react-router-dom";

const Register = () => {
  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    gender: "male", // Set a default value
    address: "",
    email: "",
    birthDate: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      console.log(
        "name: " +
          formData.name +
          "mobile: " +
          formData.mobile +
          "gender: " +
          formData.gender +
          "address: " +
          formData.address +
          "email: " +
          formData.email +
          "birthDate: " +
          formData.birthDate +
          "password: " +
          formData.password
      );
      setFormData({
        name: "",
        mobile: "",
        gender: "male", // Set a default value
        address: "",
        email: "",
        birthDate: "",
        password: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <Layout>
      {" "}
      <section className="banner-area" style={{ padding: "150px 0" }}>
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
            <div className="col-xl-6 col-lg-8 col-12">
              <div className="login-wrap">
                <form className="login-form row" onSubmit={handleRegister}>
                  <div className="form-group col-md-6">
                    <label className="form-label" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      placeholder="Type your name"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label className="form-label" htmlFor="mobile">
                      Mobile
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      placeholder="Type your number"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label className="form-label" htmlFor="gender">
                      Gender
                    </label>
                    <select className="form-select" name="gender" id="gender">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label className="form-label" htmlFor="address">
                      Address
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      placeholder="Type your address"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      placeholder="Type your Email"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label className="form-label" htmlFor="birthday">
                      Birthdate
                    </label>
                    <input
                      className="form-control"
                      type="date"
                      id="birthday"
                      name="birthday"
                      value={formData.birthDate}
                      max={today}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                    <input
                      className="form-control"
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      placeholder="Your password"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 offset-md-6 text-end">
                    <button className="btn-info btn" type="submit">
                      Register
                    </button>
                  </div>
                </form>
                <div className="text-center text-white mt-4">
                  Already Have account?{" "}
                  <Link className="text-theme" to="/user/login">
                    Login here
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Register;
