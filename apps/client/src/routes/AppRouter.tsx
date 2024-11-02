import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../components/main/Home";
import LoginPage from "../components/auth/LoginPage";
import { RoutePath } from "./Routes";
import IsAuthenticated from "../components/auth/isAuthenticated";
import MainLayout from "../components/main/MainLayout";
import SignUpPage from "../components/auth/SignUpPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<IsAuthenticated />}>
        <Route element={<MainLayout />}>
          <Route path={RoutePath.HOME} element={<Home />} />,
        </Route>
      </Route>
      <Route path={RoutePath.LOGIN} element={<LoginPage />} />
      <Route path={RoutePath.SIGN_UP} element={<SignUpPage />} />
    </Route>
  )
);
export default router;
