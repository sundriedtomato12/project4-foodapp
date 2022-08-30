import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Row from '../components/Row.jsx';
import Header from '../components/Header.jsx';
import ReviewForm from '../components/ReviewForm.jsx';


export default function StallPage({ user }) {
  let { stall_id } = useParams();

  const [menuItems, setMenuItems] = useState([]);
  const [stallReviews, setStallReviews] = useState([]);
  const [stallName, setStallName] = useState('');

  useEffect(() => {
    axios.get(`/api/stall/${stall_id}/items`).then((response) => {
      setMenuItems(response.data.itemsInStall);
      console.log('ITEMS', response.data.itemsInStall);
      setStallName(response.data.itemsInStall[0].stall.name);
    });
  }, []);
  useEffect(() => {
    axios.get(`/api/stall/${stall_id}/reviews`).then((response) => {
      setStallReviews(response.data.reviewsOnStall);
      console.log('REVIEWS', response.data.reviewsOnStall);
    });
  }, []);

  return (
    <>
      <Header user={user} />
      <h1>{stallName}</h1>
      <Row title="Menu" menuItems={menuItems} />
      <Row title="Reviews" stallReviews={stallReviews} />
      <ReviewForm stall_id={stall_id} />
    </>
  );
}
