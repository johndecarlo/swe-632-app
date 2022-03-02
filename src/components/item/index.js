import style from "../item";
import React, { useState, useEffect } from "react";
import { Rating } from 'react-simple-star-rating';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Item = (props) => {
  const [averageRating, setAverageRating] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);

  const { type } = useParams();
  const userReview = [
    {
      userName: "John Doe",
      rating: 1,
      review: "Good one..",
      likes: false,
      dislikes: false,
      countLike: props.countLikes,
      countDislike: props.countDislikes,
    },
    {
      userName: "Thomas Smith",
      rating: 2,
      review: "Average product.",
      likes: false,
      dislikes: false,
      countLike: props.countLikes,
      countDislike: props.countDislikes,
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
    let temp = [...userReviewData];
    if (temp[index].likes) {
      temp[index].likes = false;
      if (temp[index].countLike < 0) {
        temp[index].countLike = 0;
      } else {
        temp[index].countLike -= 1;
      }
      setUserReviewData(temp);
    } else {
      if (temp[index].dislikes) {
        temp[index].dislikes = false;
        temp[index].countDislike -= 1;
      }
      temp[index].likes = true;
      temp[index].countLike += 1;
      setUserReviewData(temp);
    }
  }

  function handleDislike(index) {
    let temp = [...userReviewData];
    if (temp[index].dislikes) {
      if (temp[index].countDislike < 0) {
        temp[index].countDislike = 0;
      } else {
        temp[index].countDislike -= 1;
      }
      temp[index].dislikes = false;
      setUserReviewData(temp);
    } else {
      if (temp[index].likes) {
        temp[index].likes = false;
        temp[index].countLike -= 1;
      }
      temp[index].dislikes = true;
      if (temp[index].countDislike < 0) {
        temp[index].countDislike = 0;
      } else {
        temp[index].countDislike += 1;
      }

      setUserReviewData(temp);
    }
  }

  useEffect(() => {
    window.localStorage.setItem("reviews", JSON.stringify(userReviewData));
    let total = 0;

    userReviewData.forEach(x => {
      console.log(x);
      total += x.rating;
    });

    setAverageRating(total/userReviewData.length)

  }, [userReviewData]);

  const userReviewCard = userReviewData.map((review, ind) => {
    return (
      <div className="reviewbox" key={ind}>
        <div className="reviewbox-flex">
          <div className="reviewbox-username">
            User Name: <span className="reviewbox-user">{review.userName}</span>
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
          <div className={review.likes ? "reviewbox-like active" : "reviewbox-like"}>
            <div className="like-count">{review.countLike}</div>
            <FontAwesomeIcon
              onClick={() => handleLike(ind)}
              icon={faThumbsUp}
            />
          </div>
          <div
            className={
              review.dislikes ? "reviewbox-dislike active" : "reviewbox-dislike"
            }
          >
            <div className="dislike-count">{review.countDislike}</div>
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
              <div className="starRating" style={{'pointerEvents': 'none'}} >
                  <Rating size={20} initialValue={averageRating} readOnly={true} onClick />
              </div>
            </div>
            <br />
                Average Rating: {averageRating && averageRating}
            <p className={style.reviewText}>{userReviewData.length} Reviews</p>
          </div>
          {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
          <Link
            to={{
              pathname: `/category/${type}/write_review`,
              item: {
                title: props.title,
              },
            }}
            className="btn btn-primary"
          >
            Write a Review
          </Link>
          <button
            className="btn btn-secondary read-review-button"
            onClick={openModal}
          >
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
              background: "rgba(0, 0, 0, 0.5)",
            },
            content: {
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
            },
          }}
        >
          <button
            className="bg-white ms-auto mb-4 d-block border fs-4 px-2"
            onClick={closeModal}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          {userReviewCard}
        </Modal>
      </div>
    </div>
  );
};

export default Item;
