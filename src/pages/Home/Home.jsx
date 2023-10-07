import React from "react";

import Layout from "../Layout/Layout";
import Banner from "../../components/Banner/Banner";
import WorkProcess from "../../components/WorkProcess/WorkProcess";

const Home = () => {
  return (
    <Layout>
      <Banner />
      <WorkProcess />
    </Layout>
  );
};

export default Home;
