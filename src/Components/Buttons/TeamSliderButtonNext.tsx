import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useSwiper } from "swiper/react";
import { Button } from "@mui/material";

function TeamSliderButtonNext() {
  const swiper = useSwiper();

  return (
    <Button
      sx={{
        height: "40px",
        width: "40px",
        border: "0.5px solid transparent",
        borderRadius: "20px",
      }}
      onClick={() => swiper.slideNext()}
    >
      <NavigateNextIcon />
    </Button>
  );
}

export default TeamSliderButtonNext;
