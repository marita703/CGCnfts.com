import {
  Button,
  FormControl,
  Stack,
  TextField,
  useTheme,
  Hidden,
} from "@mui/material";
import React from "react";

function NewsLetterForm() {
  const theme = useTheme();
  return (
    <form>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ width: "90vw" }}
      >
        <Hidden mdDown>
          <Stack
            direction="row"
            spacing={4}
            alignItems="center"
            justifyContent="center"
            sx={{
              width: "90%",
              mb: "3rem",
            }}
          >
            <TextField
              id="email"
              label="E-mail:"
              variant="outlined"
              required
              margin="dense"
              sx={{ width: "65%" }}
            >
              Email
            </TextField>
            <FormControl>
              <Button sx={{ backgroundColor: "#8e076c", color: "white" }}>
                {" "}
                Subscribe!
              </Button>
            </FormControl>
          </Stack>
        </Hidden>
        <Hidden mdUp>
          <TextField
            id="email"
            label="E-mail:"
            variant="outlined"
            required
            margin="dense"
            sx={{ width: "95%" }}
          >
            Email
          </TextField>
          <FormControl>
            <Button
              fullWidth
              sx={{ width: "95%", backgroundColor: "#8e076c", color: "white" }}
            >
              {" "}
              Subscribe!
            </Button>
          </FormControl>
        </Hidden>
      </Stack>
    </form>
  );
}

export default NewsLetterForm;
