import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Stack,
} from "@mui/material";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "../../components/hook-form/FormProvider";
import RHFTextFeild from "../../components/hook-form/RHFTextFeild";
import RHFAutocomplete from "../../components/hook-form/RHFAutocomplete";

const MEMBERS = ["name1", "name2", "name3", "name4", "name5"];

// Todo => Create reusable component

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CreateGroupForm = ({ handleClose }) => {
  const NewGroupSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    members: Yup.array().min(2, "Must have at least 2 members"),
  });

  const defaultValues = {
    title: "",
    members: [],
  };

  const methods = useForm({
    resolver: yupResolver(NewGroupSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    setError,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting, isValid },
  } = methods;

  const onSubmit = async (data) => {
    try {
      // API calls
      console.log("data", data);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFTextFeild name="title" label="Group Title" />
        <RHFAutocomplete
          name="members"
          label="Members"
          multiple
          freeSolo
          options={MEMBERS.map((option) => option)}
          ChipProps={{ size: "medium" }}
        />
        <Stack
          spacing={2}
          direction="row"
          alignItems="center"
          justifyContent="end"
        >
          <Button onClick={handleClose}>Cancle</Button>
          <Button type="submit" vartiant="contained">
            Create
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
};

const CreateGroup = ({ open, handleClose }) => {
  return (
    <>
      <Dialog
        fullWidth
        maxWidth="xs"
        open={open}
        TransitionComponent={Transition}
        keepMounted
        sx={{ p: 4 }}
        onClose={handleClose}
      >
        {/* title */}
        <DialogTitle sx={{ mb: 4}}>Create New Group</DialogTitle>
        {/* content */}
        <DialogContent>
          {/* Form */}
          <CreateGroupForm handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateGroup;
