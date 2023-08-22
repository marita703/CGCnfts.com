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
    >
      <div id="joinWhitelist">
        <h2>Launching Soon</h2>
      </div>

      <div
        style={{
          position: "relative",
          padding: "56.25% 0 0 0",
          width: "100%",
          height: "100%",
        }}
      >
        <iframe
          src="https://mint.webmint.io/mint-module/cgc-membership"
          frameBorder="0px"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "3px solid transparent",
            borderRadius: "20px",
          }}
        />
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
