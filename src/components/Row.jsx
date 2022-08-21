import React, { useState } from "react";
import Town from "./Town.jsx";
import Grid from "@mui/material/Grid";
import Review from "./Review.jsx";

export default function Row({ title }) {
  // creating this general row component so that we can reuse it for:
  // row of towns, row of latest stall reviews, row of menu items, and row of reviews
  // will just need to input different data for the props
  const titleClassName = title.toLowerCase().replace(/\s+/g, "-");
  let rowComponents;
  // need to create loops to render out the data for each respective row
  // also need to put them in horizontal scrollable containers
  //just rendering out a standard few boxes for now
  switch (title) {
    // Just rendering out 4 towns here first. when routes are done, will do loop to map and render
    case "Towns":
      rowComponents = (
        <Grid container spacing={2}>
          <Town />
          <Town />
          <Town />
          <Town />
        </Grid>
      );
      break;
    case "Latest Reviews":
      rowComponents = (
        <Grid container spacing={2}>
          <Review />
          <Review />
          <Review />
          <Review />
        </Grid>
      );
      break;
    case "Stalls":
      rowComponents = <p>Stalls!!</p>;
      break;
    case "Menu":
      rowComponents = <p>Menu!!</p>;
      break;
    case "Reviews":
      rowComponents = <p>Reviews!!</p>;
      break;
    default:
      rowComponents;
  }

  return (
    <>
      <div className={titleClassName}>
        <h1 className={titleClassName}>{title}</h1>
        {rowComponents}
      </div>
    </>
  );
}
