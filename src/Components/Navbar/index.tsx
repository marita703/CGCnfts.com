import { AppBar, Stack, Typography, keyframes } from "@mui/material";
import React from "react";
import Image from "next/image";
import Logo from "../../../public/Logo.png";
import CircleIcon from "@mui/icons-material/Circle";
import MenuButton from "../Buttons/MenuButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
        <Stack direction="row" alignItems="center" spacing={5}>
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
              animation: `${resourceKeyFrame} 3s infinite ease`,
            }}
          >
            <CircleIcon sx={{ fontSize: "0.5em" }} />
            <Typography variant="body2" letterSpacing="0.2em">
              Newsletter
            </Typography>
          </Stack>
        </Stack>

        {/* right */}

        <Stack direction="row" alignItems="center">
          <MenuButton>Home</MenuButton>
          <MenuButton>About</MenuButton>
          <MenuButton>Contact</MenuButton>
          <MenuButton>
            <Stack>
              <Typography>Membership</Typography>
              <KeyboardArrowDownIcon />
            </Stack>
          </MenuButton>
          {/* <MainButton>Join</MainButton> */}
        </Stack>
      </Stack>
    </AppBar>
  );
}

export default Navbar;
