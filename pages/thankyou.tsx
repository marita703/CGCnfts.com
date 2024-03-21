import Layout from "@/src/Components/Layout/Layout";
import { Stack } from "@mui/material";
import React from "react";

function thankyou() {
  return (
    <Layout>
      <Stack
        direction="column"
        alignContent="center"
        justifyContent="center"
        alignItems="center"
        sx={{ mt: "5rem", ml: "auto", mr: "auto", mb: "5rem", p: "1rem" }}
      >
        <h1>Thank you!</h1>
        <p style={{ fontSize: "20px", textAlign: "center" }}>
          We have received your information, you will be hearing from us soon.
        </p>
      </Stack>
    </Layout>
  );
}

export default thankyou;
