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

function Section3() {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        width: "90vw",
      }}
      direction="row"
      alignContent="center"
      justifyItems="center"
    >
      <Box
        sx={{
          width: "100%",
          mb: "2em",
          // backgroundImage: "url(/BackgroundImages/asteroides.png)",
          // backgroundRepeat: "repeat",
        }}
      >
        <Stack
          sx={{
            height: "100%",
            width: "100%",
            m: "3em",
            background: "linear-gradient(rgba(15,12,29,0) 22%,#0f0c1d)",

            // "linear-gradient(transparent, #5d0b55, #8e076c, transparent)",
            backdropFilter: "blur(1px)",
          }}
          // remember why you put this
          overflow="hidden"
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
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

            <Grid
              item
              xs={12}
              md={8}
              alignContent="center"
              justifyContent="center"
            >
              <Typography variant="body1" sx={{ p: "3rem" }}>
                CGC is the community that grants you access. The new version of
                the internet is for everyone. We offer a no-bounds, community
                for people who want to enter web3 but lack the means to get
                started.
              </Typography>
            </Grid>
            <Grid item xs={9} md={12}>
              <h2
                style={{
                  padding: "2rem",
                  background: "linear-gradient(to right, #3966FF, #FF599C) 1",
                  // webkitBackgroundClip: "text",
                  backgroundClip: "text",
                  fontFamily: "SourceCodePro-bold",
                  fontStyle: "oblique",
                  textTransform: "uppercase",
                  color: "primary.contrastText",
                }}
              >
                Why are we doing this?
              </h2>
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
                <Typography
                  variant="body1"
                  sx={{ p: "2rem" }}
                  fontWeight="bold"
                >
                  * The future of entrepreneurship is WEB3
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
                <Typography
                  variant="body1"
                  sx={{ p: "2rem" }}
                  fontWeight="bold"
                >
                  * The internet changed our lives. WEB3 will do too.
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
                  borderImage: "linear-gradient(to right, #efff39, #FF599C) 1",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ p: "2rem" }}
                  fontWeight="bold"
                >
                  * We need powerful new voices to drive the WEB3.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Stack>
  );
}

export default Section3;
