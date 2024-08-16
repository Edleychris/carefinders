import React from "react";
import PrivateLayout from "../../layout/PrivateLayout";
import ComingSoon from "../ComingSoon/ComingSoon";

const Reports = () => {
  return (
    <PrivateLayout
      pageTitle="Reports"
      name="Overview"
      role="user"
      pageName="overview"
    >
      <ComingSoon />
    </PrivateLayout>
  );
};

export default Reports;
