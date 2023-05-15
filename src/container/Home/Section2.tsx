import { Container, Stack, useTheme } from "@mui/material";
import React from "react";
import HeroImage from "public/HeroImages/cookiebite_hero_image_nft_women_grid_8e076c_3e0454_63c4d2_dark__33d15ba2-6711-4cf2-8027-ab71d22bcc2e.png";
import Image from "next/Image";
function Section2() {
  const theme = useTheme();
  return (
    <Container
      sx={{
        height: "60vh",
        mb: 20,
        [theme.breakpoints.up("sm")]: {
          height: "80vh",
          mb: 30,
        },
      }}
    >
      <Stack
        sx={{ height: "100%", alignItems: "center", justifyContent: "center" }}
      >
        <Image src={HeroImage} alt="heroImage" height={300} />
      </Stack>
    </Container>
  );
}

export default Section2;
