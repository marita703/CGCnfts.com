import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import NewsLetterForm from "../NewsLetterForm/NewsLetterForm";

function NewsLetterBox() {
  return (
    <Box id="newsletter" sx={{ m: "3rem" }}>
      <Stack direction="column" alignItems="center" spacing={4}>
        <Typography>
          Sign up to get all the latest on our events across Europe and stay on
          top of the CGC universe.
        </Typography>
        <NewsLetterForm />
      </Stack>
    </Box>
  );
}

export default NewsLetterBox;
