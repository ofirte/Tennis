import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./components/auth/AuthProvider";
import { AlertProvider } from "./common/AlertProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AlertProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </AlertProvider>
  </StrictMode>
);
