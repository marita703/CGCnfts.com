import Layout from "@/src/Components/Layout/Layout";
import React from "react";
import HeaderMembership from "@/src/container/Membership/HeaderMembership";
import { Stack } from "@mui/material";
import NFTs from "@/src/container/Membership/NFTs";
import Benefits from "@/src/container/Membership/Benefits";

function Membership() {
  return (
    <Layout>
      <Stack overflow="hidden">
        <HeaderMembership />
        <NFTs />
        <Benefits />
      </Stack>
    </Layout>
  );
}

export default Membership;
