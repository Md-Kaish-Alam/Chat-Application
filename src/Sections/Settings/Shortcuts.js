import React from "react";
import {
  Stack,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Slide,
  Typography,
  Button,
  DialogActions,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const list = [
  {
    key: 0,
    title: "Mark as unread",
    combination: ["Win", "Shift", "U"],
  },
  {
    key: 1,
    title: "Mute",
    combination: ["Win", "Shift", "M"],
  },
  {
    key: 2,
    title: "Archive Chat",
    combination: ["Win", "Shift", "E"],
  },
  {
    key: 3,
    title: "Delete Chat",
    combination: ["Win", "Shift", "D"],
  },
  {
    key: 4,
    title: "Pin Chat",
    combination: ["Win", "Shift", "P"],
  },
  {
    key: 5,
    title: "Search",
    combination: ["Win", "F"],
  },
  {
    key: 6,
    title: "Search Chat",
    combination: ["Win", "Shift", "F"],
  },
  {
    key: 7,
    title: "Next Chat",
    combination: ["Win", "N"],
  },
  {
    key: 8,
    title: "Next Step",
    combination: ["Ctrl", "Tab"],
  },
  {
    key: 9,
    title: "Previous Step",
    combination: ["Ctrl", "Shift", "Tab"],
  },
  {
    key: 10,
    title: "New Group",
    combination: ["Win", "Shift", "N"],
  },
  {
    key: 11,
    title: "Profile & About",
    combination: ["Win", "P"],
  },
  {
    key: 12,
    title: "Increase speed of voice message",
    combination: ["Shift", "."],
  },
  {
    key: 13,
    title: "Decrease speed of voice message",
    combination: ["Shift", ","],
  },
  {
    key: 14,
    title: "Settings",
    combination: ["Shift", "S"],
  },
  {
    key: 15,
    title: "Emoji Panel",
    combination: ["Win", "E"],
  },
  {
    key: 16,
    title: "Sticker Panel",
    combination: ["Win", "S"],
  },
];

const Shortcuts = ({ open, handleClose }) => {
  return (
    <>
      <Dialog
        fullWidth
        maxWidth={"md"}
        open={open}
        onClose={handleClose}
        keepMounted
        TransitionComponent={Transition}
        sx={{ p: 4 }}
      >
        <DialogTitle variant={"article"}>Keyboard Shortcuts</DialogTitle>
        <DialogContent sx={{ mt: 4 }}>
          <Grid container spacing={3}>
            {list.map(({ key, title, combination }) => (
              <Grid key={key} container item xs={6}>
                <Stack
                  sx={{ width: "100%" }}
                  justifyContent={"space-between"}
                  spacing={3}
                  direction={"row"}
                  alignItems={"center"}
                >
                  <Typography variant={"caption"} sx={{ fontSize: 14 }}>
                    {title}
                  </Typography>
                  <Stack spacing={2} direction={"row"}>
                    {combination.map((el) => {
                      return (
                        <Button
                          disabled
                          variant={"contained"}
                          sx={{ color: "#212121" }}
                        >
                          {el}
                        </Button>
                      );
                    })}
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
            <Button variant={'contained'} onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Shortcuts;
