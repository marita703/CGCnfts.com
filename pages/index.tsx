import Footer from "@/src/Components/Footer";
import Navbar from "@/src/Components/Navbar";
import Section1 from "@/src/container/Home/Section1";
import Section2 from "@/src/container/Home/Section2";
import Section3 from "@/src/container/Home/Section3";
import { Box } from "@mui/material";
import React from "react";

function Home() {
  return (
    <Box>
      <Navbar />

      {/* the property overflow = hidden ,is for the component not to start creating so much space on the x scroll bar */}
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <Section1 />
        <Section2 />
        <Section3 />
      </Box>

      <Footer />
    </Box>
  );
}

export default Home;
