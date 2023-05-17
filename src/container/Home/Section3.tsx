import { Box, BoxProps, Container, Stack, StackProps } from "@mui/material";
import Item from "../../Components/Card/Item";
import React, { useEffect, useRef } from "react";

function Section3() {
  return (
    <Container sx={{ height: "100vh", mb: "2em" }}>
      <Stack
        sx={{ height: "90%", width: "90%", m: "3em" }}
        direction="row"
        alignContent="center"
      >
        <Stack
          display="grid"
          sx={{ height: "100%", width: "100%", m: "3em" }}
          border="3px solid white"
          position="relative"
        >
          <Item
            sx={{
              top: "0",
              left: "0",
              backgroundColor: "hotpink",
              heigth: "60px",
              width: "60px",
            }}
          >
            holi
          </Item>
        </Stack>
      </Stack>
    </Container>
  );
}

export default Section3;
