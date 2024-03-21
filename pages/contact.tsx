import React from "react";
import Layout from "@/src/Components/Layout/Layout";
import ContactForm from "@/src/Components/ContactForm/ContactForm";
import { Box, Typography, useTheme } from "@mui/material";
import Script from "next/script";

function Contact() {
  const theme = useTheme();
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
