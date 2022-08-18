import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";

export default function Stall() {
  return (
    <Grid item xs={3}>
      <Paper className="stall">
        <p>
          Stall Name
          <br />
          AverageRating
          <br />
          Review
        </p>
      </Paper>
    </Grid>
  );
}
