import React from "react";
import WhiteListForm from "@/src/Components/WhiteListForm/WhiteListForm";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import DiscordLogo from "../../../public/Images/DiscordLogo/photo_5381914521393813540_y.jpg";

function WhiteList() {
  return (
    <Stack
      margin="3rem"
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={2}
    >
      <div id="joinWhitelist">
        <h2>Launching 12.09</h2>
      </div>

      <Stack>
        <Grid container>
          <Grid item xs={6}>
            <Typography textAlign="end">Launch date: &nbsp;</Typography>
          </Grid>
          <Grid xs={6}>
            <Typography>12.09.2023</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography textAlign="end"> Allowlist: &nbsp;</Typography>
          </Grid>
          <Grid xs={6}>
            <Typography>16:00 CET</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography textAlign="end"> Main mint: &nbsp;</Typography>
          </Grid>
          <Grid xs={6}>
            <Typography>17:00 CET</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography textAlign="end"> Price: &nbsp;</Typography>
          </Grid>
          <Grid xs={6}>
            <Typography>99 MATIC</Typography>
          </Grid>
          <Grid xs={12} textAlign="center" sx={{ mt: "1rem" }}>
            <Typography> Come back to this page later!</Typography>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
}

export default WhiteList;
