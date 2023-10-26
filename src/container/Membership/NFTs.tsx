import { Stack, useTheme, Hidden, Typography } from "@mui/material";
import React from "react";
import NFTList from "@/src/Components/NFTList";

const NFTs: React.FC = () => {
  const theme = useTheme();
  return (
    <Stack
      margin="3rem"
      direction="column"
      spacing={10}
      alignItems="center"
      justifyContent="center"
      sx={{
        [theme.breakpoints.up("md")]: {
          height: "80vh",
        },
      }}
    >
      <Stack
        sx={{
          display: "flex",
          direction: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            marginBottom: "2em",
            textTransform: "uppercase",
            marginTop: "3rem",
          }}
          id="Artwork"
        >
          Unlock strength from within.
        </h2>
        <Typography sx={{ fontSize: "20px" }}>
          Each crypto girl club artwork represents a unique personality trait
          defining the collective of strong, ambitious women of CGC.{" "}
        </Typography>
        <Typography sx={{ fontSize: "20px", mt: "1rem" }}>
          The individual traits portray the strengths of powerful leaders:
          focus, vision, loyalty and respect.{" "}
        </Typography>
      </Stack>
      <Hidden mdDown>
        <NFTList direction="row" />
      </Hidden>
      <Hidden mdUp>
        <NFTList direction="column" />
      </Hidden>
    </Stack>
  );
};

export default NFTs;
