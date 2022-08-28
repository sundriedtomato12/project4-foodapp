import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header.jsx";
import Row from "../components/Row.jsx";

export default function TownPage({ user }) {
  let { town_id } = useParams();
  const [stallsInTown, setStallsInTown] = useState([]);
  const [townName, setTownName] = useState("");

  useEffect(() => {
    axios.get(`/api/town/${town_id}`).then((response) => {
      setStallsInTown(response.data.stallsInTown);
      setTownName(response.data.stallsInTown[0].town.town_name);
    });
  }, []);

  return (
    <>
      <Header user={user} />
      <h1>{townName}</h1>
      <Row title="Stalls" stallsInTown={stallsInTown} />
    </>
  );
}
