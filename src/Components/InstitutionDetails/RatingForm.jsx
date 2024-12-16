import React, { useState } from "react";
import "./rating-form.scss";

const RatingForm = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the rating and comment to your server
    console.log("Rating:", rating, "Comment:", comment);
    setSubmitted(true);
  };

  return (
    <div className="rating-form">
      <h2>Rate Our Service</h2>
      <form onSubmit={handleSubmit}>
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${star <= rating ? "selected" : ""}`}
              onClick={() => handleStarClick(star)}
            >
              ★
            </span>
          ))}
        </div>
        <div className="mb-3">
          <label htmlFor="comment" className="form-label">
            Your Feedback
          </label>
          <textarea
            className="form-control"
            id="comment"
            rows="4"
            value={comment}
            onChange={handleCommentChange}
            placeholder="Please share your thoughts about our service..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-submit"
          disabled={rating === 0}
        >
          Submit Feedback
        </button>
      </form>
      {submitted && (
        <div className="feedback-message">Thank you for your feedback!</div>
      )}
    </div>
  );
};

export default RatingForm;
