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
      <div className="w-100">
        <div className="content-header">
          <h2>Plan Table</h2>

          <Link to="/admin/plan/add" className="cta-btn px-3 py-1">
            Create Plan
          </Link>
        </div>
        <div className="content-body">
          <table className="table-striped table-bordered table">
            <thead>
              <tr>
                <th className="text-center">SL</th>
                <th>Name</th>
                <th className="w-50">Description</th>
                <th className="text-end">Price</th>
                <th className="text-center">Duration</th>
                <th className="text-end">Quantity</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {plans &&
                plans.map((plan) => (
                  <tr key={plan.id}>
                    <td className="text-center">{i++}</td>
                    <td>{plan.name}</td>
                    <td>{plan.desc}</td>
                    <td className="text-end">{plan.price}</td>
                    <td className="text-center">{plan.duration}</td>
                    <td className="text-end">{plan.quantity}</td>
                    <td className="text-center">
                      <Link
                        to={`/admin/plan/edit/${plan.id}`}
                        className="btn btn-outline-info btn-sm"
                      >
                        <i className="fa-duotone fa-pen-to-square"></i>
                      </Link>
                      &nbsp; &nbsp;
                      <button className="btn btn-outline-danger btn-sm">
                        <i className="fa-duotone fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminPlan;
