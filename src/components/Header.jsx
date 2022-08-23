import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

export default function Header({ title, photo }) {
  return (
    <>
      <Grid container spacing={2} className="header">
        <Grid item xs={8}>
          <h1 className="header">{title}</h1>
          <img src={photo} />
        </Grid>
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
      </Grid>
    </>
  );
}
