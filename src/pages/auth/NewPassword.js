import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link, Stack, Typography } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import NewPasswordFrom from "../../Sections/auth/NewPasswordForm";

const NewPassword = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h3">Reset Password</Typography>
        <Typography sx={{ color: "text.secondary" }}>
          Please set your new password ...
        </Typography>
      </Stack>

      {/* New Password Form */}
        <NewPasswordFrom />
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
    </>
  );
};

export default NewPassword;
