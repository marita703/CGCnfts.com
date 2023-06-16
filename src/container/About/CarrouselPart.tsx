import { EmblaCarousel } from "@/src/Components/Carrousel/Carrousel";
import { EmblaOptionsType } from "embla-carousel-react";
import React from "react";

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function CarrouselPart() {
  return (
    <div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
}

export default CarrouselPart;
