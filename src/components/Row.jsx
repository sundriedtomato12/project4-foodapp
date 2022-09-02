import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Town from "./Town.jsx";
import LatestReview from "./LatestReview.jsx";
import StallReview from "./StallReview.jsx";
import Stall from "./Stall.jsx";
import MenuItem from "./MenuItem.jsx";

export default function Row({ title, stallsInTown, menuItems, stallReviews }) {
  // usestate to setTowns
  // should do the same thing for the other stuff
  const [towns, setTowns] = useState([]);
  const [latestReviews, setLatestReviews] = useState([]);
  useEffect(() => {
    axios.get("/api/towns").then((response) => {
      setTowns(response.data.towns);
    });
  }, []);
  useEffect(() => {
    axios.get("/api/latest-reviews").then((response) => {
      setLatestReviews(response.data.latestReviews);
    });
  }, []);

  // creating this general row component so that we can reuse it for:
  // so far only rows of towns and latest reviews work.
  // but because stalls need dynamic route, am gonna create a component on its own.
  const titleClassName = title.toLowerCase().replace(/\s+/g, "-");
  let rowComponents;
  // need to create loops to render out the data for each respective row
  // also need to put them in horizontal scrollable containers
  switch (title) {
    case "Towns":
      rowComponents = (
        <Grid container direction="row" spacing={2}>
          {towns.map((town) => (
            <Town town={town} />
          ))}
        </Grid>
      );
      break;
    case "Latest Reviews":
      rowComponents = (
        <Grid container direction="row" spacing={2}>
          {latestReviews.map((review) => (
            <LatestReview review={review} />
          ))}
        </Grid>
      );
      break;
    case "Stalls":
      // stalls in town
      rowComponents = (
        <Grid container direction="row" spacing={2}>
          {stallsInTown.map((stall) => (
            <Stall stall={stall} />
          ))}
        </Grid>
      );
      break;
    case "Menu":
      rowComponents = (
        <Grid container direction="row" spacing={2}>
          {menuItems.map((item) => (
            <MenuItem item={item} />
          ))}
        </Grid>
      );
      break;
    case "Reviews":
      rowComponents = (
        <Grid container direction="row" spacing={2}>
          {stallReviews.map((review) => (
            <StallReview review={review} />
          ))}
        </Grid>
      );
      break;
    default:
      rowComponents;
  }

  return (
    <>
      <div className={titleClassName}>
        <h1 className={titleClassName}>{title}</h1>
        <div id={titleClassName} style={{ overflowX: "auto" }}>
          {rowComponents}
        </div>
      </div>
    </>
  );
}
