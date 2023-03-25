import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link, Stack, Typography } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import ResetPasswordFrom from "../../Sections/auth/ResetPasswordForm";

const ResetPassword = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant={"h3"} paragraph>
          Forgot Your Password ?
        </Typography>
        <Typography sx={{ color: "text.secondary" }}>
          Please enter the email associated with your account and We will email
          you a link to reset your password...
        </Typography>

        {/* Reset Password form  */}
        <ResetPasswordFrom />

        <Link
          component={RouterLink}
          to="/auth/login"
          color={"inherit"}
          variant={"subtitle2"}
          sx={{
            mt: 3,
            mx: "auto",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <CaretLeft />
          Retrun to Sign In
        </Link>
      </Stack>
    </>
  );
};

export default ResetPassword;
