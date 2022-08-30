import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  // When user clicks Submit, store input in DB and state
  const handleSignUpSubmit = () => {
    if (name === "" || password === "" || email === "") {
      alert("Please fill up all fields!");
    }

    if (password.length < 8) {
      alert("Please use at least 8 characters for your password!");
    }
    if (email && password.length > 7 && name) {
      // backend post request with email, password, name
      axios
        .post("/api/signup", {
          email: email,
          password: password,
          name: name,
          createdAt: new Date(),
          updatedAt: new Date(),
        })
        .then((response) => {
          if (response.data.existingUser === true) {
            alert("Email exists! Please use another email!");
          }
          if (response.data.newUser === true) {
            alert("Signup successful! Please login!");
            navigate("/");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("User not created");
    }
    // reset personName
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <Stack gap={3}>
        <Typography variant="h4" component="h1" textAlign="center">
          Sign Up
        </Typography>
        <TextField
          id="name"
          label="Enter your name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <Button variant="contained" onClick={handleSignUpSubmit}>
          Register
        </Button>
        <Link href="/login">Already have an account? Click here</Link>
      </Stack>
    </>
  );
}
