import React from "react";
import AdminLayout from "../AdminLayout/AdminLayout";
import { Link } from "react-router-dom";

const AdminPlan = () => {
  const plans = [
    {
      id: 1,
      name: "Basic Plan",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quibusdam eum molestiae, tempore blanditiis, minima natus in neque nisi modi eaque, commodi deserunt quis omnis?",
      price: "$19.99",
      duration: "1 Month",
      quantity: "10",
    },
    {
      id: 2,
      name: "Premium Plan",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quibusdam eum molestiae, tempore blanditiis, minima natus in neque nisi modi eaque, commodi deserunt quis omnis?",
      price: "$39.99",
      duration: "3 Months",
      quantity: "25",
    },
    {
      id: 3,
      name: "Pro Plan",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quibusdam eum molestiae, tempore blanditiis, minima natus in neque nisi modi eaque, commodi deserunt quis omnis?",
      price: "$59.99",
      duration: "6 Months",
      quantity: "50",
    },
  ];
  let i = 1;
  return (
    <AdminLayout>
      <div className="p-4 w-100">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Plan Table</h2>
          <Link to="/admin/plan/add" className="btn btn-primary">
            Create Plan
          </Link>
        </div>
        <table className="table-striped table-bordered table">
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th className="w-50">Description</th>
              <th>Price</th>
              <th>Duration</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {plans &&
              plans.map((plan) => (
                <tr key={plan.id}>
                  <td>{i++}</td>
                  <td>{plan.name}</td>
                  <td>{plan.desc}</td>
                  <td>{plan.price}</td>
                  <td>{plan.duration}</td>
                  <td>{plan.quantity}</td>
                  <td>
                    <Link
                      to={`/admin/plan/edit/${plan.id}`}
                      className="btn btn-info btn-sm"
                    >
                      Edit
                    </Link>
                    &nbsp;
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default AdminPlan;
