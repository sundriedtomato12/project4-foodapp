import { Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Row from "./components/Row.jsx";

export default function App() {
  const mainComponents = (
    <>
      <Header title="Where To Eat?" />
      <Row title="Towns" />
      <Row title="Latest Reviews" />
    </>
  );

  return (
    <Routes>
      <Route path="/" element={mainComponents} />
    </Routes>
  );
}
