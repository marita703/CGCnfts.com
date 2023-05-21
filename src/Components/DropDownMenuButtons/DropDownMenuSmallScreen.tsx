import {
  Button,
  ButtonProps,
  FormControl,
  Menu,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import MenuButton from "../Buttons/MenuButton";

const DropDownMenuSmallScreen: React.FC<ButtonProps> = ({
  children,
  size = "normal",
  sx = {},
  href,
}) => {
  const [anchorE1, setAnchorE1] = useState<null | HTMLElement>(null);
  const [selectOption, setSelectOption] = useState<string>("");

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorE1(event.currentTarget);
  };

  const handleMouseClose = () => {
    setAnchorE1(null);
  };

  const handleOptionChange = (option: string) => {
    setSelectOption(option);
    setAnchorE1(null);
  };

  interface MenuItem {
    label: string;
    href: string;
    value: string;
  }

  const menuButtons: MenuItem[] = [
    { label: "HOME", href: "/", value: "Home" },
    { label: "ABOUT", href: "/about", value: "About" },
    { label: "CONTACT", href: "/contact", value: "Contact" },
    { label: "MEMBERSHIP", href: "/membership", value: "Membership" },
  ];

  return (
    <>
      <Button variant="contained" onClick={handleButtonClick} sx={{ ...sx }}>
        MENU
      </Button>
      <Menu
        anchorEl={anchorE1}
        open={Boolean(anchorE1)}
        onClose={handleMouseClose}
      >
        {menuButtons.map((menuButton) => (
          <MenuItem key={menuButton.value}>
            <MenuButton href={menuButton.href}>{menuButton.label}</MenuButton>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default DropDownMenuSmallScreen;
