import { Box, Button, Stack } from "@mui/material";
import React from "react";

function HeaderMembership() {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ p: "4rem" }}
    >
      <Stack direction="row">
        <h1 style={{ fontSize: "3rem" }}>We’re glad you made it.</h1>
        <span
          style={{
            width: "0.4em",
            height: "6em",
            background:
              "linear-gradient(0deg, #c71c81 0%, #1c22c7 50%, #7e1679 100%)",
            filter: "drop-shadow(0 0 0.5em #c71c81)",
            margin: "0 2em",
          }}
        ></span>
        <p>
          JOIN THE GENESIS MEMBERSHIP: Limited access for the first ever batch
          of Crypto Girls Club membership collection.
        </p>
      </Stack>
      <Stack direction="row">
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
            "&hover": {
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
          }}
        >
          Learn More
        </Button>
      </Stack>
    </Stack>
  );
}

export default HeaderMembership;
