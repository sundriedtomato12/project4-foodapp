import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Stall({ stall }) {
  const stallLink = `/stall/${stall.id}`;
  const navigate = useNavigate();
  return (
    <Grid item>
      <Paper
        className="stall"
        onClick={() => {
          navigate(stallLink);
        }}
      >
        <h4>{stall.name}</h4>
        <p>{stall.address}</p>
      </Paper>
    </Grid>
  );
}
