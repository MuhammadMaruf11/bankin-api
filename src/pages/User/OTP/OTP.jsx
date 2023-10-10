import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import { Link } from "react-router-dom";

const OTP = () => {
  const [formData, setFormData] = useState({
    OTP: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("OTP: " + formData.OTP);
      setFormData({
        OTP: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <Layout>
      {" "}
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
                <form className="login-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="otpCode">
                      Enter OTP
                    </label>
                    <input
                      id="otpCode"
                      className="form-control"
                      type="text"
                      name="OTP"
                      placeholder="  Enter the OTP code you received:"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button className="btn-info btn" type="submit">
                    Submit
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

export default OTP;
