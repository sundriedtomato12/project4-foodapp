import React, { useState } from "react";
import { Grid, Box } from "@mui/material";

export default function Town() {
  return (
    <Grid item xs={3}>
      <Box className="town">
        <p>Name</p>
        <p>Image as background</p>
      </Box>
    </Grid>
  );
}
