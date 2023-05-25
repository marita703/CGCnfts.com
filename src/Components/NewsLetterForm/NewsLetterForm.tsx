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

  async function addContact(contact) {
    const response = await fetch("/api/Contacts", {
      method: "POST",
      body: JSON.stringify(contact),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      await response.json();
      router.push("/");
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  const theme = useTheme();

  return (
    <form onSubmit={addContact}>
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
