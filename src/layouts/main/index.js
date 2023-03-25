import React from "react";
import { Container, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import logo from "../../assets/Images/logo.png";

const MainLayout = () => {
  return (
    <>
      <Container
        sx={{
          mt: 2,
          mb: 0,
          borderRadius: 2,
          p: 5,
          boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
          transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
          "&:hover": {
            boxShadow:
              "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
          },
        }}
        maxWidth={"sm"}
      >
        <Stack spacing={5}>
          <Stack
            sx={{ width: "100%" }}
            direction={"column"}
            alignItems={"center"}
          >
            <img
              style={{ height: 300, width: 300, borderRadius: "50%",  }}
              src={logo}
              alt={"Digital Ipsum"}
            />
          </Stack>
        </Stack>
        <Outlet />
      </Container>
    </>
  );
};

export default MainLayout;
