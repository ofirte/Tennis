import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import router from "./routes/AppRouter";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "./common/Theme";
const queryClient = new QueryClient();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
