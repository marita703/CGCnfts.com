import React from "react";
import { Stack, useTheme } from "@mui/material";
import TeamSlider from "@/src/Components/TeamSlider/TeamSlider";

function TeamPart() {
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
        <h2 style={{ marginBottom: "3rem" }}>Meet the Team</h2>
        <TeamSlider />
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

export default TeamPart;
