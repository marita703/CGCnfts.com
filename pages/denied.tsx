import React from "react";
import Layout from "@/src/Components/Layout/Layout";
import { Stack } from "@mui/material";

function denied() {
  return (
    <Layout>
      <Stack
        overflow="hidden"
        alignContent="center"
        justifyContent="center"
        alignItems="center"
      >
        <h1>Access Denied</h1>
        <hr />
        <h2>
          Please Connect a Wallet containing one of CrytoGirlsClub NFTs in order
          to regain access.
        </h2>
      </Stack>
    </Layout>
  );
}

export default denied;
