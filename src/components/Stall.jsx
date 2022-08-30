import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";

export default function Stall({ stall }) {
  const stallLink = `/stall/${stall.id}`;
  return (
    <Grid item xs={3}>
      <Paper className="stall" component={Link} to={stallLink}>
        <p>{stall.name}</p>
        <p>{stall.address}</p>
      </Paper>
    </Grid>
  );
}
