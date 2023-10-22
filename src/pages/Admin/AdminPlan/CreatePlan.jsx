import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../AdminLayout/AdminLayout";

const CreatePlan = () => {
  const [planData, setPlanData] = useState({
    name: "",
    description: "",
    price: null,
    duration: "",
    quantity: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlanData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Reset the form after successful submission
      setPlanData({
        name: "",
        description: "",
        price: null,
        duration: "",
        quantity: null,
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
          <h2>Create Plan</h2>
          <Link className="cta-btn px-3 py-1" to="/admin/plans">
            Back
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              {" "}
              <div className="input-wrap">
                <label htmlFor="">
                  Name <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={planData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-wrap">
                <label htmlFor="">
                  Price<span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="number"
                  name="price"
                  value={planData.price}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-12">
              {" "}
              <div className="input-wrap">
                <label htmlFor="">
                  Description<span className="text-danger">*</span>
                </label>
                <textarea
                  className="form-control"
                  type="text"
                  name="description"
                  value={planData.description}
                  onChange={handleChange}
                  required
                  rows={5}
                ></textarea>
              </div>
            </div>
            <div className="col-md-6">
              {" "}
              <div className="input-wrap">
                <label htmlFor>
                  Duration<span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="duration"
                  value={planData.duration}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              {" "}
              <div className="input-wrap">
                <label htmlFor="">
                  Quantity<span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="number"
                  name="quantity"
                  value={planData.quantity}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <br />
          <button className="btn btn-theme" type="submit">
            Create Plan
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default CreatePlan;
