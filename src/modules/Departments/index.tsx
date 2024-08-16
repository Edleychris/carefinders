import React from "react";
import ComingSoon from "../ComingSoon/ComingSoon";
import PrivateLayout from "../../layout/PrivateLayout";

const Departments = () => {
  return (
    <PrivateLayout
      pageTitle="Departments"
      name="Overview"
      role="user"
      pageName="overview"
    >
      <ComingSoon />
    </PrivateLayout>
  );
};

export default Departments;
