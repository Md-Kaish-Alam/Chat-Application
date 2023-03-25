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


const NewPasswordFrom = () => {
  const [showPassword, setShowPassword] = useState();

  const NewPasswordSchema = Yup.object().shape({
    newPassword: Yup.string()
      .min(6, "Password must be at least 6 Characters...")
      .required("Password is Required"),
    confirmPassword: Yup.string()
      .required("Password is Required")
      .oneOf([Yup.ref("newPassword"), null], "Password must match..."),
  });

  const defaultValues = {
    newPassword: "",
    confirmPassword: "",
  };

  const methods = useForm({
    resolver: yupResolver(NewPasswordSchema),
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

        <RHFTextFeild
          name="newPassword"
          label="New Password"
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
        <RHFTextFeild
          name="confirmPassword"
          label="Confirm Password"
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
        Reset password
      </Button>
      </Stack>
    </FormProvider>
  );
};

export default NewPasswordFrom;
