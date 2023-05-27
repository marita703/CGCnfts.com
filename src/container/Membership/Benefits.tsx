import { Grid, Stack } from "@mui/material";
import React from "react";
import Image from "next/image";
import UtilityArray from "@/public/Data/UtilityData";

function Benefits() {
  return (
    <Grid container sx={{ m: "3rem" }}>
      {UtilityArray.map((utility) => {
        return (
          <Grid
            item
            key={utility.text}
            xs={12}
            sm={12}
            md={6}
            lg={4}
            sx={{ p: "1rem" }}
          >
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
              spacing={3}
            >
              <Image
                alt={`imageof${utility.text}`}
                src={utility.src}
                height={150}
                width={150}
              />
              <h3>{utility.text}</h3>
            </Stack>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Benefits;
