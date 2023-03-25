import React from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "../../components/hook-form/FormProvider";
import {
  Alert,
  Button,
  Stack,
} from "@mui/material";
import RHFTextFeild from "../../components/hook-form/RHFTextFeild";

const ResetPasswordFrom = () => {
  
  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is Required")
      .email("Email must a valid email address"),
  });

  const defaultValues = {
    email: "example@1234.com",
  };

  const methods = useForm({
    resolver: yupResolver(ResetPasswordSchema),
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
        Send Request
      </Button>
      </Stack>
    </FormProvider>
  );
};

export default ResetPasswordFrom;
