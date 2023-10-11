import React from "react";
import Layout from "../../Layout/Layout";
import Banner from "../../../components/Banner/Banner";
import UserLayout from "../UserLayout/UserLayout";

const UserPlan = () => {
  const h1Title = "User";
  const textTheme = "Pricing Plan";
  return (
    <Layout>
      <Banner h1Title={h1Title} textTheme={textTheme} />
      <UserLayout></UserLayout>
    </Layout>
  );
};

export default UserPlan;
