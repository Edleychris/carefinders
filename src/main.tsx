import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import ReactDOM from "react-dom/client";
// import "./index.css";
import "react-toastify/dist/ReactToastify.css";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
import AuthContextProvider from "./context";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./react-query";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </QueryClientProvider>
  </StrictMode>
);
