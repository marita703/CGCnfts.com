import { Container, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import HeroImage from "public/HeroImages/laquees.png";
import Image from "next/Image";
import MainButton from "@/src/Components/Buttons/MainButton";
import Diamond from "@/src/Components/Diamond/Diamond";
import useScrollPosition from "@/src/hooks/useScrollPosition";
import { BorderColor } from "@mui/icons-material";

function Section2() {
  const theme = useTheme();
  const scrollPosition = useScrollPosition();
  // console.log(scrollPosition);

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
          Upgrade your{" "}
          <Typography sx={{ textDecoration: "overline" }}>web1 web2</Typography>{" "}
          web3{" "}
        </Typography>
        <MainButton>Join</MainButton>
        {/* Neo Objects */}
        {/* this will change the opacity until it disapears */}
        <Diamond
          sx={{
            opacity: 1 - scrollPosition / 600,
            transform: `translate3d(-32px, 8px, 0px) scale3d(${
              0.0065 * scrollPosition + 1
            }, ${
              0.0065 * scrollPosition + 1
            }, 1) rotateX(0deg) rotateY(0deg) rotateZ(${
              -0.18 * scrollPosition + 45
            }deg) skew(0deg, 0deg);`,
          }}
        />
        <Diamond
          sx={{
            opacity: 1 - scrollPosition / 600,
            transform: `translate3d(-8px, 0px, 0px)   scale3d(${
              0.0065 * scrollPosition + 1
            }, ${
              0.0065 * scrollPosition + 1
            }, 1) rotateX(0deg) rotateY(0deg) rotateZ(${
              0.215 * scrollPosition + 45
            }deg
              ) skew(0deg, 0deg);`,
            borderImage:
              "linear-gradient(to right, #3966FF, #FF599c, #FBC13a) 1",
            borderColor: "#FF4aa9",
          }}
        />
        <Diamond
          sx={{
            opacity: 1 - scrollPosition / 600,
            transform: `translate3d(16px, -8px, 0px)  scale3d(${
              0.0065 * scrollPosition + 1
            }, ${
              0.0065 * scrollPosition + 1
            }, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg);`,
          }}
        />
      </Stack>
    </Container>
  );
}

export default Section2;
