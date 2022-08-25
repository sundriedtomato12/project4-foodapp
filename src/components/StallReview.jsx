import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";

export default function StallReview({ review }) {
  return (
    <Grid item xs={3}>
      <Paper className="Review" key={review.id}>
        <p>
          {review.user_id}
          <br />
          {review.rating}
          <br />
          {review.comments}
        </p>
      </Paper>
    </Grid>
  );
}
