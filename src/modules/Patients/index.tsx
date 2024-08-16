import React from "react";
import PrivateLayout from "../../layout/PrivateLayout";
import ComingSoon from "../ComingSoon/ComingSoon";

const Patients = () => {
  return (
    <PrivateLayout
      pageTitle="Patients"
      name="Overview"
      role="user"
      pageName="overview"
    >
      <ComingSoon />
    </PrivateLayout>
  );
};

export default Patients;
