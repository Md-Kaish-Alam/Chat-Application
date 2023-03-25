import React, {useState} from "react";
import {
  Box,
  Divider,
  IconButton,
  Stack,
  Link,
  Typography,
} from "@mui/material";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";
import { MagnifyingGlass, Plus } from "phosphor-react";
import { useTheme } from "@mui/material/styles";
import { CallLogsElement } from "../../components/CallElement";
import { CallLogs } from "../../data";
import StartCall from "../../Sections/main/StartCall";

const Call = () => {
  const theme = useTheme();
  const [openDialog, setOpenDialog] = useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <>
      <Stack
        direction={"row"}
        sx={{
          width: "100%",
        }}
      >
        {/* left */}
        <Box
          sx={{
            height: "100vh",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? "#f8faff"
                : theme.palette.background,
            width: 320,
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          }}
        >
          <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
            <Stack>
              <Typography variant={"h5"}>Call Logs</Typography>
            </Stack>
            <Stack width={"100%"}>
              <Search>
                <SearchIconWrapper>
                  <MagnifyingGlass color="#709CE6" />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder={`Search...`}
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Stack>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography
                variant={"subtitle2"}
                component={Link}
                sx={{ cursor: "pointer" }}
              >
                Start New Conversation
              </Typography>
              <IconButton
                onClick={() => {
                  setOpenDialog(true);
                }}
              >
                <Plus style={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Stack>
            <Divider />
            <Stack
              spacing={3}
              sx={{ flexGrow: 1, overflowY: "scroll", height: "100%" }}
            >
              <Stack spacing={2.4}>
                {/* Call logs */}
                {CallLogs.map((el) => (
                  <CallLogsElement { ...el} />
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Box>

        {/* right */}

        {/* // Todo => Reuse converstation component */}
      </Stack>

    { openDialog && <StartCall open={openDialog} handleClose={handleCloseDialog}/> }
    </>
  );
};

export default Call;
