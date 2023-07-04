import { Button, FormControl, Stack, TextField, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FormEventHandler } from "react";

function ContactForm() {
  const router = useRouter();
  const theme = useTheme();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const target = e.target as HTMLFormElement;
    e.preventDefault();
    console.dir(e.currentTarget.fullname.value);

    try {
      const response = await fetch("/api/Contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname: e.currentTarget.fullname.value,
          email: e.currentTarget.email.value,
          message: e.currentTarget.message.value,
        }),
      });
    } catch (error) {
      console.log(error);
    }
    target.reset();
    router.push("/thankyou");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="column" alignItems="center" justifyContent="center">
        <Stack
          sx={{
            width: "60%",
            mb: "3rem",
            [theme.breakpoints.down("md")]: { width: "90%" },
          }}
        >
          <TextField
            id="fullname"
            name="fullname"
            label="Name:"
            variant="outlined"
            required
            margin="dense"
          >
            Name
          </TextField>
          <TextField
            id="email"
            name="email"
            label="E-mail:"
            variant="outlined"
            required
            margin="dense"
          >
            Email
          </TextField>
          <TextField
            id="message"
            name="message"
            label="Reason for dropping by:"
            variant="outlined"
            required
            multiline
            margin="dense"
            rows={6}
          >
            Message
          </TextField>
          <FormControl variant="outlined" sx={{ width: "100%" }}>
            <Button
              sx={{
                width: "100%",
                mt: "2rem",
                color: "#E5e1f9",
                fontWeight: "bold",
                fontSize: "1.2rem",
              }}
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
          </FormControl>{" "}
        </Stack>{" "}
      </Stack>
    </form>
  );
}

export default ContactForm;
