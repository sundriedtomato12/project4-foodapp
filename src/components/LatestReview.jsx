import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";

export default function LatestReview({ review }) {
  const stallLink = `/stall/${review.stall.id}`;
  return (
    <Grid item xs={3}>
      <Paper className="Review" key={review.id} component={Link} to={stallLink}>
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
