import React, { useState } from 'react';
import axios from 'axios';

export default function MerchantMenuItemForm({ stall_id }) {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');

  // When user clicks Submit, store input in DB and state
  const handleMenuItemSubmit = () => {
    if (itemName && description) {
      // backend post request
      axios
        .post('/new-menu-item', {
          name: itemName,
          description,
          stall_id,
        })
        .then((response) => {
          const { newItem } = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log('Item not created');
    }
    // reset personName
    setItemName('');
    setDescription('');
  };

  return (
    <>
      <h3>Add a Menu Item</h3>
      <div className="item-form">
        <div className="name">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={itemName}
            onChange={(event) => setItemName(event.target.value)}
          />
        </div>
        <div className="description">
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>

        <button type="submit" onClick={handleMenuItemSubmit}>
          Add Menu Item
        </button>
      </div>
    </>
  );
}
