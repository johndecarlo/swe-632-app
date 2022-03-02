import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

Modal.setAppElement("#root");
Modal.defaultStyles()

const Reviews = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const userReview = [
    {
      userName: "John Doe",
      rating: 4,
      review: "Good one..",
      likes: 0,
      dislikes: 0,
    },
    {
      userName: "Thomas Kate",
      rating: 2,
      review: "Average product.",
      likes: 0,
      dislikes: 0,
    },
  ];

  const [userReviewData, setUserReviewData] = useState(
    localStorage.getItem("reviews")
      ? JSON.parse(localStorage.getItem("reviews"))
      : userReview
  );

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleLike(index) {
    console.log(index)
    let temp = [...userReviewData];
    console.log("the data is here ", temp);
    // temp[index].likes += 1;
    // setUserReviewData(temp);
  }

  function handleDislike(index) {
    let temp = [...userReviewData];
    temp[index].dislikes += 1;
    setUserReviewData(temp);
  }

  useEffect(() => {
    window.localStorage.setItem("reviews", JSON.stringify(userReviewData));
  }, [userReviewData]);

  const userReviewCard = userReviewData.map((review, ind) => {
    return (
      <div className="reviewbox" key={ind}>
        <div className="reviewbox-flex">
          <div className="reviewbox-username">
            User Name:{" "}
            <span className="reviewbox-user">{review.userName}</span>
          </div>
          <div className="reviewbox-rating">
            Rating:{" "}
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
    <div>
      <button className="userReview__Button" onClick={openModal}>
        User Review
      </button>
      <Modal
        portalClassName="modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            background: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            border: "3px solid #474747",
            maxWidth: "70rem",
            width: "98%",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: "20px 25px",
            maxHeight: "100vh",
            overflowY: "auto",
            background: "rgb(0, 0, 0) !important"
          },
        }}
      >
        {userReviewCard}
      </Modal>
    </div>
  );
};

export default Reviews;
