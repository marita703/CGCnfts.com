import React from "react";
import Layout from "@/src/Components/Layout/Layout";
import { Box, Grid, Stack } from "@mui/material";
import Lines from "../public/BackgroundImages/lines.png";

import OurRoots from "@/src/container/About/OurRoots";
import Header from "@/src/container/About/Header";
import NewsLetterBox from "@/src/Components/NewsLetterBox/NewsLetterBox";

function about() {
  return (
    <Layout>
      <Stack overflow="hidden">
        <Header />
        <OurRoots />
        <NewsLetterBox />
      </Stack>
    </Layout>
  );
}

export default about;
