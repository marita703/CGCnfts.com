import theme from "@/src/config/theme";
import { Button, ButtonProps, Link } from "@mui/material";
import React from "react";

const MenuButton: React.FC<ButtonProps> = ({ children, href, target }) => {
  return (
    <Button
      sx={{
        fontSize: 14,
        color: "text.secondary",
        letterSpacing: "0.2em",
        "&:hover": {
          bgcolor: "transparent",
          color: "text.primary",
          filter:
            "drop-shadow(0px 0px 10px #FF4AA9) drop-shadow(0px 0px 16px #FF4AA9) drop-shadow(0px 0px 40px #FF4AA9) ",
        },
        fontWeight: "bold",
        textDecoration: "none",
        textTransform: "uppercase",
      }}
      href={href}
    >
      {children}
    </Button>
  );
};

export default MenuButton;
