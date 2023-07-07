import React from "react";
import { Box, Stack, useTheme } from "@mui/material";
import Script from "next/script";

function VideoPartVictoria() {
  return (
    <Box sx={{}}>
      <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
        <iframe
          src="https://player.vimeo.com/video/842203735?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            border: "3px solid transparent",
            borderRadius: "20px",
          }}
          title="fb_Changemakers_CGG_Horizontal"
        ></iframe>
      </div>
      <Script src="https://player.vimeo.com/api/player.js"></Script>
    </Box>
  );
}

export default VideoPartVictoria;
