import "./App.css";
import { ErrorAlert, SuccessAlert } from "./components";
import { ToastContainer } from "react-toastify";
import ConfirmAlert from "./components/Alert/ConfirmAlert";
import { AlertProvider } from "./context/AlertContext";
import RoutesWrapper from "./routes";

function App() {
  return (
    <AlertProvider>
      <ToastContainer />
      <RoutesWrapper />
      <ErrorAlert autoClose={false} />
      <SuccessAlert autoClose={false} />
      <ConfirmAlert autoClose={false} />
    </AlertProvider>
  );
}

export default App;
