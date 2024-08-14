// import React from "react";

import PrivateLayout from "../../layout/PrivateLayout";

const Dashboard = () => {
  return (
    <PrivateLayout
      pageTitle="Dashboard"
      name="Overview"
      role="user"
      pageName="overview"
    >
      <div>This is the Dashboard</div>
    </PrivateLayout>
  );
};

export default Dashboard;
