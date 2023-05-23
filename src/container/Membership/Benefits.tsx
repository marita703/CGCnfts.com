import { Grid, Stack } from "@mui/material";
import React from "react";
import Image from "next/image";
interface Utility {
  text: string;
  src: string;
}

const UtilityArray: Utility[] = [
  {
    text: "Heavy discounts to educational courses in Web3",
    src: "/Images/UtilityImages/discount.png",
  },
  {
    text: "Access to our mentoring matchmaking",
    src: "/Images/UtilityImages/mentoring.png",
  },
  { text: "NFT-holder events", src: "/Images/UtilityImages/mentoring.png" },
  {
    text: "Discounted conference tickets",
    src: "/Images/UtilityImages/tiket.png",
  },
  {
    text: "Access to coworking spaces",
    src: "/Images/UtilityImages/coworking.png",
  },
  {
    text: "Access to our collection of partners",
    src: "/Images/UtilityImages/nft.png",
  },
];

function Benefits() {
  return (
    <Grid container spacing={3} sx={{ height: "100vh" }}>
      {UtilityArray.map((utility) => {
        return (
          <Grid item key={utility.text} xs={12} sm={6} md={4}>
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                alt={`imageof${utility.text}`}
                src={utility.src}
                height={200}
                width={200}
              />
              <h5>{utility.text}</h5>
            </Stack>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Benefits;
