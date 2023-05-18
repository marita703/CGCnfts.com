import React, { ReactNode } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Box } from "@mui/material";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <Box sx={{ position: "relative", overflow: "hidden" }}>{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;
