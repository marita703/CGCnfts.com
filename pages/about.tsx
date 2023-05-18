import React from "react";
import Layout from "@/src/Components/Layout/Layout";
import { Box, Grid, Stack } from "@mui/material";
import Lines from "../public/BackgroundImages/lines.png";

function about() {
  return (
    <Layout>
      <Stack
        sx={{
          direction: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container sx={{}}></Grid>
      </Stack>
    </Layout>
  );
}

export default about;
