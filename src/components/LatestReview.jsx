import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LatestReview({ review }) {
  const stallLink = `/stall/${review.stall.id}`;
  const navigate = useNavigate();
  return (
    <Grid item xs={3}>
      <Paper
        className="latest-review"
        key={review.id}
        onClick={() => {
          navigate(stallLink);
        }}
      >
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
