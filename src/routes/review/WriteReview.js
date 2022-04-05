import React, { useState, useEffect } from 'react';
import { Rating } from 'react-simple-star-rating';

const WriteReview = props => {
  const [rating, setRating] = useState(0); // initial rating value
  const [textValue, setTextValue] = useState('');
  const [errorMessage, setErrorMessage] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleRating = rate => {
    setRating(rate);
  };

  const handleTextArea = e => {
    setTextValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setErrorMessage(validate(textValue, rating));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(errorMessage).length === 0 && isSubmit) {
    }
  }, [errorMessage, isSubmit]);

  const validate = (textValue, rating) => {
    const error = {};
    if (!textValue) {
      error.textValue = 'Summary is a required field';
    }
    if (!rating) {
      error.rating = 'Rating is a required field';
    }

    return error;
  };

  return (
    <div className="home">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h2 className="question">How many stars would you like to leave?</h2>
          <div className="star-rating">
            <Rating onClick={handleRating} ratingValue={rating} />
          </div>
          <div className="error-message">{errorMessage.rating}</div>
        </div>

        <div className="form-group">
          <h2 className="question">Write a summary of your experience</h2>
          <textarea
            className="textbox-area"
            name="experience"
            rows="8"
            cols="75"
            onChange={handleTextArea}
            value={textValue}
          />
          <div className="error-message">{errorMessage.textValue}</div>
        </div>

        <div className="form-group">
          <button className="btn-submit-review btn btn-primary">
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default WriteReview;
