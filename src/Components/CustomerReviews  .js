import React, { useState } from "react";

const CustomerReviews = () => {
  const [reviews] = useState([
    {
      name: "Amit Sharma",
      review: "Great quality furniture! Highly recommended.",
    },
    {
      name: "Priya Mehta",
      review: "Excellent customer service and fast delivery.",
    },
    { name: "Rahul Verma", review: "Very comfortable and durable products." },
  ]);

  return (
    <div className="policy-container">
      <h1>Customer Reviews</h1>
      <p>Read what our customers have to say about Mayur Furniture.</p>

      <div className="reviews">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <h3>{review.name}</h3>
            <p>"{review.review}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
