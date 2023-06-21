import {
  Box,
  Button,
  Grid,
  Hidden,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import { AlignHorizontalCenter } from "@mui/icons-material";

function HeaderMembership() {
  const theme = useTheme();
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        m: "3rem",
        [theme.breakpoints.up("md")]: {
          height: "70vh",
        },
      }}
    >
      <Grid container spacing="1rem">
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          sx={{ display: "flex" }}
          direction="row"
          justifyContent="center"
        >
          <Hidden smDown>
            <Image
              src="/Images/HeroImages/nftnew2.png"
              alt="Image"
              width={500}
              height={500}
              style={{ margin: "auto" }}
            />
          </Hidden>
          <Hidden smUp>
            <Image
              src="/Images/HeroImages/nftnew2.png"
              alt="Image"
              width={300}
              height={300}
              style={{ margin: "auto" }}
            />
          </Hidden>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          sx={{
            display: "flex",
            direction: "column",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Grid container spacing="2rem">
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
                alignContent="center"
                justifyContent="center"
              >
                <Typography
                  fontFamily="SourceCodePro-semibold"
                  sx={{
                    [theme.breakpoints.down("sm")]: {
                      fontSize: "25px",
                    },
                    [theme.breakpoints.up("sm")]: {
                      fontSize: "40px",
                    },
                    [theme.breakpoints.up("md")]: {
                      fontSize: "60px",
                    },
                  }}
                >
                  We’re glad you made it.
                </Typography>
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
