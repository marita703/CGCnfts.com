import React from "react";
import Layout from "@/src/Components/Layout/Layout";
import { Stack } from "@mui/material";

function welcome() {
  return (
    <Layout>
      <Stack
        overflow="hidden"
        alignContent="center"
        justifyContent="center"
        alignItems="center"
      >
        <h1>Welcome!</h1>
        <h2> You are Connected with Address</h2>
      </Stack>
    </Layout>
  );
}

export default welcome;
