import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DiningIcon from "@mui/icons-material/Dining";
import PlaceIcon from "@mui/icons-material/Place";

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
        <h4>
          <DiningIcon />
          {stall.name}
        </h4>

        <p>
          <PlaceIcon />
          {stall.address}
        </p>
      </Paper>
    </Grid>
  );
}
