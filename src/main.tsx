import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AppointmentsProvider } from "./providers/AppointmentContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppointmentsProvider>
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </AppointmentsProvider>
  </StrictMode>
);
