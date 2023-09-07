import { AppBar, Stack, Typography, keyframes, Hidden } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/Logo.png";
import CircleIcon from "@mui/icons-material/Circle";
import MenuButton from "../Buttons/MenuButton";
import MainButton from "../Buttons/MainButton";
import menuButtons from "@/public/Data/MenuButtonsData";
import Link from "next/link";
import { ethers } from "ethers";

import DropDownMenuSmallScreen from "../DropDownMenuButtons/DropDownMenuSmallScreen";
import ConnectWalletButton from "../Buttons/ConnectWalletButton";

function Navbar() {
  const [web3Provider, setWeb3Provider] = useState<any>(null);

  const addressString = web3Provider.toString();

  function shortAddress(addressString: string): string {
    const first2: string = addressString.slice(0, 2);
    const last4: string = addressString.slice(-4);
    const truncatedString = first2 + "..." + last4;
    return truncatedString;
  }

  const truncatedAddress = shortAddress(addressString);

  return (
    <AppBar
      elevation={0}
      position="sticky"
      sx={{
        px: 3,
        py: 2.5,
        bgcolor: "transparent",
        backdropFilter: "blur(8px)",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ height: "100%" }}
      >
        {/* left */}
        <Stack direction="row" alignItems="center" spacing={{ xs: 2, md: 5 }}>
          {/* Logo */}
          <Link href="/">
            <Image
              src={Logo}
              alt={"logo"}
              style={{ width: "2em", objectFit: "contain", height: "2em" }}
            />
          </Link>

          <Link href="/" style={{ textDecoration: "none" }}>
            <Stack
              direction="row"
              alignItems="center"
              spacing="0.5em"
              sx={{
                color: "primary.light",
              }}
            >
              <CircleIcon sx={{ fontSize: "0.5em" }} />
              <Typography
                variant="body1"
                letterSpacing="0.2em"
                fontWeight="bold"
              >
                CRYPTO GIRLS CLUB
              </Typography>
            </Stack>
          </Link>
        </Stack>

        {/* right */}
        <Hidden mdDown>
          <Stack direction="row" alignItems="center" spacing={3}>
            {menuButtons.map((menuButton) => (
              <MenuButton key={menuButton.value} href={menuButton.href}>
                {menuButton.label}
              </MenuButton>
            ))}
            <ConnectWalletButton size="small" setWeb3Provider={setWeb3Provider}>
              {!web3Provider ? "Connect Wallet" : truncatedAddress}
            </ConnectWalletButton>
          </Stack>
        </Hidden>

        <Hidden mdUp>
          <Stack direction="row" alignItems="center" spacing={2}>
            <DropDownMenuSmallScreen />
          </Stack>
        </Hidden>
      </Stack>
    </AppBar>
  );
}

export default Navbar;
