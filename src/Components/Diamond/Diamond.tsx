import { Box, BoxProps, useTheme } from "@mui/material";
import React from "react";

const Diamond: React.FC<BoxProps> = ({ sx = {} }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        mt: 10,
        position: "absolute",
        width: "30em",
        height: "30em",
        backgroundColor: "transparent",
        transform: "rotateZ(-45deg)",
        border: `3px solid ${theme.palette.primary.main} `,
        borderImage: "linear-gradient(to right, #3966FF, #FF599C) 1",
        willChange: "transform, opacity",
        boxShadow:
          "inset -1px -1px 20px rgba(255,74,169,.3), 2px 2px 20px rgba(255,74,169,.32), inset 3px 3px 20px -2px rgba(0,78,149,.48), -8px 1px 18px rgba(0,78,149,.42)",
        zIndex: -1,
        transition: "all 0.3s ease",
        [theme.breakpoints.up("sm")]: {
          mt: 6,
          height: "15em",
          width: "15em",
        },
        [theme.breakpoints.up("md")]: {
          height: "20em",
          width: "20em",
        },
        [theme.breakpoints.up("lg")]: {
          mt: 8,
          height: "25em",
          width: "25em",
        },
        ...sx,
      }}
    />
  );
};

export default Diamond;
