import style from '../item';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

const Item = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { type } = useParams()
  const userReview = [
    {
      userName: 'John Doe',
      rating: 4,
      review: 'Good one..',
      likes: 0,
      dislikes: 0,
    },
    {
      userName: 'Thomas Smith',
      rating: 2,
      review: 'Average product.',
      likes: 0,
      dislikes: 0,
    },
  ];

  const [userReviewData, setUserReviewData] = useState(
    localStorage.getItem('reviews')
      ? JSON.parse(localStorage.getItem('reviews'))
      : userReview
  );

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleLike(index) {
    let temp = [...userReviewData];
    temp[index].likes += 1;
    setUserReviewData(temp);
  }

  function handleDislike(index) {
    let temp = [...userReviewData];
    temp[index].dislikes += 1;
    setUserReviewData(temp);
  }

  useEffect(() => {
    window.localStorage.setItem('reviews', JSON.stringify(userReviewData));
  }, [userReviewData]);

  const userReviewCard = userReviewData.map((review, ind) => {
    return (
      <div className="reviewbox" key={ind}>
        <div className="reviewbox-flex">
          <div className="reviewbox-username">
            User Name: <span className="reviewbox-user">{review.userName}</span>
          </div>
          <div className="reviewbox-rating">
            Rating:{' '}
            <span className="reviewbox-rating-star">{review.rating} Stars</span>
          </div>
        </div>
        <div className="reviewbox-comments">
          <div className="reviewbox-comment-title">Comments:</div>
          <p className="reviewbox-comment">{review.review}</p>
        </div>
        <div className="reviewbox-likeDislike">
          <div className="reviewbox-like">
            <div className="like-count">{review.likes}</div>
            <FontAwesomeIcon
              onClick={() => handleLike(ind)}
              icon={faThumbsUp}
            />
          </div>
          <div className="reviewbox-dislike">
            <div className="dislike-count">{review.dislikes}</div>
            <FontAwesomeIcon
              onClick={() => handleDislike(ind)}
              icon={faThumbsDown}
            />
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="cardContainer">
    <div className="card">
      <div className="card-body">
        <div id="card-sub-body r">
          <div className="card-header-container">
            <div>
              <h3 className={style.cardTitle}>{props.title}</h3>
            </div>
            <div className="starRating">

            </div>
          </div>
          <p className={style.reviewText}>10 Reviews</p>
        </div>
        <Link 
          to={{
            pathname: `/category/${type}/write_review`,
            item: {
              title: props.title
            }
          }} 
          className="btn btn-primary">Write a Review
          </Link>
        <button className="btn btn-secondary read-review-button" onClick={openModal}>
          Read Reviews
        </button>
      </div>
    </div>
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            background: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            maxWidth: '70rem',
            width: '98%',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px 25px',
            maxHeight: '100vh',
            overflowY: 'auto',
          },
        }}
      >
        {userReviewCard}
      </Modal>
    </div>
  </div>
  )
}

export default Item;