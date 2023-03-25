import { Box, Divider, IconButton, Stack } from "@mui/material";
import { FacebookLogo, GithubLogo, GoogleLogo, InstagramLogo, TwitterLogo } from "phosphor-react";
import React from "react";

const AuthSocial = () => {
  return (
    <Box>
      <Divider
        sx={{
          my: 2.5,
          typography: "overline",
          color: "text.disabled",
          "&::before, &::after": {
            borderTopStyle: "dashed",
          },
        }}
      >
        or
      </Divider>
      <Stack direction={"row"} spacing={2} justifyContent={"center"}>
        <IconButton>
            <GoogleLogo color={'#df3e30'}/>
        </IconButton>
        <IconButton color={'inherit'}>
            <GithubLogo />
        </IconButton>
        <IconButton>
            <TwitterLogo color={'#1c9cea'}/>
        </IconButton>
        <IconButton>
            <InstagramLogo color={'#df3e30'}/>
        </IconButton>
        <IconButton >
            <FacebookLogo color={'#1c9cea'}/>
        </IconButton>
      </Stack>
    </Box>
  );
};

export default AuthSocial;
