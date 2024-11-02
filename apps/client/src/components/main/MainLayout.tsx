import { Box } from "@mui/material";
import AppHeader from "./AppHeader";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Box>
      <AppHeader />
      <Outlet />
    </Box>
  );
};
export default MainLayout;
