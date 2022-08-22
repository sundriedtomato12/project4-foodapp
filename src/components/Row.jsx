import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Town from "./Town.jsx";
import Review from "./Review.jsx";

export default function Row({ title }) {
  const [towns, setTowns] = useState([]);
  // usestate to setTowns
  useEffect(() => {
    axios.get("/api/towns").then((response) => {
      setTowns(response.data.towns);
    });
  });
  // creating this general row component so that we can reuse it for:
  // row of towns, row of latest stall reviews, row of menu items, and row of reviews
  // will just need to input different data for the props
  const titleClassName = title.toLowerCase().replace(/\s+/g, "-");
  let rowComponents;
  // need to create loops to render out the data for each respective row
  // also need to put them in horizontal scrollable containers
  switch (title) {
    case "Towns":
      rowComponents = (
        <Grid container spacing={2}>
          {towns.map((town) => (
            <Town townName={town.town_name} townPhoto={town.photo} />
          ))}
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
