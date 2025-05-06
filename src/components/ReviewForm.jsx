import React, { useState } from "react"
import "./Account.css"

const ReviewForm = ({ onSubmit, orderId }) => {
  const [rating, setRating] = useState("")
  const [comment, setComment] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (rating && comment) {
      onSubmit(orderId, { rating: parseInt(rating), comment })
      setRating("")
      setComment("")
    }
  }

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <div>
        <label>Rating (1-5):</label>
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Comment:</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="submit-review-btn">
        Submit Review
      </button>
    </form>
  )
}

export default ReviewForm
