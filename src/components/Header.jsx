import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

export default function Header({ user }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    axios
      .post("/api/logout")
      .then(() => {
        navigate("/");
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  };

  let buttons = "";
  if (user.loggedIn == false) {
    buttons = (
      <>
        <Grid item xs={2}>
          <Button variant="contained" className="login" href="/login">
            Login
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" className="signup" href="/signup">
            Sign Up
          </Button>
        </Grid>
      </>
    );
  } else if (user.loggedIn == true) {
    buttons = (
      <>
        <Grid item xs={2}>
          <Button
            variant="contained"
            color="primary"
            className="merchant-landing"
            href="/merchant-landing"
          >
            Create New Stall
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            color="error"
            className="logout"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Grid>
      </>
    );
  }

  return (
    <>
      <Grid container spacing={2} className="header">
        <Grid item xs={8}>
          <h1
            className="header"
            onClick={() => {
              navigate("/");
            }}
          >
            Where To Eat?
          </h1>
        </Grid>
        {buttons}
      </Grid>
    </>
  );
}
