import Footer from "@/src/Components/Footer";
import Navbar from "@/src/Components/Navbar";
import Section1 from "@/src/container/Home/Section1";
import Section2 from "@/src/container/Home/Section2";
import { Box } from "@mui/material";
import React from "react";

function Home() {
  return (
    <Box>
      <Navbar />

      <Section1 />
      <Section2 />

      <Footer />
    </Box>
  );
}

export default Home;
