import React from "react";
import Header from "./components/Header.jsx";
import Row from "./components/Row.jsx";

export default function App() {
  return (
    <>
      <Header title="Where To Eat?" />
      <Row title="Towns" />
      <Row title="Latest Reviews" />
      <div className="reviews">
        <p>Review components</p>
      </div>
    </>
  );
}
