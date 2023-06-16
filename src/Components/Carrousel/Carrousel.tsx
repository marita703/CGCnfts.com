import React, { ReactNode } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import imageByIndex from "@/public/Data/ImageByIndexCarrousel/ImageByIndex";

type PropType = {
  options?: EmblaOptionsType;
  slides: number[];
};

export const EmblaCarousel = (props: PropType) => {
  const { options, slides } = props;
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((index) => (
          <div className="embla__slide" key={index}>
            <Image
              height={500}
              width={800}
              alt="image"
              src={imageByIndex(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
