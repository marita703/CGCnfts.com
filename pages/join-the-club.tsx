import Layout from "@/src/Components/Layout/Layout";
import React from "react";
import HeaderMembership from "@/src/container/Membership/HeaderMembership";
import { Stack } from "@mui/material";
import NFTs from "@/src/container/Membership/NFTs";
import Benefits from "@/src/container/Membership/Benefits";
import WhiteList from "@/src/container/Membership/MintModule";
import Script from "next/script";

function Membership() {
  return (
    <Layout>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-BLGEL8RXRV"
      />
      <Script id="google tag">
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-BLGEL8RXRV');`}
      </Script>
      <Stack overflow="hidden">
        <WhiteList />
        <NFTs />
        <Benefits />
      </Stack>
    </Layout>
  );
}

export default Membership;
