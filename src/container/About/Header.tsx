import { Hidden, Stack, Typography } from "@mui/material";
import React from "react";

function Header() {
  return (
    <Stack direction="row" justifyContent="center" alignContent="center">
      <Hidden mdDown>
        <Typography variant="h3" sx={{ p: "4rem" }}>
          Started in Berlin and now across Europe - CGC creates an inclusive
          membership to help you shift your mindset, career and focus to the
          internet of the future.
        </Typography>
      </Hidden>
      <Hidden mdUp>
        <Typography variant="h5" sx={{ p: "4rem" }}>
          Started in Berlin and now across Europe - CGC creates an inclusive
          membership to help you shift your mindset, career and focus to the
          internet of the future.
        </Typography>
      </Hidden>
    </Stack>
  );
}

export default Header;
