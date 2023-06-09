import { Widgets } from "@mui/icons-material";
import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import React from "react";

function OurRoots() {
  const theme = useTheme();
  return (
    <>
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
            wordBreak: "break-word",
            whiteSpace: "break-spaces",
            mb: "1rem",
            [theme.breakpoints.down("md")]: {
              fontSize: "16px",
            },
          }}
        >
          Crypto Girls Club is a community driven by the collective belief that,
          together, we can shape the future of entrepreneurship, the internet
          and society as a whole.
        </Typography>
        <Typography
          sx={{
            textAlign: "justify",
            wordBreak: "break-word",
            whiteSpace: "break-spaces",
            mb: "4rem",
            [theme.breakpoints.down("md")]: {
              fontSize: "16px",
            },
          }}
        >
          But to get there, we need leaders, thinkers and builders like never
          before. In short, we need you. Let’s break the cycle of inequality,
          together. Here’s how we’ll support you to bring the change we need in
          Web3.
        </Typography>

        <Grid container spacing={10} sx={{}}>
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
                    animationDuration: "0.3s",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
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
                    animationDuration: "0.3s",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <h5
                    style={{
                      borderLeft: "2px solid rgb(58 13 181)",
                      padding: "0.5rem",
                    }}
                  >
                    Mentoring & matchmaking
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
                    animationDuration: "0.3s",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <h5
                    style={{
                      borderLeft: "2px solid #f8cab3",
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
                    Member events in Europe and beyond. Share your wins. Join
                    the family.
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
                    animationDuration: "0.3s",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
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
                    with immaculate vibes. So go on, grab your membership card
                    and claim your exclusive benefits. Because you deserve them.
                  </p>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack
              justifyContent="center"
              alignContent="center"
              direction="row"
            >
              <Box
                sx={{
                  height: "30rem",
                  width: "30rem",
                  backgroundImage: "url(/Images/ContentImages/blockchain.png)",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  [theme.breakpoints.down("md")]: {
                    height: "15rem",
                    width: "15rem",
                  },
                }}
              ></Box>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
      <hr
        style={{
          border: `3px solid ${theme.palette.primary.main} `,
          borderImage: "linear-gradient(to right, #3966FF, #FF599C) 1",
          margin: "3rem",
        }}
      />
    </>
  );
}

export default OurRoots;
