import { Stack, useTheme, Hidden } from "@mui/material";
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
      <div>
        <h2 style={{ marginBottom: "3em" }} id="Artwork">
          1000 UNIQUE MEMBERSHIP CARD UTILITY
        </h2>
      </div>
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
