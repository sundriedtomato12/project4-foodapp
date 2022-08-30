import React, { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Town({ town }) {
  const townLink = `/town/${town.id}`;
  return (
    <Grid item xs={2}>
      <Box className="town" key={town.id} component={Link} to={townLink}>
        <p>{town.town_name}</p>
        <img src={town.photo}></img>
      </Box>
    </Grid>
  );
}
