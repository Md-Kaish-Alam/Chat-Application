import React, { useCallback, useState } from "react";
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
import { Link as RouterLink } from "react-router-dom";

const ProfileForm = () => {
  const LoginSchema = Yup.object().shape({
    name: Yup.string().required("Name is Required"),
    about: Yup.string().required("About is Required"),
    avatarUrl: Yup.string().required("Avatar is Required").nullable(true),
  });

  const defaultValues = {
    name: "",
    about: "",
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    control,
    setValue,
    setError,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = methods;

  const values = watch();

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue("avatarUrl", newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );

  const onSubmit = async (data) => {
    try {
      // Submit Data to backend
      console.log("data", data);
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
        <Stack spacing={3}>
          {!!errors.afterSubmit && (
            <Alert severity={"error"}>{errors.afterSubmit.message}</Alert>
          )}

          <RHFTextFeild
            name="name"
            label="Write your name here..."
            helperText="This name is visible to your contacts."
          />

          <RHFTextFeild
            multiline
            rows={3}
            maxRows={5}
            name="about"
            label="Here you can write about yourself..."
          />
        </Stack>
        <Stack direction="row" justifyContent="flex-end">
          <Button color="primary" size="large" type="submit" variant="outlined">
            Save
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
};

export default ProfileForm;
