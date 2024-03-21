import { Button, ButtonProps, Menu, MenuItem } from "@mui/material";
import React, { ReactNode, useEffect } from "react";
import { useState } from "react";
import MenuButton from "../Buttons/MenuButton";
import menuButtons from "@/public/Data/MenuButtonsData";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import ConnectWalletButton from "../Buttons/ConnectWalletButton";

interface ConnectWalletButtonProps {
  setWeb3Provider: (provider: any) => void; // Define the setWeb3Provider prop
  web3Provider: any;
}

const DropDownMenuSmallScreen: React.FC<ConnectWalletButtonProps> = ({
  setWeb3Provider,
  web3Provider,
}) => {
  function shortAddress(addressString: string): string {
    const first4: string = addressString?.slice(0, 4);
    const last4: string = addressString?.slice(-4);
    const truncatedString = first4 + "..." + last4;
    return truncatedString;
  }

  const truncatedAddress = shortAddress(web3Provider);

  const [anchorE1, setAnchorE1] = useState<null | HTMLElement>(null);

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
        <MenuItem>
          <ConnectWalletButton size="small" setWeb3Provider={setWeb3Provider}>
            {!web3Provider ? "Connect Wallet" : truncatedAddress}
          </ConnectWalletButton>
        </MenuItem>
      </Menu>
    </>
  );
};

export default DropDownMenuSmallScreen;
