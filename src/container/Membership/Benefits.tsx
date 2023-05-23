import { Grid, Stack } from "@mui/material";
import React from "react";
import Image from "next/image";
import UtilityArray from "@/public/Data/UtilityData";

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
