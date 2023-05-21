import { Stack, TextField } from "@mui/material";
import React from "react";

function NewsLetterForm() {
  return (
    <form>
      <Stack direction="column" alignItems="center" justifyContent="center">
        <Stack
          sx={{
            width: "60%",
            mb: "3rem",
            [theme.breakpoints.down("md")]: { width: "90%" },
          }}
        >
          <TextField
            id="email"
            label="E-mail:"
            variant="outlined"
            required
            margin="dense"
          >
            Email
          </TextField>
        </Stack>
      </Stack>
    </form>
  );
}

export default NewsLetterForm;
