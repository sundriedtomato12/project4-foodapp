import React, { useState } from "react";
import Button from "@mui/material/Button";

export default function Header({ title }) {
  return (
    <>
      <div className="header">
        <h1 className="header">{title}</h1>
        <Button variant="contained" className="login-or-signup">
          Login or Sign Up!
        </Button>
      </div>
    </>
  );
}
