import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function MerchantStallForm({ stall_id }) {
  const [stallName, setStallName] = useState('');
  const [address, setAddress] = useState('');
  const [towns, setTowns] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('/api/towns').then((response) => {
      console.log(response);
      setTowns(response.data.towns);
    });
  }, []);

  useEffect(() => {
    axios.get('/api/categories').then((response) => {
      console.log(response);
      setCategories(response.data.categories);
    });
  }, []);

  // When user clicks Submit, store input in DB and state
  const handleStallOnboard = () => {
    if (stallName && address) {
      // backend post request
      axios
        .post('/new-stall', {
          name: stallName,
          address,
        })
        .then((response) => {
          const { newStall } = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log('Stall not created');
    }
    // reset personName
    setStallName('');
    setAddress('');
  };

  return (
    <>
      <h3>Onboard A Stall</h3>
      <div className="stall-form">
        <div className="stall">
          <label htmlFor="stallName">Stall Name: </label>
          <input
            type="text"
            id="stall-name"
            value={stallName}
            onChange={(event) => setStallName(event.target.value)}
          />
        </div>
        <div className="address">
          <label htmlFor="address">Address: </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
        </div>
        <div className="town">
          <label htmlFor="town">Town: </label>
          <select name="town">
            {towns.map((town) => (
              <option value={town.id}>
                {town.town_name}
              </option>
            ))}
          </select>
        </div>
        <div className="category">
          <label htmlFor="category">Category: </label>
          <select name="category">
            {categories.map((category) => (
              <option value={category.id}>
                {category.category_name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" onClick={handleStallOnboard}>
          Onboard New Stall
        </button>
      </div>
    </>
  );
}
