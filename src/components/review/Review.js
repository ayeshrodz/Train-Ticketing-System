import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SearchIcon from "@material-ui/icons/Search";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import "./Review.css";
import firestore from "../../firebase";
function Review() {
  const ref = firestore.firestore().collection("Review");
  const [loading, setLoading] = useState(false);
  const [Review, setReview] = useState([]);

  function getReview() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
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
    return  <div className="loading-screen">
    <h2>Loading Content of Review Page...</h2>
  </div>;
  }

  return (
    <div className="body-review">
      <div className="search-body">
        <div className=" search_input">
          <SearchIcon className="search_inputIcon" />
          <input placeholder="Review" />

          <ArrowForwardIcon type="submit" className="search_inputIcon" />
        </div>
      </div>
      {Review.map((Review) => (
        <div className="review">
          <div className="review_header">
            <Avatar />
            <div className="review_info">
              <h2>{Review.UserName}</h2>
              <p>{Review.position}</p>
            </div>
          </div>

          <div className="review_body">
            <p>{Review.review}</p>
          </div>

          <div className="review_icons">
            <ThumbUpAltOutlinedIcon title="Like" className="like" /> Like
            <ChatOutlinedIcon className="chat" /> Comment
            <ShareOutlinedIcon className="share" /> Share
          </div>
        </div>
      ))}
    </div>
  );
}

export default Review;
