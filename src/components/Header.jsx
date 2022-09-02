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
      <div className="buttons">
        <Grid item xs>
          <Button
            variant="contained"
            className="login"
            id="login-button"
            href="/login"
          >
            Login
          </Button>
        </Grid>
        <Grid item xs>
          <Button
            variant="contained"
            className="signup"
            id="signup-button"
            href="/signup"
          >
            Sign Up
          </Button>
        </Grid>
      </div>
    );
  } else if (user.loggedIn == true) {
    buttons = (
      <div className="buttons">
        <Grid item xs>
          <Button
            variant="contained"
            color="primary"
            className="merchant-landing"
            id="merchant-landing-button"
            href="/merchant-landing"
          >
            Create New Stall
          </Button>
        </Grid>
        <Grid item xs>
          <Button
            variant="contained"
            color="error"
            className="logout"
            id="logout-button"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Grid>
      </div>
    );
  }

  return (
    <>
      <Grid container spacing={2} className="header">
        <Grid item xs>
          <div id="header-and-logo">
            <img src="./foodtruck.png" id="header-img" />
            <h1
              className="header"
              onClick={() => {
                navigate("/");
              }}
            >
              Where To Eat?
            </h1>
          </div>
        </Grid>
        {buttons}
      </Grid>
    </>
  );
}
