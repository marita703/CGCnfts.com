import {
  FormControl,
  FormControlLabel,
  Stack,
  TextField,
  useTheme,
  Checkbox,
  Button,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";

type FormProps = {
  formStyles?: React.CSSProperties;
};

const WhiteListForm: React.FC<FormProps> = ({ formStyles }) => {
  const router = useRouter();

  const addEntry = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.dir(e.target);

    try {
      const response = await fetch("/api/Whitelistsubscriptors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname: e.currentTarget.fullname.value,
          email: e.currentTarget.email.value,
          ethWallet: e.currentTarget.ethWallet.value,
          discordUserName: e.currentTarget.discordUserName.value,
          termsAndConditions: e.currentTarget.termsAndConditions.checked,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const theme = useTheme();

  const [emailValue, setEmailValue] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.currentTarget.value;
    // Only update the email value if it includes the "@" symbol
    if (value.includes("@")) {
      setEmailValue(value);
    }
  };

  return (
    <form onSubmit={addEntry} style={formStyles}>
      <Stack
        sx={{
          width: "90%",
          mb: "3rem",
        }}
      >
        <TextField
          id="fullname"
          name="fullname"
          label="Enter your Name"
          variant="outlined"
          required
          margin="dense"
        />
        <TextField
          id="email"
          label="Enter your Email Address"
          variant="outlined"
          required
          margin="dense"
          onChange={handleEmailChange}
          InputProps={{
            inputProps: {
              pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",
            },
          }}
        />
        <TextField
          id="ethWallet"
          label="Enter your ETH Wallet Address"
          variant="outlined"
          required
          margin="dense"
        />
        <TextField
          id="discordUserName"
          label="Enter your Discord User Name (#)"
          variant="outlined"
          required
          margin="dense"
        />
        <br />
        <FormControlLabel
          control={<Checkbox id="termsAndConditions" defaultChecked />}
          label="Terms and Conditions"
          required
        />
        <br />
        <FormControl>
          <Button
            id="submit"
            type="submit"
            sx={{ backgroundColor: "#8e076c", color: "white" }}
          >
            Submit
          </Button>
        </FormControl>
      </Stack>
    </form>
  );
};

export default WhiteListForm;
