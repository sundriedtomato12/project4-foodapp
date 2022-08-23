import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";

export default function Stall({ stall }) {
  return (
    <Grid item xs={3}>
      <Paper className="stall">
        <p>{stall.name}</p>
        <p>{stall.address}</p>
      </Paper>
    </Grid>
  );
}
