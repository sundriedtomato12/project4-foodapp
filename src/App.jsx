/* eslint-disable quotes */
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Row from "./components/Row.jsx";
import LoginForm from "./components/LoginForm.jsx";
import SignUpForm from "./components/SignUpForm.jsx";

export default function App() {
  const [stallsByTown, setStallsByTown] = useState([]);

  const mainComponents = (
    <>
      <Header title="Where To Eat?" />
      <Row title="Towns" />
      <Row title="Latest Reviews" />
    </>
  );

  const loginComponents = (
    <>
      <LoginForm />
    </>
  );

  const signupComponents = (
    <>
      <SignUpForm />
    </>
  );

  const stallsByTownComponents = (
    <>
      <Header title="Town Name" />
      <Row
        title="Stalls"
        stallsByTown={stallsByTown}
        setStallsByTown={setStallsByTown}
      />
    </>
  );

  return (
    <Routes>
      <Route path="/" element={mainComponents} />
      <Route path="/signup" element={signupComponents} />
      <Route path="/town/:town_id" element={stallsByTownComponents} />
    </Routes>
  );
}
