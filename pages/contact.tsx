import React from "react";
import Layout from "@/src/Components/Layout/Layout";
import ContactForm from "@/src/Components/ContactForm/ContactForm";
import { Box, Typography, useTheme } from "@mui/material";

function Contact() {
  const theme = useTheme();
  return (
    <Layout>
      <Box
        height="100vh"
        sx={{
          backgroundImage: "url(/Images/BackgroundImages/lines2.png)",
          [theme.breakpoints.down("md")]: {
            backgroundSize: "contain",
          },

          backgroundSize: "COVER",
          backgroundRepeatX: "no-repeat",
          backgroundRepeatY: "no-repeat",
          backgroundPositionY: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Typography variant="h3" sx={{ p: "2rem" }}>
          Contact us!
        </Typography>
        <ContactForm />
      </Box>
    </Layout>
  );
}

export default Contact;
