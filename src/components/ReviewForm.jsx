import React, { useState } from "react";
import axios from "axios";
import { Rating } from "@mui/material";

export default function ReviewForm({ stall_id, user }) {
  const [rating, setRating] = useState("");
  const [comments, setComments] = useState("");
  const { userId } = user;

  // When user clicks Submit, store input in DB and state
  const handleReviewSubmit = () => {
    console.log(rating, comments, stall_id);
    if (rating && comments) {
      // backend post request
      axios
        .post("/new-review", {
          userId,
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
      console.log("Review not created");
    }
    // reset personName
    setRating("");
    setComments("");
  };

  return (
    <>
      <h3>Post A Review</h3>
      <div className="review-form">
        <div className="rating">
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
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
