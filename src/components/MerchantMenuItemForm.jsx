import React, { useState } from 'react';
import axios from 'axios';

export default function MerchantMenuItemForm({ stall_id }) {
  const [rating, setRating] = useState('');
  const [comments, setComments] = useState('');

  // When user clicks Submit, store input in DB and state
  const handleReviewSubmit = () => {
    console.log(rating, comments, stall_id);
    if (rating && comments) {
      // backend post request
      axios
        .post('/new-review', {
          stall_id,
          comments,
          rating,
        })
        .then((response) => {
          const { newReview } = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log('Review not created');
    }
    // reset personName
    setRating('');
    setComments('');
  };

  return (
    <>
      <h3>Post A Review</h3>
      <div className="review-form">
        <div className="rating">
          <label htmlFor="rating">Rating: </label>
          <input
            type="text"
            id="rating"
            value={rating}
            onChange={(event) => setRating(event.target.value)}
          />
        </div>
        <div className="comments">
          <label htmlFor="comments">Comments: </label>
          <input
            type="text"
            id="comments"
            value={comments}
            onChange={(event) => setComments(event.target.value)}
          />
        </div>

        <button type="submit" onClick={handleReviewSubmit}>
          Submit Review
        </button>
      </div>
    </>
  );
}
