import React from "react";
import AdminLayout from "../AdminLayout/AdminLayout";
import { Link } from "react-router-dom";

const AdminApikeys = () => {
  const plans = [
    {
      id: 1,
      val: "Basic Plan",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quibusdam eum molestiae, tempore blanditiis, minima natus in neque nisi modi eaque, commodi deserunt quis omnis?",
      limits: "$19.99",
      type: "1 Month",
      method: "10",
    },
    {
      id: 2,
      val: "Basic Plan",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quibusdam eum molestiae, tempore blanditiis, minima natus in neque nisi modi eaque, commodi deserunt quis omnis?",
      limits: "$19.99",
      type: "1 Month",
      method: "10",
    },
    {
      id: 3,
      val: "Basic Plan",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quibusdam eum molestiae, tempore blanditiis, minima natus in neque nisi modi eaque, commodi deserunt quis omnis?",
      limits: "$19.99",
      type: "1 Month",
      method: "10",
    },
  ];
  let i = 1;
  return (
    <AdminLayout>
      <div className="w-100">
        <div className="content-header">
          <h2>API Keys Table</h2>

          <Link to="/admin/api-key/add" className="cta-btn px-3 py-1">
            Create API
          </Link>
        </div>
        <div className="content-body">
          <table className="table-striped table-bordered table">
            <thead>
              <tr>
                <th className="text-center w-5">SL</th>
                <th>Value</th>
                <th className="w-5">Type</th>
                <th className="w-15">Limits</th>
                <th className="w-25">Set Method</th>
                <th className="w-35">Description</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {plans &&
                plans.map((plan) => (
                  <tr key={plan.id}>
                    <td className="text-center">{i++}</td>
                    <td>{plan.val}</td>
                    <td>{plan.type}</td>
                    <td className="text-end">{plan.limits}</td>
                    <td className="text-center">{plan.method}</td>
                    <td className="">{plan.desc}</td>
                    <td className="text-center">
                      <Link
                        to={`/admin/api-key/edit/${plan.id}`}
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

export default AdminApikeys;
