import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import MintButton from "@/src/Components/Buttons/MintButton";
import Link from "next/link";

function WhiteList() {
  return (
    <Stack
      margin="3rem"
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <div id="joinWhitelist" style={{ margin: "1rem" }}>
        <Typography style={{ fontSize: "30px", fontWeight: "bold" }}>
          Launching 12.09
        </Typography>
      </div>

      <MintButton sx={{ margin: "2rem" }} />

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
            <Typography>
              {" "}
              Don't forget to check your newly minted NFT{" "}
              <Link
                href="https://opensea.io"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2567ff", textDecoration: "underline" }}
              >
                OpenSea
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
}

export default WhiteList;
