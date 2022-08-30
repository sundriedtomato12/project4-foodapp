import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function LoginPage({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // When user clicks Submit, store input in DB and state
  const handleLoginSubmit = () => {
    if (email && password) {
      // backend post request with email, password, name
      axios
        .post("/api/login", {
          email: email,
          password: password,
        })
        .then((response) => {
          if (response.data == null) {
            alert("Error logging in! Please try again");
          } else {
            setUser({ userId: response.data.userInfo.id });
            navigate("/");
            window.location.reload(false);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Please fill up all fields!");
    }
    // reset personName
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <Stack gap={3}>
        <Typography variant="h4" component="h1" textAlign="center">
          Login
        </Typography>
        <TextField
          id="email"
          label="Enter your email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value.toLowerCase())}
        />
        <TextField
          id="password"
          label="Enter your password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" onClick={handleLoginSubmit}>
          Login
        </Button>
        <Link href="/signup">Don't have an account? Click here</Link>
      </Stack>
    </>
  );
}
