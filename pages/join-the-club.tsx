import Layout from "@/src/Components/Layout/Layout";
import React from "react";
import HeaderMembership from "@/src/container/Membership/HeaderMembership";
import { Stack } from "@mui/material";
import NFTs from "@/src/container/Membership/NFTs";
import Benefits from "@/src/container/Membership/Benefits";
import WhiteList from "@/src/container/Membership/WhiteList";

function Membership() {
  return (
    <Layout>
      <Stack overflow="hidden">
        <WhiteList />
        <NFTs />
        <Benefits />
      </Stack>
    </Layout>
  );
}

export default Membership;
