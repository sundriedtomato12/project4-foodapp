import { Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Row from "./components/Row.jsx";
import LoginForm from "./components/LoginForm.jsx";
import SignUpForm from "./components/SignUpForm.jsx";

export default function App() {
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

  return (
    <Routes>
      <Route path="/" element={mainComponents} />
      <Route path="/signup" element={signupComponents} />
    </Routes>
  );
}
