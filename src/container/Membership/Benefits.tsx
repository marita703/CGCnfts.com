import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import Image from "next/image";
import UtilityArray from "@/public/Data/UtilityData";

function Benefits() {
  return (
    <Stack
      direction="column"
      alignContent="center"
      alignItems="center"
      spacing={10}
      justifyContent="center"
      sx={{ m: "3rem" }}
    >
      <div style={{ marginTop: "3rem" }}>
        <h2 id="benefits">FUTURE BENEFITS</h2>
      </div>
      <Grid container>
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
                sx={{
                  animationDuration: "0.3s",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <Image
                  alt={`imageof${utility.text}`}
                  src={utility.src}
                  height={170}
                  width={170}
                />
                <h3>{utility.text}</h3>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
}

export default Benefits;
