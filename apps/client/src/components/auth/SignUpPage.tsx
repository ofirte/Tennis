import { Avatar, Box, Container, CssBaseline, Typography } from "@mui/material";
import { FC } from "react";
import Form, { TextFieldType } from "../../common/Form";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

const SignUpPage: FC = () => {
  const fields = [
    { name: "email", label: "Email", type: TextFieldType.Email },
    { name: "password", label: "Password", type: TextFieldType.Password },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      type: TextFieldType.Password,
    },
  ];
  const defaultValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  const navigate = useNavigate();
  const { signUpWithEmail } = useAuth();
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
          Sign up
        </Typography>
      </Box>
      <Form
        fields={fields}
        defaultValues={defaultValues}
        onSubmit={async (data) => {
          await signUpWithEmail(data.email, data.password);
        }}
      />
    </Container>
  );
};
export default SignUpPage;
