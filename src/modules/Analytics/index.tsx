import React from "react";
import PrivateLayout from "../../layout/PrivateLayout";
import ComingSoon from "../ComingSoon/ComingSoon";

const Analytics = () => {
  return (
    <PrivateLayout
      pageTitle="Analytics"
      name="Overview"
      role="user"
      pageName="overview"
    >
      <ComingSoon />
    </PrivateLayout>
  );
};

export default Analytics;
