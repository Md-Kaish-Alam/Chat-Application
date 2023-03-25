import React from "react";
import {
  Stack,
  Dialog,
  DialogContent,
  DialogTitle,
  Box,
  Slide,
  Typography,
  Button,
  DialogActions,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ThemeDialog = ({ open, handleClose }) => {
  return (
    <>
      <Dialog
        fullWidth
        maxWidth={"xs"}
        open={open}
        onClose={handleClose}
        keepMounted
        TransitionComponent={Transition}
        sx={{ p: 4 }}
      >
        <DialogTitle variant={"article"}>Themes</DialogTitle>
        <DialogContent sx={{ mt: 4 }}>
          <Stack>
            <Typography>Themes are :</Typography>
          </Stack>
          <Stack
            direction="row"
            spacing={3}
            alignItems="center"
            justifyContent="center"
            sx= {{
                mt: 4
            }}
          >
            <Box
              sx={{
                height: "150px",
                width: "150px",
                backgroundColor: "#11101d",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
                <Typography>Dark Mode</Typography>
            </Box>
            <Box
              sx={{
                height: "150px",
                width: "150px",
                backgroundColor: "#ebeff5",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
                <Typography>Light Mode</Typography>
            </Box>
          </Stack>
        </DialogContent>
        <DialogActions>
            <Button variant="contained" onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ThemeDialog;
