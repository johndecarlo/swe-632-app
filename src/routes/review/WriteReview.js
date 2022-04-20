import React, { useState, useEffect } from 'react';
import { Rating } from 'react-simple-star-rating';
import Swal from 'sweetalert2';
import { useNavigate, useParams, Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const WriteReview = props => {
  const [rating, setRating] = useState(0); // initial rating value
  const [textValue, setTextValue] = useState('');
  const [errorMessage, setErrorMessage] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { type } = useParams();

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
      Swal.fire({
        title: 'Success',
        text: 'Thanks for your review!',
        icon: 'success',
        showConfirmButton: false,
        timer: 2500,
      });
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

  const confirmCancel = () => {
    Swal.fire({
      title: 'Are your sure you want to cancel?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, cancel it!',
      cancelButtonText: 'No, keep it',
    }).then(result => {
      if (result.value) {
        navigate(-1);
      }
    });
  };


  return (
    <div className="category-component">
      <div className="breadcrumb">
        <Link className="breadcrumb-link" to="/">
          Home
        </Link>
        <FontAwesomeIcon icon={faAngleRight} />
        <Link className="breadcrumb-link" to={`/category/${type}`}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </Link>
        <FontAwesomeIcon icon={faAngleRight} />
        <span className="breadcrumb-link">
          {location.state.writeReviewData.title}
        </span>
      </div>
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

        <div className="form-group write-review-btns">
        <button className="btn-submit-review btn btn-primary">
            Submit Review
          </button>
          <span
            onClick={confirmCancel}
            className="btn-submit-review btn btn-warning"
          >
            Cancel
          </span>
        </div>
      </form>
    </div>
  );
};

export default WriteReview;
