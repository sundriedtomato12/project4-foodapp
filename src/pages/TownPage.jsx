import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header.jsx";
import Row from "../components/Row.jsx";

export default function TownPage() {
  let { townId } = useParams();
  const [stallsInTown, setStallsInTown] = useState([]);
  console.log(townId);

  useEffect(() => {
    axios.get(`/api/town/${townId}`).then((response) => {
      setStallsInTown(response.data.stallsInTown);
    });
  }, []);

  return (
    <>
      <Header title="Town Name" />
      <Row title="Stalls" stallsInTown={stallsInTown} />
    </>
  );
}
