import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import React from "react";

function OurRoots() {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        direction: "column",
        alignItems: "center",
        justifyContent: "center",
        m: "3rem",
      }}
    >
      <h2 style={{ marginBottom: "2rem" }}>Our Roots</h2>
      <Typography
        sx={{
          textAlign: "justify",
          m: "2rem",
          mb: "4rem",
          [theme.breakpoints.down("md")]: {
            fontSize: "16px",
          },
        }}
      >
        Crypto Girls Club is a community driven by the collective belief that,
        together, we can shape the future of entrepreneurship, the internet and
        society as a whole. But to get there, we need leaders, thinkers and
        builders like never before. In short, we need you. Let’s break the cycle
        of inequality, together. Here’s how we’ll support you to bring the
        change we need in Web3.
      </Typography>

      <Grid container spacing={10} sx={{}}>
        <Grid item xs={12} md={4}>
          <Stack justifyContent="center" alignContent="center" direction="row">
            <Box
              height="30rem"
              width="30rem"
              sx={{
                backgroundImage: "url(/ContentImages/blockchain.png)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></Box>
          </Stack>
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container sx={{}} spacing={4}>
            <Grid item xs={12} md={6}>
              <Stack
                sx={{
                  border: "1px solid transparent",
                  borderRadius: "15px",
                  background: "rgb(56 55 64 / 30%)",
                  p: "1rem",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <h5
                  style={{
                    borderLeft: "2px solid rgb(249 105 224)",
                    padding: "0.5rem",
                  }}
                >
                  Exclusive discounts for Web3 education courses{" "}
                </h5>
                <p
                  style={{
                    padding: "0.2rem",
                    marginTop: "0.3rem",
                    fontSize: "14px",
                  }}
                >
                  Stay relevant. Bring your A-game. Change the world.{" "}
                </p>
              </Stack>
            </Grid>

            <Grid item xs={12} md={6} sx={{}}>
              <Stack
                sx={{
                  border: "1px solid transparent",
                  borderRadius: "15px",
                  background: "rgb(56 55 64 / 30%)",
                  p: "1rem",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <h5
                  style={{
                    borderLeft: "2px solid rgb(58 13 181)",
                    padding: "0.5rem",
                  }}
                >
                  Mentoring & matchmaking schemes
                </h5>
                <p
                  style={{
                    padding: "0.2rem",
                    marginTop: "0.3rem",
                    fontSize: "14px",
                  }}
                >
                  Land your dream job. Meet your future co-founder. Get alpha
                  from the best.
                </p>
              </Stack>
            </Grid>

            <Grid item xs={12} md={6} sx={{}}>
              <Stack
                sx={{
                  border: "1px solid transparent",
                  borderRadius: "15px",
                  background: "rgb(56 55 64 / 30%)",
                  p: "1rem",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <h5
                  style={{
                    borderLeft: "2px solid rgb    (250 171 180)",
                    padding: "0.5rem",
                  }}
                >
                  We’re one of Europe’s biggest Web3 communities{" "}
                </h5>
                <p
                  style={{
                    padding: "0.2rem",
                    marginTop: "0.3rem",
                    fontSize: "14px",
                  }}
                >
                  Member events in Europe and beyond. Share your wins. Join the
                  family.
                </p>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} sx={{}}>
              <Stack
                sx={{
                  border: "1px solid transparent",
                  borderRadius: "15px",
                  background: "rgb(56 55 64 / 30%)",
                  p: "1rem",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <h5
                  style={{
                    borderLeft: "2px solid rgb(251 22 232)",
                    padding: "0.5rem",
                  }}
                >
                  Keeping you connected IRL & URL
                </h5>
                <p
                  style={{
                    padding: "0.2rem",
                    marginTop: "0.3rem",
                    fontSize: "14px",
                  }}
                >
                  Access to coworking spaces. IRL meetups. Extremely online -
                  with immaculate vibes. So go on, grab your membership card and
                  claim your exclusive benefits. Because you deserve them.
                </p>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default OurRoots;
