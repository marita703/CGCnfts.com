import {
  Box,
  BoxProps,
  Container,
  Grid,
  Stack,
  StackProps,
  Typography,
  useTheme,
} from "@mui/material";

import React, { useEffect, useRef } from "react";
import VideoPartVictoria from "@/src/container/Home/VideoPartVictoria";

function Section3() {
  const theme = useTheme();
  return (
    <Stack
      sx={{}}
      direction="row"
      alignItems="center"
      alignContent="center"
      justifyItems="center"
      margin="auto"
    >
      <Grid
        container
        spacing={3}
        sx={{
          height: "100%",
          width: "100%",
          background: "linear-gradient(rgba(15,12,29,0) 22%,#0f0c1d)",
          backdropFilter: "blur(1px)",
        }}
        // remember why you put this
        overflow="hidden"
      >
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display: "flex",
            direction: "row",
            alignContent: "center",
            justifyContent: "center",
            p: "2rem",
            m: "0rem 2rem",
          }}
        >
          <h2>CGC: Your portal to Web3</h2>
        </Grid>

        <Grid item xs={12} md={12}>
          <Typography
            display="flex"
            flexDirection="row"
            justifyContent="center"
            variant="body1"
            sx={{ m: "1rem 2rem" }}
          >
            CGC is the community that grants you access. The new version of the
            internet is for everyone.
          </Typography>

          <Typography
            display="flex"
            flexDirection="row"
            justifyContent="center"
            variant="body1"
            sx={{ m: "2rem 2rem" }}
          >
            We offer a no-bounds, community for people who want to enter web3
            but lack the means to get started.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display: "flex",
            direction: "row",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              padding: "2rem",
              background: "linear-gradient(to right, #3966FF, #FF599C) 1",
              // webkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "primary.contrastText",
              display: "block",
            }}
          >
            Why are we doing this?
          </h2>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            m: "2rem",
            [theme.breakpoints.up("md")]: {
              m: "3rem 10rem",
            },
            [theme.breakpoints.up("lg")]: {
              m: "3rem 20rem",
            },
          }}
        >
          <VideoPartVictoria />
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              border: "3px solid transparent",
              borderRadius: "15px",
              background: "rgb(56 55 64 / 30%)",
              p: "1rem",
              boxShadow: "0 0 88px 8px rgba(255,74,169,.3)",
              m: "2rem",
              borderImage: "linear-gradient(to right, #39c7ff, #c259ff) 1",
            }}
          >
            <Typography variant="body2" sx={{ p: "1rem" }} fontWeight="bold">
              * The future of entrepreneurship is Web3
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              border: "3px solid transparent",
              borderRadius: "10px",
              background: "rgb(56 55 64 / 30%)",
              p: "1rem",
              boxShadow: "0 0 88px 8px rgba(77,229,255,.3)",
              m: "2rem",
              borderImage: "linear-gradient(to right, #3966FF, #FF599C) 1",
            }}
          >
            <Typography variant="body2" sx={{ p: "1rem" }} fontWeight="bold">
              * The internet changed our lives. Web3 will do too.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              border: "3px solid transparent",
              borderRadius: "6px",
              background: "rgb(56 55 64 / 30%)",
              p: "1rem",
              boxShadow: "0 0 88px 8px rgba(163, 77, 255, 0.3)",
              m: "2rem",
              borderImage: "linear-gradient(to right, #1eea4e, #FF599C) 1",
            }}
          >
            <Typography variant="body2" sx={{ p: "1rem" }} fontWeight="bold">
              * We need powerful new voices to drive the Web3.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default Section3;
