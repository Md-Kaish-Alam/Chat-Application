import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link, Stack, Typography } from "@mui/material";
import RegisterForm from "../../Sections/auth/RegisterForm";
import AuthSocial from "../../Sections/auth/AuthSocial";

const Register = () => {
  return (
    <>
      <Stack
        spacing={2}
        sx={{
          mb: 5,
          position: "relative",
        }}
      >
        <Typography variant={"h6"}>Get Started With Talk</Typography>
        <Stack direction={"row"} spacing={0.5}>
          <Typography variant={'body2'}>Already have an account ?</Typography>
          <Link component={RouterLink} to={"/auth/login"} variant={'subtitle2'}>
            Sign in
          </Link>
        </Stack>
        {/* Register Form */}
        <RegisterForm/>
        <Typography
            component={'div'}
            sx={{
                color: 'text.secondary',
                mt: 3,
                typography: 'caption',
                textAlign: 'center'
            }}
        >
            {'By Signining Up, I agree to  '}
            <Link underline={'always'} color={'text.primary'} >
                Terms of Service
            </Link>
            {' and '}
            <Link underline={'always'} color={'text.primary'} >
                Privacy Policy
            </Link>
        </Typography>

        <AuthSocial />
      </Stack>
    </>
  );
};

export default Register;
