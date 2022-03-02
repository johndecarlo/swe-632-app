import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
// import { useLocation} from "react-router-dom";

const WriteReview = (props) => {
	const [rating, setRating] = useState(0) // initial rating value
	// const location = useLocation();
	const navigate = useNavigate();

	const handleRating = (rate) => {
		setRating(rate)
	}

	const changePath = () => {
		navigate('/')
	}

	return (
		<div className="home">
		<form>
			<h2 className="question">How many stars would you like to leave?</h2>
			<div className="starRating">
				<Rating onClick={handleRating} ratingValue={rating} />
			</div>
			<br />
			<br />
			<h2 className="question">Write a summary of your experience</h2>
			<textarea className="textbox-area" name="experience" rows="8" cols="75" />
			<br />
			<br />
			<button className="btn-submit-review btn btn-primary" onClick={changePath}>
				Submit review
			</button>
		</form>
	</div>
	)
}

export default WriteReview;
