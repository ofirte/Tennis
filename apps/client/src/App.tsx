import router from "./routes/AppRouter";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "./common/Theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
