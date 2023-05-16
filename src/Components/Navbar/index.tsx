import { AppBar, Stack, Typography, keyframes, Hidden } from "@mui/material";
import React from "react";
import Image from "next/image";
import Logo from "../../../public/Logo.png";
import CircleIcon from "@mui/icons-material/Circle";
import MenuButton from "../Buttons/MenuButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MainButton from "../Buttons/MainButton";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

function Navbar() {
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
          <Image
            src={Logo}
            alt={"logo"}
            style={{ width: "2em", objectFit: "contain", height: "2em" }}
          />

          {/* Pulse Text */}
          <Stack
            direction="row"
            alignItems="center"
            spacing="0.5em"
            sx={{
              color: "primary.light",
            }}
          >
            <CircleIcon sx={{ fontSize: "0.5em" }} />
            <Typography variant="body1" letterSpacing="0.2em" fontWeight="bold">
              CRYPTO GIRLS CLUB
            </Typography>
          </Stack>
        </Stack>

        {/* right */}
        <Hidden mdDown>
          <Stack direction="row" alignItems="center">
            <MenuButton>Home</MenuButton>
            <MenuButton>About</MenuButton>
            <MenuButton>Contact</MenuButton>
            <MenuButton>
              <Stack direction="row" alignItems="center">
                Membership
                <KeyboardArrowDownIcon fontSize="small" sx={{ mr: 0.5 }} />
              </Stack>
            </MenuButton>
            <MainButton size="small">Join</MainButton>
          </Stack>
        </Hidden>

        <Hidden mdUp>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography> MENU</Typography>
            <MenuOpenIcon fontSize="small" sx={{ mr: 0.5 }} />
          </Stack>
        </Hidden>
      </Stack>
    </AppBar>
  );
}

export default Navbar;
