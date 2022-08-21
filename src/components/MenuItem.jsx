import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";

export default function MenuItem() {
  return (
    <Grid item xs={3}>
      <Paper className="menu-item">
        <p>
          Image
          <br />
          Name
          <br />
          Description
        </p>
      </Paper>
    </Grid>
  );
}
