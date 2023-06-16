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
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Stack direction="row" spacing={3} alignItems="center">
                <Button
                  href="#JoinUs"
                  sx={{
                    padding: "0.7rem 2rem",
                    borderRadius: "0.3em",
                    textTransform: "uppercase",
                    transition: "0.3s",
                    background: "linear-gradient(90deg, #c71c81, #0798d6)",
                    color: "black",
                    border: "none",
                    "&:hover": {
                      background: "#e277ae",
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
                    border: "1px #e277ae solid",
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
