import { Box, Stack, useTheme } from "@mui/material";
import React from "react";
import Script from "next/script";

function VideoPartLisk() {
  const theme = useTheme();
  return (
    <>
      <Stack sx={{ m: "3rem", p: "3rem" }}>
        <Box sx={{ m: "3rem" }}>
          <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
            <iframe
              src="https://player.vimeo.com/video/842203549?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "2px solid transparent",
                borderRadius: "10px",
              }}
              title="CGC_Womans_Day_20230320_02 (2)"
            ></iframe>
          </div>
          <Script src="https://player.vimeo.com/api/player.js"></Script>
        </Box>
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

export default VideoPartLisk;
