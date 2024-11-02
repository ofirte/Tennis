import { Alert } from "@mui/material";
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  FC,
} from "react";

// Define the context and a custom hook for easy access
const AlertContext = createContext({
  showAlert: (message: string, severity: AlertSeverity) => {},
});

export const useAlert = () => useContext(AlertContext);
type AlertSeverity = "error" | "info" | "success" | "warning";
type AlertState = {
  open: boolean;
  message: string;
  severity: AlertSeverity;
};
type AlertProviderProps = {
  children: React.ReactNode;
};

export const AlertProvider: FC<AlertProviderProps> = ({ children }) => {
  const [alert, setAlert] = useState<AlertState>({
    open: false,
    message: "",
    severity: "info",
  });
  const showAlert = useCallback((message: string, severity: AlertSeverity) => {
    console.log("here");

    setAlert({ open: true, message, severity });
    setTimeout(() => setAlert({ open: false, message, severity }), 3000);
  }, []);

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      {alert.open && (
        <Alert
          severity={alert.severity}
          sx={{
            position: "fixed",
            top: 4,
            left: 0,
            right: 0,
            zIndex: 9999,
            margin: "auto",
            width: "50%",
          }}
        >
          {alert.message}
        </Alert>
      )}
    </AlertContext.Provider>
  );
};
