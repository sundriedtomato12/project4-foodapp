import React, { useState } from "react";
import { Grid, Paper, Rating } from "@mui/material";

export default function StallReview({ review }) {
  return (
    <Grid item xs={3}>
      <Paper className="Review" key={review.id}>
        <p>
          {review.user.name}
          <br />
          <Rating value={review.rating} readOnly />
          <br />
          {review.comments}
        </p>
      </Paper>
    </Grid>
  );
}
