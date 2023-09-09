import React from "react";
import Layout from "@/src/Components/Layout/Layout";
import { Box, Grid, Stack } from "@mui/material";
import Lines from "../public/BackgroundImages/lines.png";

import OurRoots from "@/src/container/About/OurRoots";
import Header from "@/src/container/About/Header";
import NewsLetterBox from "@/src/Components/NewsLetterBox/NewsLetterBox";
import CarrouselPart from "@/src/container/About/CarrouselPart";
import VideoPartLisk from "@/src/container/About/VideoPartLisk";
import TeamPart from "@/src/container/About/TeamPart";
import Script from "next/script";

function about() {
  return (
    <Layout>
      {/* <!-- Google tag (gtag.js) --> */}

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
        <Header />
        <TeamPart />
        <OurRoots />
        <VideoPartLisk />
        <CarrouselPart />
        <NewsLetterBox />
      </Stack>
    </Layout>
  );
}

export default about;
