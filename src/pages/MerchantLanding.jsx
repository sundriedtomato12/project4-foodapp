import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header.jsx';
import Row from '../components/Row.jsx';
import MerchantStallForm from '../components/MerchantStallForm.jsx';

export default function MerchantLanding({ user }) {
  // const { town_id } = useParams();
  const [stallsInTown, setStallsInTown] = useState([]);
  const [townName, setTownName] = useState('');

  useEffect(() => {
    axios.get('/api/merchant-stalls').then((response) => {
      console.log(response);
      setStallsInTown(response.data.stallsByMerchant);
      // setTownName(response.data.stallsInTown[0].town.town_name);
    });
  }, []);

  return (
    <>
      <Header user={user} />
      <Row title="Stalls" stallsInTown={stallsInTown} />
      <MerchantStallForm />
    </>
  );
}
