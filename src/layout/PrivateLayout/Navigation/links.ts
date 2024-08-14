import { BiHomeAlt } from "react-icons/bi";
import { FaUserCircle, FaUsers } from "react-icons/fa";
import { PrivatePaths } from "../../../routes/path";
import start from '../../../assets/Menu/Start_icon.png';
import overview from '../../../assets/Menu/overview.png';
import app from '../../../assets/Menu/App.png';
import customer from '../../../assets/Menu/customers_icon.png';
import finance from '../../../assets/Menu/FiinData.png';
import account from '../../../assets/Menu/accounts.png';
import transactions from '../../../assets/Menu/transactions.png';
// import Income from "../../../modules/FinancialData/Income";
import statement from '../../../assets/Menu/statement.png';
import more from '../../../assets/Menu/more.png';

export const userLinks = [
  {
    route: PrivatePaths.DASHBOARD,
    name: "Dashboard",
    // Icon: FaUserCircle,
    image: start,
    allowed: ["user"],
  },
  {
    route: PrivatePaths.PATIENTS,
    name: "Patients",
    // Icon: BiHomeAlt,
    image: overview,
    allowed: ["user"],
  },
  {
    route: PrivatePaths.DOCTORS,
    name: "Doctors",
    // Icon: FaUserCircle,
    image: app,
    allowed: ["user"],
  },
  {
    route: PrivatePaths.DEPARTMENTS,
    name: "Departments",
    // Icon: BiHomeAlt,
    image: customer,
    allowed: ["user"],
  },
  {
    route: PrivatePaths.PHARMACY,
    name: "Pharmacy",
    // Icon: BiHomeAlt,
    image: customer,
    allowed: ["user"],
  },
  {
    route: PrivatePaths.ANALYTICS,
    name: "Analytics",
    // Icon: BiHomeAlt,
    image: customer,
    allowed: ["user"],
  },
  {
    route: PrivatePaths.INVOICES,
    name: "invoices",
    // Icon: BiHomeAlt,
    image: customer,
    allowed: ["user"],
  },
  {
    route: PrivatePaths.REPORTS,
    name: "Reports",
    // Icon: BiHomeAlt,
    image: customer,
    allowed: ["user"],
  },
];
