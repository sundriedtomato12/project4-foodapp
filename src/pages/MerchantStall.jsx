import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Row from '../components/Row.jsx';
import Header from '../components/Header.jsx';
import MerchantMenuItemForm from '../components/MerchantMenuItemForm.jsx';

export default function StallPage() {
  const { stall_id } = useParams();
  const [menuItems, setMenuItems] = useState([]);
  // const [stallReviews, setStallReviews] = useState([]);
  const [stallName, setStallName] = useState('');

  useEffect(() => {
    axios.get(`/api/stall/${stall_id}/items`).then((response) => {
      setMenuItems(response.data.itemsInStall);
      console.log('ITEMS', response.data.itemsInStall);
      setStallName(response.data.itemsInStall[0].stall.name);
    });
  }, []);
  // useEffect(() => {
  //   axios.get(`/api/stall/${stall_id}/reviews`).then((response) => {
  //     setStallReviews(response.data.reviewsOnStall);
  //     console.log('REVIEWS', response.data.reviewsOnStall);
  //   });
  // }, []);

  return (
    <>
      <Header />
      <h1>{stallName}</h1>
      <Row title="Menu" menuItems={menuItems} />

      <MerchantMenuItemForm stall_id={stall_id} />
    </>
  );
}
