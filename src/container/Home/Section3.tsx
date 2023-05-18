import {
  Box,
  BoxProps,
  Container,
  Grid,
  Stack,
  StackProps,
  Typography,
} from "@mui/material";
import Item from "../../Components/Card/Item";
import React, { useEffect, useRef } from "react";

function Section3() {
  return (
    <Stack
      sx={{ height: "100vh", width: "90vw" }}
      direction="row"
      alignContent="center"
      justifyItems="center"
    >
      <Box sx={{ height: "70% ", width: "100%", mb: "2em" }}>
        <Stack
          sx={{
            height: "100%",
            width: "100%",
            m: "3em",
            background:
              "linear-gradient(transparent, #5d0b55, #8e076c, transparent)",
            backdropFilter: "blur(10px)",
          }}
          // remember why you put this
          overflow="hidden"
        >
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography
                variant="h3"
                sx={{ p: "3rem" }}
                alignContent="center"
                justifyContent="center"
                fontWeight="bold"
              >
                CGC: Your portal to web3
              </Typography>
            </Grid>

            <Grid item xs={8} alignContent="center" justifyContent="center">
              <Typography variant="body1" sx={{ p: "3rem" }}>
                CGC is the community that grants you access. The new version of
                the internet is for everyone. We offer a no-bounds, community
                for people who want to enter web3 but lack the means to get
                started.
              </Typography>
            </Grid>
          </Grid>

          <Stack direction="row" justifyContent="space-between">
            <Typography
              sx={{
                p: "2rem",
              }}
              variant="h2"
              color="primary.contrastText"
              fontFamily="SourceCodePro-bold"
            >
              Why are we doing this?
            </Typography>
          </Stack>

          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography variant="h4" sx={{ p: "2rem" }} fontWeight="bold">
                The future of entrepreneurship is web3
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h4" sx={{ p: "2rem" }} fontWeight="bold">
                The internet changed our lives. Web3 will do too.
              </Typography>
            </Grid>
            <Grid item xs={4} sx={{ background: "secondary.dark" }}>
              <Typography variant="h4" sx={{ p: "2rem" }} fontWeight="bold">
                We need powerful new voices to drive the web3.
              </Typography>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Stack>
  );
}

export default Section3;
