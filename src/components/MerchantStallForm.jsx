import React, { useState } from 'react';
import axios from 'axios';

export default function MerchantStallForm({ stall_id }) {
  const [stallName, setStallName] = useState('');
  const [address, setAddress] = useState('');

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

        <button type="submit" onClick={handleStallOnboard}>
          Onboard New Stall
        </button>
      </div>
    </>
  );
}
