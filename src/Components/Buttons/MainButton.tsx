import { Button, ButtonProps, keyframes, useTheme } from "@mui/material";

import React from "react";

const resourceKeyFrame = keyframes`
  0% {
    opacity: 1;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

const MainButton: React.FC<ButtonProps> = ({
  children,
  size = "normal",
  sx = {},
  href,
}) => {
  const theme = useTheme();
  return (
    <Button
      sx={{
        bgcolor: "#a583e1",
        letterSpacing: "0.2em",
        border: `1px solid ${theme.palette.secondary.dark}`,
        borderRadius: "8px",
        px: "20px",
        py: "6px",
        fontSize: size === "small" ? 14 : 16,
        fontWeight: "bold",
        color: "secondary.dark",
        textDecoration: "none",
        textTransform: "uppercase",
        animation: `${resourceKeyFrame} 3s infinite ease`,
        "&:hover": {
          bgcolor: "secondary.dark",
          filter:
            "drop-shadow(0px 8px 28px rgba(275, 74, 169, 02)) drop-shadow(0px 18px 88px rgba(275, 74, 169, 02) )",
          border: `1px solid #3b2c34`,
          color: "primary.light",
        },

        ...sx,
      }}
      href="/join-the-club#joinWhitelist"
    >
      {children}
    </Button>
  );
};

export default MainButton;
