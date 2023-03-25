import React, { useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "../../components/hook-form/FormProvider";
import {
  Alert,
  Button,
  IconButton,
  InputAdornment,
  Link,
  Stack,
} from "@mui/material";
import RHFTextFeild from "../../components/hook-form/RHFTextFeild";
import { Eye, EyeSlash } from "phosphor-react";
import {Link as RouterLink} from 'react-router-dom'

const LoginFrom = () => {
  const [showPassword, setShowPassword] = useState();

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is Required")
      .email("Email must a valid email address"),
    password: Yup.string().required("Password is Required"),
  });

  const defaultValues = {
    email: "example@1234.com",
    password: "@3asfs874./;[iuiarjk",
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    try {
      // Submit Data to backend
    } catch (error) {
      console.log(error);
      reset();
      setError("afterSubmit ", {
        ...error,
        message: error.message,
      });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && (
          <Alert severity={"error"}>{errors.afterSubmit.message}</Alert>
        )}

        <RHFTextFeild name="email" label="Email address" />
        <RHFTextFeild
          name="password"
          label="password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Stack alignItems={"flex-end"} sx={{ my: 2 }}>
        <Link
          component={RouterLink}
          to='/auth/reset-password'
          variant={"body2"}
          color={"inherit"}
          underline={"always"}
          sx={{ cursor: "pointer" }}
        >
          Forgot password ?
        </Link>
      </Stack>
      <Button
        fullWidth
        color={"inherit"}
        size={"large"}
        type={"submit"}
        variant={"contained"}
        sx={{
          bgcolor: "text.primary",
          color: (theme) =>
            theme.palette.mode === "light" ? "common.white" : "grey.800",
          "&:hover": {
            bgcolor: "text.primary",
            color: (theme) =>
              theme.palette.mode === "light" ? "common.white" : "grey.800",
          },
        }}
      >
        Login
      </Button>
    </FormProvider>
  );
};

export default LoginFrom;
