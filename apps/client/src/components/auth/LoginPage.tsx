import { FC, useEffect } from "react";
import {
  Box,
  Avatar,
  Typography,
  CssBaseline,
  Container,
  Button,
} from "@mui/material";
import Form, { TextFieldType } from "../../common/Form";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";
import RoutePath from "../../routes/Routes";
import GoogleButton from "./GoogleButton";
import { useAlert } from "../../common/AlertProvider";

type LoginPageProps = {};
const LoginPage: FC<LoginPageProps> = () => {
  const fields = [
    { name: "email", label: "Email", type: TextFieldType.Email },
    { name: "password", label: "Password", type: TextFieldType.Password },
  ];
  const defaultValues = {
    email: "",
    password: "",
  };
  const { user, loading, login, loginWithEmail } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (user && !loading) {
      navigate(RoutePath.HOME);
    }
  }, [user, loading]);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Form
          fields={fields}
          defaultValues={defaultValues}
          onSubmit={(data) => {
            loginWithEmail(data.email, data.password);
          }}
        />
        <Box
          sx={{
            marginTop: ({ spacing }) => spacing(2),
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
          }}
        >
          <GoogleButton
            onClick={login}
            type="light"
            label="Sign in with Google"
          />
          <Button
            onClick={() => {
              navigate(RoutePath.SIGN_UP);
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                color: ({ palette }) => palette.primary.main,
              }}
            >
              Sign up
            </Typography>
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
export default LoginPage;
