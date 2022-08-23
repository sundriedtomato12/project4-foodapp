import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";

export default function Review({ review }) {
  return (
    <Grid item xs={3}>
      <Paper className="Review" key={review.id}>
        <p>
          {review.stall.name}
          <br />
          {review.stall.town.town_name}
          <br />
          {review.rating}
          <br />
          {review.comments}
        </p>
      </Paper>
    </Grid>
  );
}
