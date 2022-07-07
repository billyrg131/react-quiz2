import React from 'react';

export default function Review({ dev, marks }) {
  return (
    <div className="review">
      <h1>Review</h1>
      <p>Got {marks} out of 1 mark.</p>
      <div key={dev.id}>
        <h2>Here are the answer</h2>
        <p style={{ textAlign: 'center' }}>{dev.answer}</p>
      </div>
    </div>
  );
}
