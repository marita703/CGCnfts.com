import React from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useSwiper } from "swiper/react";
import { Button } from "@mui/material";

function TeamSliderButtonBack() {
  const swiper = useSwiper();

  return (
    <Button
      sx={{
        height: "40px",
        width: "40px",
        border: "0.5px solid transparent",
        borderRadius: "20px",
      }}
      onClick={() => swiper.slidePrev()}
    >
      <NavigateBeforeIcon />
    </Button>
  );
}

export default TeamSliderButtonBack;
