import React, { useState } from "react";

export default function Header({ title }) {
  return (
    <>
      <div className="header">
        <h1 className="header">{title}</h1>
        <button className="loginorsignup">Login or Sign Up!</button>
      </div>
    </>
  );
}
