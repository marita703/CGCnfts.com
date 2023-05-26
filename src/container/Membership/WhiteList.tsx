import React from "react";
import WhiteListForm from "@/src/Components/WhiteListForm/WhiteListForm";
import { Box, Grid, Stack } from "@mui/material";

function WhiteList() {
  return (
    <Grid container spacing={4} sx={{ m: "3rem" }}>
      <Grid item xs={12} md={12}>
        <h2>Join the Whitelist</h2>
      </Grid>
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
  );
}

export default WhiteList;
