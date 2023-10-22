import React from "react";
import Layout from "../Layout/Layout";
import ToolApi from "../../components/ToolApi/ToolApi";
import Banner from "../../components/Banner/Banner";
import { Link } from "react-router-dom";

const APITools = () => {
  const h1Title = "Banking Service";
  const textTheme = "API";
  const buttons = (
    <div className="banner-btn">
      <Link to="/" className="cta-btn">
        <i className="fa-sharp fa-solid fa-key"></i> <span>Get API Key</span>
      </Link>
    </div>
  );
  return (
    <Layout>
      <Banner h1Title={h1Title} textTheme={textTheme} buttons={buttons} />
      <ToolApi />
    </Layout>
  );
};

export default APITools;
