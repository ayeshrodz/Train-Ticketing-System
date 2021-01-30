import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SearchIcon from "@material-ui/icons/Search";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Card, CardColumns } from "react-bootstrap";

import "./Review.css";
import { db } from "../../firebase";

function Review() {
  const ref = db.collection("Review");
  const [loading, setLoading] = useState(false);
  const [Review, setReview] = useState([]);

  function getReview() {
    setLoading(true);
    ref.limit(6).onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setReview(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getReview();
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <h2>Loading Content of Review Page...</h2>
      </div>
    );
  }

  return (
    <div className="body-review">
      <div className="search-body">
        <div className="search_input">
          <SearchIcon className="search_inputIcon" />
          <input placeholder="Review" />
          <ArrowForwardIcon type="submit" className="search_inputIcon" />
        </div>
      </div>

      <div className="justify-content-center">
        <CardColumns className="review-list">
          {Review.map((review) => (
            <Card
              key={review.id}
              className="mt-2 hover-shadow-sm bg-white rounded col-lg review"
            >
              <Card.Body>
                <div className="review_header">
                  <Avatar className="profile-pic rounded" />
                  <div className="review_info">
                    <Card.Title className="review-title">
                      {review.UserName}
                    </Card.Title>
                    <Card.Subtitle className="review-subtitle">
                      {review.position}
                    </Card.Subtitle>
                  </div>
                </div>
                <div className="review_body">
                  <p>{review.review}</p>
                </div>
                <div className="review_icons">
                  <div>
                    <ThumbUpAltOutlinedIcon className="like" />
                    Like
                  </div>
                  <div>
                    <ChatOutlinedIcon className="chat" />
                    Comment
                  </div>
                  <div>
                    <ShareOutlinedIcon className="share" /> Share
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}
        </CardColumns>
      </div>
    </div>
  );
}

export default Review;
