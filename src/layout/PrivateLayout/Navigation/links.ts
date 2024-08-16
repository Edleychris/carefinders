import { PrivatePaths } from "../../../routes/path";


export const userLinks = [
  {
    route: PrivatePaths.DASHBOARD,
    name: "Dashboard",
    allowed: ["user"],
  },
  {
    route: PrivatePaths.PATIENTS,
    name: "Patients",
    allowed: ["user"],
  },
  {
    route: PrivatePaths.DOCTORS,
    name: "Doctors",
    allowed: ["user"],
  },
  {
    route: PrivatePaths.DEPARTMENTS,
    name: "Departments",
    allowed: ["user"],
  },
  {
    route: PrivatePaths.HOSPITAL,
    name: "Hospital",
    allowed: ["user"],
  },
  {
    route: PrivatePaths.ANALYTICS,
    name: "Analytics",
    allowed: ["user"],
  },
  {
    route: PrivatePaths.INVOICES,
    name: "invoices",
    allowed: ["user"],
  },
  {
    route: PrivatePaths.REPORTS,
    name: "Reports",
    allowed: ["user"],
  },
];
