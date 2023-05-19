import React from "react";
import Layout from "@/src/Components/Layout/Layout";
import ContactForm from "@/src/Components/ContactForm/ContactForm";
import { Box, useTheme } from "@mui/material";

function Contact() {
  const theme = useTheme();
  return (
    <Layout>
      <Box
        height="100vh"
        sx={{
          backgroundImage: "url(/BackgroundImages/lines2.png)",
          [theme.breakpoints.down("md")]: {
            backgroundSize: "contain",
          },

          backgroundSize: "cover",
          backgroundRepeatX: "no-repeat",
          backgroundRepeatY: "no-repeat",
          backgroundPositionY: "bottom",
        }}
      >
        <ContactForm />
      </Box>
    </Layout>
  );
}

export default Contact;
