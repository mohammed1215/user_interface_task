import React, { useState } from "react"
import ReviewForm from "./ReviewForm"
import "./Account.css"

const Account = () => {
  const user = {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    membershipTier: "Platinum",
  }

  const [orders, setOrders] = useState([
    { id: 1, event: "Jazz Night", date: "2023-03-10", reviews: [] },
    { id: 2, event: "Tech Conference", date: "2023-04-22", reviews: [] },
  ])

  const [showForm, setShowForm] = useState({})

  const handleReviewSubmit = (orderId, review) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId
        ? { ...order, reviews: [...order.reviews, review] }
        : order
    )
    setOrders(updatedOrders)
    setShowForm({ ...showForm, [orderId]: false })
  }

  /*
  //Backend Integration Notes:
  //- Fetch user data:
    useEffect(() => {
      fetch('/api/user/{userId}')
        .then(res => res.json())
        .then(data => setUser(data));
    }, []);
  //- Fetch orders:
    useEffect(() => {
      fetch('/api/orders/user/{userId}')
        .then(res => res.json())
        .then(data => setOrders(data));
    }, []);
  //- Submit review:
    const handleReviewSubmit = (orderId, review) => {
      fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId, ...review })
      })
        .then(res => res.json())
        .then(() => {
          // Refresh orders or update state
        });
    };
*/

  return (
    <div className="account-page">
      <h1>Account Page</h1>
      <div className="user-info">
        <h2>User Information</h2>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Membership Tier:</strong> {user.membershipTier}
        </p>
        <button className="edit-profile-btn">Edit Profile</button>
      </div>
      <div className="past-bookings">
        <h2>Past Bookings</h2>
        <ul className="order-list">
          {orders.map((order) => (
            <li key={order.id} className="order-item">
              <div className="order-details">
                <span>{order.event}</span> - <span>{order.date}</span>
                <button
                  className="review-btn"
                  onClick={() =>
                    setShowForm({
                      ...showForm,
                      [order.id]: !showForm[order.id],
                    })
                  }
                >
                  {showForm[order.id] ? "Cancel" : "Leave a Review"}
                </button>
              </div>
              {showForm[order.id] && (
                <ReviewForm onSubmit={handleReviewSubmit} orderId={order.id} />
              )}
              <div className="reviews-list">
                <h3>Reviews:</h3>
                {order.reviews.length > 0 ? (
                  <ul>
                    {order.reviews.map((review, index) => (
                      <li key={index}>
                        Rating: {review.rating}/5, Comment: {review.comment}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No reviews yet.</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Account
