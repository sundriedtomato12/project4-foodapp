import React from "react";
import Header from "./components/Header.jsx";

export default function App() {
  return (
    <>
      <Header title="Where To Eat?" />
      <div class="towns">
        <p>Town components</p>
      </div>
      <div class="reviews">
        <p>Review components</p>
      </div>
    </>
  );
}
