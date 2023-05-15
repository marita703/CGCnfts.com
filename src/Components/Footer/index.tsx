import { AppBar, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import MenuButton from "../Buttons/MenuButton";
import MainButton from "../Buttons/MainButton";

function Footer() {
  const theme = useTheme();
  return (
    <>
      <AppBar
        elevation={0}
        sx={{
          position: "relative",
          bottom: 0,
          top: "auto",
          bgcolor: "background.default",
          [theme.breakpoints.up("sm")]: { position: "fixed" },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ px: 3, py: 0.3 }}
        >
          {/* right side */}
          <Stack direction={{ xs: "column", sm: "row" }}>
            <MenuButton>Discord</MenuButton>
            <MenuButton>Twitter</MenuButton>
            <MenuButton>Instagram</MenuButton>
            <MenuButton>Telegram</MenuButton>
            <MenuButton>Linkedin</MenuButton>
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }}>
            <Typography> © 2023 CGC</Typography>
          </Stack>
        </Stack>
      </AppBar>
    </>
  );
}

export default Footer;
