import React from "react";
import { Stack, useTheme } from "@mui/material";
import TeamSlider from "@/src/Components/TeamSlider/TeamSlider";
import TeamSliderButtonNext from "@/src/Components/Buttons/TeamSliderButtonNext";

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
        <TeamSlider />
        <Stack direction="row">
          <TeamSliderButtonNext />
        </Stack>
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
