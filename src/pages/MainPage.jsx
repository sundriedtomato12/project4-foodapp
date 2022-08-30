import React, { useState } from "react";
import Header from "../components/Header.jsx";
import Row from "../components/Row.jsx";

export default function MainPage({ user }) {
  return (
    <>
      <Header user={user} />
      <Row title="Towns" />
      <Row title="Latest Reviews" />
    </>
  );
}
