import React from "react";
import Layout from "../../Layout/Layout";
import UserLayout from "../UserLayout/UserLayout";
import Banner from "../../../components/Banner/Banner";

const UserDashboard = () => {
  const h1Title = "Client";
  const textTheme = "Dashboard";
  return (
    <Layout>
      <Banner h1Title={h1Title} textTheme={textTheme} />
      <UserLayout>
        <section>
          <div className="row">
            <div className="col-12">
              <h2>Dashboard</h2>
            </div>
          </div>
        </section>
      </UserLayout>
    </Layout>
  );
};

export default UserDashboard;
