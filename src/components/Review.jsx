import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";

export default function Review() {
  return (
    <Grid item xs={3}>
      <Paper className="Review">
        <p>
          Stall Name
          <br />
          Town
          <br />
          Rating
          <br />
          Review
        </p>
      </Paper>
    </Grid>
  );
}
