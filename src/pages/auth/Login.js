import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link, Stack, Typography } from "@mui/material";
import AuthSocial from "../../Sections/auth/AuthSocial";
import LoginFrom from "../../Sections/auth/LoginFrom";

const Login = () => {
  return (
    <>
      <Stack
        spacing={2}
        sx={{
          mb: 5,
          position: "relative",
        }}
      >
        <Typography variant={"h6"}>Login to DI Chat Application</Typography>
        <Stack direction={"row"} spacing={0.5}>
          <Typography variant={"body2"}>New user?</Typography>
          <Link
            to="/auth/register"
            component={RouterLink}
            variant={"subtitle2"}
          >
            Create an account
          </Link>
        </Stack>
        {/* Login Form */}
        <LoginFrom />
        {/* Auth Social */}
        <AuthSocial />
      </Stack>
    </>
  );
};

export default Login;
