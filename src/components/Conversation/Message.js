import { Box, Stack } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import { MeadiaMsg, TextMsg, Timeline } from "./MsgTypes";

const Message = () => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              //Timeline
              return <Timeline el={el} />;

            case "msg":
              switch (el.subtype) {
                case "img":
                  // Image
                  return <MeadiaMsg el={el} />
                case "doc":
                  // document
                  break;
                case "link":
                  // link
                  break;
                case "reply":
                  // reply msg
                  break;
                default:
                  // text msg
                  return <TextMsg el={el} />
              }
              break;
            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;