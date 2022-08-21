import React, { useState } from "react";
import axios from "axios";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // When user clicks Submit, store input in DB and state
  const handleSignUpSubmit = () => {
    if (email && password && name) {
      // backend post request with email, password, name
      axios
        .post("/signup", {
          email: email,
          password: password,
          name: name,
          createdAt: new Date(),
          updatedAt: new Date(),
        })
        .then((response) => {
          const { newUser } = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("User not created");
    }
    // reset personName
    setEmail("");
    setPassword("");
    setName("");
  };

  return (
    <>
      <h3>Sign Up</h3>
      <div className="signup-form">
        <div className="name">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="email">
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="password">
          <label htmlFor="password">Password: </label>
          <input
            type="text"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit" onClick={handleSignUpSubmit}>
          Sign Up
        </button>
      </div>
    </>
  );
}