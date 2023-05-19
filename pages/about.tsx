import React from "react";
import Layout from "@/src/Components/Layout/Layout";
import { Box, Grid, Stack } from "@mui/material";
import Lines from "../public/BackgroundImages/lines.png";
import ContentBoxAbout from "@/src/Components/ContentBox/ContentBoxAbout";
import OurRoots from "@/src/container/About/OurRoots";
import Header from "@/src/container/About/Header";

function about() {
  return (
    <Layout>
      <Header />
      <OurRoots />
    </Layout>
  );
}

export default about;
