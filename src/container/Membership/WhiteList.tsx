import React from "react";
import WhiteListForm from "@/src/Components/WhiteListForm/WhiteListForm";
import { Box, Grid, Stack } from "@mui/material";

function WhiteList() {
  return (
    <Stack
      margin="3rem"
      direction="column"
      spacing={10}
      alignItems="center"
      justifyContent="center"
    >
      <div id="joinWhitelist">
        <h2>Join the Whitelist</h2>
      </div>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4} alignContent="center">
          <p>
            CGC NFTs are dropping soon and you’re one of the first to know. Fill
            out the following form to join the exclusive whitelist.
          </p>
        </Grid>
        <Grid item xs={12} md={8}>
          <WhiteListForm formStyles={{ width: "100%" }} />
        </Grid>
      </Grid>
    </Stack>
  );
}

export default WhiteList;
