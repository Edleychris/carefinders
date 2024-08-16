import React from "react";
import PrivateLayout from "../../layout/PrivateLayout";
import ComingSoon from "../ComingSoon/ComingSoon";

const Settings = () => {
  return (
    <PrivateLayout
      pageTitle="Settings"
      name="Overview"
      role="user"
      pageName="overview"
    >
      <ComingSoon />
    </PrivateLayout>
  );
};

export default Settings;
