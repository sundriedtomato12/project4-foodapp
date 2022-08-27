import React, { useState } from "react";
import Header from "../components/Header.jsx";
import Row from "../components/Row.jsx";

export default function MainPage() {
  return (
    <>
      <Header title="Where To Eat?" />
      <Row title="Towns" />
      <Row title="Latest Reviews" />
    </>
  );
}
