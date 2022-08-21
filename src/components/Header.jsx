import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

export default function Header({ title }) {
  return (
    <>
      <Grid container spacing={2} className="header">
        <Grid item xs={8}>
          <h1 className="header">{title}</h1>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" className="login-or-signup">
            Login or Sign Up!
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
