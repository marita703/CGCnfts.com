import React from "react";
import WhiteListForm from "@/src/Components/WhiteListForm/WhiteListForm";
import { Box, Stack } from "@mui/material";

function WhiteList() {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ height: "100vh" }}
    >
      <h2>Join the Whitelist</h2>
      <p>
        CGC NFTs are dropping soon and you’re one of the first to know. Fill out
        the following form to join the exclusive whitelist.
      </p>
      <WhiteListForm />
    </Stack>
  );
}

export default WhiteList;
