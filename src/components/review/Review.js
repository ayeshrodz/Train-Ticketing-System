import React from "react";
import {Avatar} from "@material-ui/core";
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SearchIcon from "@material-ui/icons/Search";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import "./Review.css"
function Review() {
  return (
    
    <div className = "body-review">
      <div  className = "search-body">
     <div className=" search_input">
        <SearchIcon className="search_inputIcon" />
        <input placeholder="Review" />

        <ArrowForwardIcon type="submit" className="search_inputIcon" />
      </div>
     </div>

      <div className="review">
      <div className = "review_header">
        <Avatar/>
        <div className = "review_info">
          <h2>Anupa Indula</h2>
          <p>Review</p>
        </div>
      </div>

      <div className = "review_body">
        <p>Message Goes Here</p>
      </div>

      <div className = "review_icons">
        <ThumbUpAltOutlinedIcon title ="Like" className = "like"/> Like
        <ChatOutlinedIcon className = "chat"/> Comment
        <ShareOutlinedIcon className = "share" /> Share
       
      </div>
    </div>

   
    </div>

  );
}

export default Review;
