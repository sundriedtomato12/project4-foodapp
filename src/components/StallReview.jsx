import React, { useState } from "react";
import { Grid, Paper, Rating } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import PersonIcon from "@mui/icons-material/Person";

export default function StallReview({ review }) {
  return (
    <Grid item xs={3}>
      <Paper className="Review" key={review.id}>
        <h5>
          <PersonIcon />
          {review.user.name}
        </h5>
        <Rating value={review.rating} readOnly />
        <p>
          <CommentIcon />
          {review.comments}
        </p>
      </Paper>
    </Grid>
  );
}
