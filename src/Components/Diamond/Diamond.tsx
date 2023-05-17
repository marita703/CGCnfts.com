import { Box, BoxProps, useTheme } from "@mui/material";
import React from "react";

const Diamond: React.FC<BoxProps> = ({ sx = {} }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "absolute",

        backgroundColor: "transparent",
        border: `3px solid ${theme.palette.primary.main} `,
        borderImage: "linear-gradient(to right, #3966FF, #FF599C) 1",
        willChange: "transform, opacity",
        transform: `translate3d(16px, -8px, 0px) scale3d( 1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ( 45
        ) skew(0deg, 0deg);`,
        transformStyle: "preserve-3d",
        boxShadow:
          "inset -1px -1px 20px rgba(255,74,169,.3), 2px 2px 20px rgba(255,74,169,.32), inset 3px 3px 20px -2px rgba(0,78,149,.48), -8px 1px 18px rgba(0,78,149,.42)",
        zIndex: -1,
        transition: "all 0.3s ease",
        mt: 6,
        height: "20em",
        width: "20em",
        [theme.breakpoints.down("sm")]: {
          mt: 6,
        },
        [theme.breakpoints.up("sm")]: {
          mt: 10,
        },
        [theme.breakpoints.up("md")]: {
          mt: 20,
          height: "18em",
          width: "18em",
        },
        ...sx,
      }}
    />
  );
};

export default Diamond;
