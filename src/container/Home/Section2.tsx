import {
  Box,
  BoxProps,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import HeroImage from "public/HeroImages/cookiebite_hero_image_nft_women_grid_8e076c_3e0454_63c4d2_dark__33d15ba2-6711-4cf2-8027-ab71d22bcc2e.png";
import Image from "next/Image";
import MainButton from "@/src/Components/Buttons/MainButton";

const Diamond: React.FC<BoxProps> = ({ sx = {} }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: 100,
        height: 100,
        backgroundColor: "red",
        position: "relative",
        transform: "rotateZ(-45deg)",
        "&::before, &::after": {
          content: '""',
          position: "absolute",
          backgroundColor: "red",
        },
        "&::before": {
          top: 0,
          left: 0,
          width: "70.7%",
          height: "100%",
          transform: "rotateZ(45deg)",
          transformOrigin: "top left",
        },
        "&::after": {
          top: 0,
          right: 0,
          width: "70.7%",
          height: "100%",
          transform: "rotateZ(-45deg)",
          transformOrigin: "top right",
        },
      }}
    />
  );
};

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
      {/* content  */}
      <Stack
        sx={{ height: "100%", alignItems: "center", justifyContent: "center" }}
      >
        <Image src={HeroImage} alt="heroImage" height={300} />
        <Typography variant="h5" sx={{ mt: -10, mb: 5 }}>
          Upgrade your web1 web2 web3{" "}
        </Typography>
        <MainButton>Join</MainButton>
      </Stack>

      {/* Neo Objects */}
      <Diamond />
    </Container>
  );
}

export default Section2;
