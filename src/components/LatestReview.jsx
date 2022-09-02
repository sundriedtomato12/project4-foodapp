import React, { useState } from "react";
import { Grid, Paper, Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DiningIcon from "@mui/icons-material/Dining";
import PlaceIcon from "@mui/icons-material/Place";
import CommentIcon from "@mui/icons-material/Comment";

export default function LatestReview({ review }) {
  const stallLink = `/stall/${review.stall.id}`;
  const navigate = useNavigate();

  return (
    <Grid item>
      <Paper
        className="latest-review"
        key={review.id}
        onClick={() => {
          navigate(stallLink);
        }}
      >
        <h4>
          <DiningIcon />
          {review.stall.name}
        </h4>

        <h5>
          <PlaceIcon />
          {review.stall.town.town_name}
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
