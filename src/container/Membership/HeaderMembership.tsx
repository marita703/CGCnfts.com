import { Box, Stack } from "@mui/material";
import React from "react";

function HeaderMembership() {
  return (
    <Box>
      <Stack direction="row">
        <h1>We’re glad you made it.</h1>
        <span></span>
        <p>
          JOIN THE GENESIS MEMBERSHIP: Limited access for the first ever batch
          of Crypto Girls Club membership collection.
        </p>
      </Stack>
      <div>
        <a href="#JoinUs">Join us</a>

        <a href="https://www.cryptogirlsclub.org/about" target="_blank">
          Learn More
        </a>
      </div>
    </Box>
  );
}

export default HeaderMembership;
