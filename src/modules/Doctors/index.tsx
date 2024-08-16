import React from "react";
import PrivateLayout from "../../layout/PrivateLayout";
import ComingSoon from "../ComingSoon/ComingSoon";

const Doctors = () => {
  return (
    <PrivateLayout
      pageTitle="Doctors"
      name="Overview"
      role="user"
      pageName="overview"
    >
      <ComingSoon />
    </PrivateLayout>
  );
};

export default Doctors;
