import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";

export default function MenuItem({ item }) {
  return (
    <Grid item xs={2}>
      <Paper className="menu-item">
        {/* <p>
          <img src={item.photo} />
          <br />
          {item.name}
          <br />
          {item.description}
        </p> */}

        <p>
          <img src={item.photo} />
        </p>
        <h1 className="product__title">{item.name}</h1>
        <hr />
        <p>{item.description} </p>
      </Paper>
    </Grid>
  );
}
