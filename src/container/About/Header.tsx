import { Box, Button, Grid, Stack, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import React from "react";

function Header() {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        direction: "column",
        justifyContent: "center",
        alignContent: "center",
        m: "3rem",
      }}
    >
      <Grid container spacing={1} marginBottom="2rem">
        <Grid item xs={12} sm={12} md={12} lg={5}>
          <Box
            sx={{
              m: "auto",
              backgroundImage: "url(/Images/ContentImages/pixelwoman.png)",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              [theme.breakpoints.down("md")]: {
                height: "25rem",
                width: "25rem",
              },
              height: "40rem",
              width: "40rem",
            }}
          ></Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={7}>
          <Stack
            direction="column"
            sx={{ mt: "15rem", [theme.breakpoints.down("lg")]: { mt: "1rem" } }}
          >
            <Link
              href="/membership"
              style={{
                textAlign: "left",
                color: "#2567ff",
                textDecoration: "none",
                marginTop: "1rem",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Enter a new version of the internet
            </Link>
            <h1 style={{ textTransform: "uppercase" }}>
              Empowering your future{" "}
            </h1>
            <Typography
              sx={{
                mt: "1rem",
                fontSize: "25px",
                [theme.breakpoints.down("md")]: {
                  fontSize: "16px",
                },
                textAlign: "justify",
              }}
            >
              Started in Berlin and now across Europe - CGC creates an inclusive
              membership to help you shift your mindset, career and focus to the
              internet of the future.
            </Typography>
            <Link
              href="https://t.me/joinchat/n6z0tNyZC3IxYmU0"
              style={{
                textAlign: "left",
                color: "#e277ae",
                textDecoration: "underline",
                marginTop: "1rem",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Join our Telegram to join our community
            </Link>
          </Stack>
        </Grid>
      </Grid>
      <hr
        style={{
          border: `3px solid ${theme.palette.primary.main} `,
          borderImage: "linear-gradient(to right, #3966FF, #FF599C) 1",
        }}
      />
    </Stack>
  );
}

export default Header;
