import React, { useState } from "react";
import AdminLayout from "../AdminLayout/AdminLayout";
import { Link } from "react-router-dom";

const UpdateApiKeys = () => {
  const [apiData, setApiData] = useState({
    value: "",
    type: "",
    limits: "",
    method: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setApiData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Reset the form after successful submission
      setApiData({
        value: "",
        type: "",
        limits: "",
        method: "",
        description: "",
      });

      // Handle any additional logic after successful submission
    } catch (error) {
      console.error("Error submitting plan:", error);
      // Handle error cases
    }
  };

  return (
    <AdminLayout>
      <div className="w-100">
        <div className="content-header">
          <h2>Update API</h2>
          <Link className="cta-btn px-3 py-1" to="/admin/api-keys">
            Back
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              {" "}
              <div className="input-wrap">
                <label htmlFor="">
                  Value <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="value"
                  value={apiData.value}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              {" "}
              <div className="input-wrap">
                <label htmlFor="">
                  Type<span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="type"
                  value={apiData.type}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-wrap">
                <label htmlFor>
                  Limits<span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="limits"
                  value={apiData.limits}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-wrap">
                <label htmlFor="">
                  Method<span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="method"
                  value={apiData.method}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-12">
              <div className="input-wrap">
                <label htmlFor="">
                  Description<span className="text-danger">*</span>
                </label>
                <textarea
                  className="form-control"
                  type="text"
                  name="description"
                  value={apiData.description}
                  onChange={handleChange}
                  required
                  rows={5}
                ></textarea>
              </div>
            </div>
          </div>
          <br />
          <button className="btn btn-theme" type="submit">
            Update API
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default UpdateApiKeys;
