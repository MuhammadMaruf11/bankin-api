import React from "react";
import Layout from "../Layout/Layout";
import PricingPlan from "../../components/PricingPlan/PricingPlan";
import Banner from "./../../components/Banner/Banner";

const Pricing = () => {
  const h1Title = "Choose a";
  const textTheme = "Plan";
  // const bannerDescription = "Get a Plan";

  return (
    <Layout>
      <Banner
        h1Title={h1Title}
        textTheme={textTheme}
        // bannerDescription={bannerDescription}
      />
      <PricingPlan />
    </Layout>
  );
};

export default Pricing;
