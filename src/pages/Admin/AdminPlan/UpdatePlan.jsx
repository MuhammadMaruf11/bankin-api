import React, { useState } from "react";
import AdminLayout from "../AdminLayout/AdminLayout";
import { Link } from "react-router-dom";

const UpdatePlan = () => {
  const [planData, setPlanData] = useState({
    name: "",
    description: "",
    price: 0,
    duration: "",
    quantity: 0,
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
        price: 0,
        duration: "",
        quantity: 0,
      });

      // Handle any additional logic after successful submission
    } catch (error) {
      console.error("Error submitting plan:", error);
      // Handle error cases
    }
  };

  return (
    <AdminLayout>
      <div className="w-100 p-4">
        <div className="d-flex align-items-center justify-content-between">
          <h2>Update Plan</h2>
          <Link className="btn btn-dark" to="/admin/plans">
            Back
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="">
              Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={planData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="">
              Description<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="description"
              value={planData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="">
              Price<span className="text-danger">*</span>
            </label>
            <input
              type="number"
              name="price"
              value={planData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor>
              Duration<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="duration"
              value={planData.duration}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="">
              Quantity<span className="text-danger">*</span>
            </label>
            <input
              type="number"
              name="quantity"
              value={planData.quantity}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <button className="btn btn-success" type="submit">
            Update Plan
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default UpdatePlan;
