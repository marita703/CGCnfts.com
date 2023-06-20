import { Box, Button, Grid, Stack, useTheme } from "@mui/material";
import React from "react";
import Image from "next/image";

function HeaderMembership() {
  const theme = useTheme();
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        p: "4rem",
        [theme.breakpoints.up("md")]: {
          height: "100vh",
        },
      }}
    >
      <Grid container>
        <Grid item xs={12} md={4}>
          <Image
            src="/Images/HeroImages/nftnew.png"
            alt="Image"
            width={650}
            height={450}
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={8}
          sx={{
            display: "flex",
            direction: "column",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              md={12}
              sx={{
                display: "flex",
                alignContent: "center",
                direction: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Stack
                direction="column"
                alignContent="end"
                justifyContent="center"
              >
                <h1 style={{ fontSize: "3rem" }}>We’re glad you made it.</h1>
                <p>
                  JOIN THE GENESIS MEMBERSHIP: Limited access for the first ever
                  batch of Crypto Girls Club membership collection.
                </p>
              </Stack>
            </Grid>

            <Grid
              item
              xs={12}
              md={12}
              sx={{
                display: "flex",
                direction: "row",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <Stack direction="row" spacing={3} alignItems="center">
                <Button
                  href="#joinWhitelist"
                  sx={{
                    padding: "0.7rem 2rem",
                    borderRadius: "0.3em",
                    textTransform: "uppercase",
                    transition: "0.3s",
                    background: "linear-gradient(90deg, #2c6d60, #66b9dd)",
                    color: "black",
                    border: "none",
                    "&:hover": {
                      background: "#1c1927",
                      filter:
                        "drop-shadow(0px 8px 28px rgba(275, 74, 169, 02)) drop-shadow(0px 18px 88px rgba(275, 74, 169, 02) )",
                      border: `1px solid #3b2c34`,
                      color: "primary.light",
                    },
                  }}
                >
                  Join us
                </Button>

                <Button
                  href="/about"
                  target="_blank"
                  sx={{
                    padding: "0.7rem 2rem",
                    borderRadius: "0.3em",
                    textTransform: "uppercase",
                    transition: "0.3s",
                    border: "1px #56c366 solid",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#fff",
                      color: "#111",
                    },
                  }}
                >
                  Learn More
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default HeaderMembership;
