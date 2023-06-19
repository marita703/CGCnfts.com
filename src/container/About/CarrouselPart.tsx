import { EmblaCarousel } from "@/src/Components/Carrousel/Carrousel";
import { Stack } from "@mui/material";
import { EmblaOptionsType } from "embla-carousel-react";
import React from "react";

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function CarrouselPart() {
  return (
    <Stack
      sx={{
        direction: "column",
        alignItems: "center",
        justifyContent: "center",
        m: "3rem",
      }}
    >
      <h2>Our Girls</h2>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </Stack>
  );
}

export default CarrouselPart;
