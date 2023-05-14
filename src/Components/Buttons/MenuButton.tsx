import { Button, ButtonProps } from "@mui/material";
import React from "react";

const MenuButton: React.FC<ButtonProps> = ({ children }) => {
  return <Button>{children}</Button>;
};

export default MenuButton;
