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
          <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
            <MenuButton
              sx={{ fontSize: "18px" }}
              href="https://t.me/joinchat/n6z0tNyZC3IxYmU0"
            >
              Telegram
            </MenuButton>
            <MenuButton
              sx={{ fontSize: "18px" }}
              href="https://discord.com/invite/YpC7qw22Pb"
            >
              Discord
            </MenuButton>
            <MenuButton
              sx={{ fontSize: "18px" }}
              href="https://twitter.com/CryptoGirlsClub"
            >
              Twitter
            </MenuButton>
            <MenuButton
              sx={{ fontSize: "18px" }}
              href="https://www.instagram.com/cryptogirlsclub.berlin/"
            >
              Instagram
            </MenuButton>

            <MenuButton
              sx={{ fontSize: "18px" }}
              href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQHlUmcO7z0NNwAAAYglFjOApldnjCXAOWb9C9cULH7X50YGKIYr4DDv7ZnETZpNOZyzFZZ_Hr_H5P2akx-TzO95JS1hnCYe5SSHcdFAGIz5nsJ33i0SFC_MdVcXlmV46-3zSJA=&original_referer=https://www.linkedin.com/company/crypto-girls-club/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fcrypto-girls-club%2F%3Foriginal_referer%3Dhttps%253A%252F%252Fcgcnfts.com%252F"
            >
              Linkedin
            </MenuButton>
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
