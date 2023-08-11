import React from "react";
import WhiteListForm from "@/src/Components/WhiteListForm/WhiteListForm";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import DiscordLogo from "../../../public/Images/DiscordLogo/concours-discord-cartes-voeux-fortnite-france-6.png";

function WhiteList() {
  return (
    <Stack
      margin="3rem"
      direction="column"
      spacing={10}
      alignItems="center"
      justifyContent="center"
    >
      <div id="joinWhitelist">
        <h2>Join us</h2>
      </div>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={12} textAlign="center">
          <Typography fontSize="30px" fontWeight="bold">
            List closed! Stay tuned for 12.09
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Typography fontSize="25px">Join our discord</Typography>
            <Link href="https://discord.com/invite/YpC7qw22Pb">
              <Image
                src={DiscordLogo}
                alt="discordLogo"
                height={300}
                width={300}
              />
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={7}>
          <iframe
            src="https://mint.webmint.io/mint-module/cgc-membership"
            width="980"
            height="650"
            frameBorder="0"
            style={{
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "3px solid transparent",
              borderRadius: "20px",
            }}
          ></iframe>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default WhiteList;
