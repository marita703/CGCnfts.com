import { Button, FormControl, Stack, TextField, useTheme } from "@mui/material";
import React, { useState } from "react";

function ContactForm() {
  const theme = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.log(error);
    }
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
            id="name"
            label="Name:"
            variant="outlined"
            required
            margin="dense"
          >
            Name
          </TextField>
          <TextField
            id="email"
            label="E-mail:"
            variant="outlined"
            required
            margin="dense"
          >
            Email
          </TextField>
          <TextField
            id="message"
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
