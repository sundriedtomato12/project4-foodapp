import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";

export default function MenuItem({ item }) {
  return (
    <Grid item>
      <Paper className="menu-item">
        <p>
          <img src={item.photo} />
          <br />
          {item.name}
          <br />
          {item.description}
        </p>
      </Paper>
    </Grid>
  );
}
