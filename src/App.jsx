/* eslint-disable quotes */
import { Routes, Route, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import MainPage from "./pages/MainPage.jsx";
import TownPage from "./pages/TownPage.jsx";
import StallPage from "./pages/StallPage.jsx";

import MerchantLanding from "./pages/MerchantLanding.jsx";
import MerchantStall from "./pages/MerchantStall.jsx";

import SignupPage from "./pages/SignupPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

export default function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    const userId = Cookies.get("userId");
    if (userId) {
      return { userId };
    }
    return { userId: "", loggedIn: false };
  });

  useEffect(() => {
    if (user.userId) {
      axios.get("/api/verify").then((response) => {
        setUser({
          userId: response.data.userId,
          loggedIn: response.data.loggedIn,
        });
      });
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/merchant-landing" element={<MerchantLanding user={user} />} />
      <Route path="/merchant-stall/:stall_id" element={<MerchantStall user={user} />} />
      <Route path="/" element={<MainPage user={user} />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage setUser={setUser} />} />
      <Route path="/town/:town_id" element={<TownPage user={user} />} />
      <Route path="/stall/:stall_id" element={<StallPage user={user} />} />
    </Routes>
  );
}
