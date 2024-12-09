import React, { useState } from "react";

function RatingModal({ onClose, onSubmit }) {
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState("");

  const handleSubmit = () => {
    onSubmit({ rating, comments });
  };

  return (
    <div className="modal">
      <h3>Rate the Conversation</h3>
      <div>
        <label>Rating (out of 5): </label>
        <input
          type="number"
          max="5"
          min="0"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </div>
      <div>
        <label>Comments: </label>
        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        ></textarea>
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default RatingModal;
