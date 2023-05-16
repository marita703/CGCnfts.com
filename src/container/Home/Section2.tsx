import { Container, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import HeroImage from "public/HeroImages/cookiebite_hero_image_nft_women_grid_8e076c_3e0454_63c4d2_dark__33d15ba2-6711-4cf2-8027-ab71d22bcc2e.png";
import Image from "next/Image";
import MainButton from "@/src/Components/Buttons/MainButton";
import Diamond from "@/src/Components/Diamond/Diamond";
import useScrollPosition from "@/src/hooks/useScrollPosition";

function Section2() {
  const theme = useTheme();
  const scrollPosition = useScrollPosition();
  console.log("Scroll position: " + scrollPosition);
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
      {/* content  */}
      <Stack
        sx={{ height: "100%", alignItems: "center", justifyContent: "center" }}
      >
        <Image src={HeroImage} alt="heroImage" height={260} />
        <Typography variant="h5" sx={{ mt: -10, mb: 5 }}>
          Upgrade your web1 web2 web3{" "}
        </Typography>
        <MainButton>Join</MainButton>
        {/* Neo Objects */}
        <Diamond />
        <Diamond />
        <Diamond />
      </Stack>
    </Container>
  );
}

export default Section2;
