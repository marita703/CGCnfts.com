import { CheckBox } from "@mui/icons-material";
import { FormControl, Stack, TextField, useTheme } from "@mui/material";
import React from "react";

function WhiteListForm() {
  const theme = useTheme();
  return (
    <form>
      <Stack
        sx={{
          width: "20rem",
          mb: "3rem",
        }}
      >
        <TextField
          id="name"
          label="Enter your Name"
          variant="outlined"
          required
          margin="dense"
        />
        <TextField
          id="Email"
          label="Enter your Email Address"
          variant="outlined"
          required
          margin="dense"
        />
        <TextField
          id="name"
          label="Enter your ETH Wallet Address"
          variant="outlined"
          required
          margin="dense"
        />
        <TextField
          id="name"
          label="Enter your Discord User Name (#)"
          variant="outlined"
          required
          margin="dense"
        />
        <FormControl></FormControl>
      </Stack>
    </form>
  );
}

export default WhiteListForm;
