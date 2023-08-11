import React from "react";
import WhiteListForm from "@/src/Components/WhiteListForm/WhiteListForm";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import DiscordLogo from "../../../public/Images/DiscordLogo/photo_5381914521393813540_y.jpg";

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
      <Link href="https://discord.com/invite/YpC7qw22Pb" target="blank">
        <Image
          src={DiscordLogo}
          alt="discord logo"
          height={500}
          width={500}
          style={{ height: "100%", width: "100%" }}
        />
      </Link>
    </Stack>
  );
}

export default WhiteList;
