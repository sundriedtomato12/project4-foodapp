import React, { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import axios from "axios";

export default function Town({ town }) {
  return (
    <Grid item xs={2}>
      <Box className="town" key={town.id}>
        <p>{town.town_name}</p>
        <img src={town.photo}></img>
      </Box>
    </Grid>
  );
}
