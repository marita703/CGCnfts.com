import { Button, ButtonProps, Menu, MenuItem } from "@mui/material";
import React from "react";
import { useState } from "react";
import MenuButton from "../Buttons/MenuButton";
import menuButtons from "@/public/MenuButtonsData";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

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

  return (
    <>
      <Button
        variant="contained"
        onClick={handleButtonClick}
        sx={{
          background: "transparent",
          fontSize: "20px",
          color: "white",
          ...sx,
        }}
      >
        MENU
        <MenuOpenIcon fontSize="small" sx={{ mr: 0.5 }} />
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
