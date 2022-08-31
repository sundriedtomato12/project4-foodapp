import React, { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Town({ town }) {
  const townLink = `/town/${town.id}`;
  const navigate = useNavigate();
  return (
    <Grid item xs={2}>
      <Box
        className="town"
        key={town.id}
        onClick={() => {
          navigate(townLink);
        }}
      >
        <p>{town.town_name}</p>
        <img src={town.photo}></img>
      </Box>
    </Grid>
  );
}
