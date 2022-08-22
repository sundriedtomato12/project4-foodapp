import React, { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import axios from "axios";

export default function Town({ townName, townPhoto }) {
  return (
    <Grid item xs={2}>
      <Box className="town">
        <p>{townName}</p>
        <img src={townPhoto}></img>
      </Box>
    </Grid>
  );
}
