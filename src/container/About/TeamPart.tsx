import React from "react";
import { Stack, Typography, useTheme } from "@mui/material";
import TeamSlider from "@/src/Components/TeamSlider/TeamSlider";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

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
        <Typography
          alignSelf="flex-end"
          color="#e0578e"
          fontSize="25px"
          mt="10px"
          textAlign="center"
          alignItems="center"
        >
          Swipe right <ArrowRightAltIcon />
        </Typography>
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
