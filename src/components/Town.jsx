import React, { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import axios from "axios";

export default function Town() {
  useEffect(() => {
    axios.get("/towns").then((response) => {
      console.log(response);
    });
  });

  return (
    <Grid item xs={3}>
      <Box className="town">
        <p>Name</p>
        <p>Image as background</p>
      </Box>
    </Grid>
  );
}
