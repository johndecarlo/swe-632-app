import React, { useState } from 'react';

const changePath = () => {
  navigate('/')
}

const SubmitReview = () => {
	const [rating, setRating] = useState(0) // initial rating value

	return (
    <div className="home">
      <h1>Thank You for your Feedback</h1>
      <button className="btn-submit-review btn btn-primary" onClick={changePath}>
				Home Page
			</button>
	  </div>
	)
}

export default SubmitReview;
