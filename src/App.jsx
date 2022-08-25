/* eslint-disable quotes */
import { Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import LoginForm from "./components/LoginForm.jsx";
import SignUpForm from "./components/SignUpForm.jsx";
import MainPage from "./pages/MainPage.jsx";
import TownPage from "./pages/TownPage.jsx";
import StallPage from "./pages/StallPage.jsx";

export default function App() {
  const signupComponents = (
    <>
      <SignUpForm />
    </>
  );

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signup" element={signupComponents} />
      <Route path="/town/:town_id" element={<TownPage />} />
      <Route path="/stall/:stall_id" element={<StallPage />} />
    </Routes>
  );
}
