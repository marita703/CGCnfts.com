import {
  Button,
  FormControl,
  Stack,
  TextField,
  useTheme,
  Hidden,
} from "@mui/material";
import React from "react";
import { useRouter } from "next/router";

function NewsLetterForm() {
  const router = useRouter();

  const addEntry = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.dir(e.target);

    try {
      const response = await fetch("/api/Emailsubscriptors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: e.currentTarget.email.value,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const theme = useTheme();

  return (
    <form onSubmit={addEntry}>
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
              <Button
                type="submit"
                sx={{ backgroundColor: "#8e076c", color: "white" }}
              >
                Subscribe
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
              type="submit"
              fullWidth
              sx={{ width: "95%", backgroundColor: "#8e076c", color: "white" }}
            >
              Subscribe!
            </Button>
          </FormControl>
        </Hidden>
      </Stack>
    </form>
  );
}

export default NewsLetterForm;
